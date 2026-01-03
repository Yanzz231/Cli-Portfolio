import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dir = searchParams.get('dir') || '';

  try {
    // Construct the full path - public folder is served from the root
    const publicDir = path.join(process.cwd(), 'public');
    const targetPath = path.join(publicDir, dir);

    // Security: Ensure the path is within public directory
    const normalizedPath = path.normalize(targetPath);
    if (!normalizedPath.startsWith(publicDir)) {
      return NextResponse.json(
        { error: 'Invalid path' },
        { status: 403 }
      );
    }

    // Check if directory exists
    if (!fs.existsSync(normalizedPath)) {
      return NextResponse.json(
        { error: 'Directory not found' },
        { status: 404 }
      );
    }

    // Read directory contents
    const items = fs.readdirSync(normalizedPath, { withFileTypes: true });

    const fileList = items.map((item) => {
      const itemPath = path.join(normalizedPath, item.name);
      const stats = fs.statSync(itemPath);

      return {
        name: item.name,
        type: item.isDirectory() ? 'folder' : 'file',
        size: item.isFile() ? formatFileSize(stats.size) : undefined,
      };
    });

    return NextResponse.json({
      path: dir || '~',
      items: fileList,
    });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json(
      { error: 'Failed to read directory' },
      { status: 500 }
    );
  }
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i)) + sizes[i];
}

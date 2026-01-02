'use client';

import { ReactNode } from 'react';

interface TerminalBodyProps {
    children: ReactNode;
}

export function TerminalBody({ children }: TerminalBodyProps) {
    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-terminal-bg">
            {children}
        </div>
    );
}

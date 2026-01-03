'use client';

import { CommandOutput as CommandOutputType } from '@/lib/types';
import { neofetchData } from '@/lib/data';

interface CommandOutputProps {
    output: CommandOutputType;
}

export function CommandOutput({ output }: CommandOutputProps) {
    const displayPath = output.directory ? `~/${output.directory}` : '~';

    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center font-mono text-sm shrink-0">
                    <span className="text-terminal-success font-bold">
                        {neofetchData.username}@{neofetchData.hostname}
                    </span>
                    <span className="text-terminal-text">:</span>
                    <span className="text-blue-400 font-bold">{displayPath}</span>
                    <span className="text-terminal-text font-bold">$</span>
                </div>
                <span className="text-terminal-text font-mono text-sm">{output.command}</span>
            </div>

            {output.output && (
                <div className="text-terminal-text font-mono text-sm">
                    {output.output}
                </div>
            )}
        </div>
    );
}

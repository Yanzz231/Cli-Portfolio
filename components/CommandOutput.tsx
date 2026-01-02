'use client';

import { CommandOutput as CommandOutputType } from '@/lib/types';
import { PromptLine } from '@/components';

interface CommandOutputProps {
    output: CommandOutputType;
}

export function CommandOutput({ output }: CommandOutputProps) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <PromptLine />
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

'use client';

import { KeyboardEvent, useEffect, forwardRef, useMemo } from 'react';
import { useCommandHistory } from '@/hooks/useCommandHistory';
import { PromptLine } from '@/components';
import { commands } from '@/lib/commands';

interface TerminalInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (command: string) => void;
    disabled?: boolean;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
    function TerminalInput({ value, onChange, onSubmit, disabled }, ref) {
        const { addToHistory, navigateHistory } = useCommandHistory();

        useEffect(() => {
            if (ref && 'current' in ref) {
                ref.current?.focus();
            }
        }, [ref]);

        // Find matching command for autocomplete suggestion
        const suggestion = useMemo(() => {
            if (!value || value.includes(' ')) return '';

            const lowerValue = value.toLowerCase();
            const availableCommands = Object.keys(commands);

            // Find first command that starts with current input
            const match = availableCommands.find(cmd =>
                cmd.startsWith(lowerValue) && cmd !== lowerValue
            );

            return match ? match.slice(value.length) : '';
        }, [value]);

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (value.trim()) {
                    addToHistory(value);
                    onSubmit(value);
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                if (suggestion) {
                    onChange(value + suggestion);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const historyCommand = navigateHistory('up');
                if (historyCommand !== null) {
                    onChange(historyCommand);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const historyCommand = navigateHistory('down');
                if (historyCommand !== null) {
                    onChange(historyCommand);
                }
            }
        };

        return (
            <div className="flex items-center gap-2 font-mono text-sm">
                <PromptLine />
                <div className="flex-1 relative">
                    <div className="relative">
                        {suggestion && (
                            <div className="absolute left-0 top-0 text-gray-400/60 pointer-events-none whitespace-pre">
                                <span className="invisible">{value}</span>
                                <span>{suggestion}</span>
                            </div>
                        )}
                        <input
                            ref={ref}
                            type="text"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={disabled}
                            className="w-full bg-transparent text-terminal-text outline-none border-none caret-terminal-text relative z-10"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        );
    }
);

'use client';

import { KeyboardEvent, useEffect, forwardRef, useMemo, useState } from 'react';
import { useCommandHistory } from '@/hooks/useCommandHistory';
import { PromptLine } from '@/components';
import { commands, getFolderSuggestions } from '@/lib/commands';

interface TerminalInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (command: string) => void;
    disabled?: boolean;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
    function TerminalInput({ value, onChange, onSubmit, disabled }, ref) {
        const { addToHistory, navigateHistory } = useCommandHistory();
        const [folderSuggestions, setFolderSuggestions] = useState<string[]>([]);

        useEffect(() => {
            if (ref && 'current' in ref) {
                ref.current?.focus();
            }
        }, [ref]);

        useEffect(() => {
            const fetchFolders = async () => {
                if (value.toLowerCase().startsWith('cd ')) {
                    const folders = await getFolderSuggestions();
                    setFolderSuggestions(folders);
                }
            };

            fetchFolders();
        }, [value]);

        const { suggestion, matchedFolder } = useMemo(() => {
            if (value.toLowerCase().startsWith('cd ')) {
                const inputAfterCd = value.slice(3);

                if (!inputAfterCd) return { suggestion: '', matchedFolder: null };

                const match = folderSuggestions.find(folder =>
                    folder.toLowerCase().startsWith(inputAfterCd.toLowerCase()) &&
                    folder.toLowerCase() !== inputAfterCd.toLowerCase()
                );

                return {
                    suggestion: match ? match.slice(inputAfterCd.length) : '',
                    matchedFolder: match || null
                };
            }

            if (!value || value.includes(' ')) return { suggestion: '', matchedFolder: null };

            const lowerValue = value.toLowerCase();
            const availableCommands = Object.keys(commands);

            const match = availableCommands.find(cmd =>
                cmd.startsWith(lowerValue) && cmd !== lowerValue
            );

            return {
                suggestion: match ? match.slice(value.length) : '',
                matchedFolder: null
            };
        }, [value, folderSuggestions]);

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addToHistory(value);
                onSubmit(value);
            } else if (e.key === 'Tab') {
                e.preventDefault();
                if (suggestion) {
                    if (matchedFolder && value.toLowerCase().startsWith('cd ')) {
                        onChange('cd ' + matchedFolder);
                    } else {
                        onChange(value + suggestion);
                    }
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

        if (disabled) {
            return null;
        }

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

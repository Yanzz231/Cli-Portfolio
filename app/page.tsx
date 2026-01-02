'use client';

import { useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { TerminalHeader, TerminalBody, TerminalInput, CommandOutput, Neofetch } from '@/components';

export default function Home() {
    const { input, setInput, outputs, isProcessing, handleCommand, terminalEndRef } = useTerminal();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="flex flex-col h-screen w-screen bg-terminal-bg overflow-hidden" onClick={handleClick}>
            <TerminalHeader />

            <TerminalBody>
                <Neofetch />

                <div className="text-terminal-text text-sm font-mono">
                    <p>Type <span className="text-terminal-success font-bold">'help'</span> to see available commands.</p>
                </div>

                {outputs.map((output) => (
                    <CommandOutput key={output.timestamp} output={output} />
                ))}

                <TerminalInput
                    ref={inputRef}
                    value={input}
                    onChange={setInput}
                    onSubmit={handleCommand}
                    disabled={isProcessing}
                />

                <div ref={terminalEndRef} />
            </TerminalBody>
        </div>
    );
}

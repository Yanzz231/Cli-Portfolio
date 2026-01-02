'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { CommandOutput } from '@/lib/types';
import { executeCommand } from '@/lib/commands';

export function useTerminal() {
	const [input, setInput] = useState('');
	const [outputs, setOutputs] = useState<CommandOutput[]>([]);
	const [isProcessing, setIsProcessing] = useState(false);
	const terminalEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [outputs, scrollToBottom]);

	const handleCommand = useCallback((command: string) => {
		if (!command.trim()) return;

		setIsProcessing(true);

		const trimmedCommand = command.trim();
		const lowerCommand = trimmedCommand.toLowerCase();

		if (lowerCommand === 'clear' || lowerCommand === 'cls') {
			setOutputs([]);
			setInput('');
			setIsProcessing(false);
			return;
		}

		const output = executeCommand(trimmedCommand);

		setOutputs(prev => [
			...prev,
			{
				command: trimmedCommand,
				output,
				timestamp: Date.now(),
			},
		]);

		setInput('');
		setIsProcessing(false);
	}, []);

	return {
		input,
		setInput,
		outputs,
		isProcessing,
		handleCommand,
		terminalEndRef,
	};
}

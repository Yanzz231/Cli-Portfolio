'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { CommandOutput } from '@/lib/types';
import { executeCommand, commands, getCurrentDirectory } from '@/lib/commands';

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

	useEffect(() => {
		const handleDownloadCertificate = () => {
			setIsProcessing(true);

			const onComplete = () => {
				setIsProcessing(false);
			};

			const output = executeCommand('__download-cert__', onComplete);

			setOutputs(prev => [
				...prev,
				{
					command: '',
					output,
					timestamp: Date.now(),
					directory: getCurrentDirectory(),
				},
			]);
		};

		window.addEventListener('terminal:download-certificate', handleDownloadCertificate);

		return () => {
			window.removeEventListener('terminal:download-certificate', handleDownloadCertificate);
		};
	}, []);

	const handleCommand = useCallback((command: string) => {
		const trimmedCommand = command.trim();

		if (!trimmedCommand) {
			setOutputs(prev => [
				...prev,
				{
					command: '',
					output: null,
					timestamp: Date.now(),
					directory: getCurrentDirectory(),
				},
			]);
			setInput('');
			return;
		}

		const lowerCommand = trimmedCommand.toLowerCase();

		if (lowerCommand === 'clear' || lowerCommand === 'cls') {
			setOutputs([]);
			setInput('');
			return;
		}

		const commandName = trimmedCommand.split(/\s+/)[0]?.toLowerCase() || '';
		const handler = commands[commandName];
		const requiresInteraction = handler?.requiresInteraction || false;

		if (requiresInteraction) {
			setIsProcessing(true);
		}

		const currentDir = getCurrentDirectory();

		const onComplete = () => {
			setIsProcessing(false);
		};

		const output = executeCommand(trimmedCommand, onComplete);

		setOutputs(prev => [
			...prev,
			{
				command: trimmedCommand,
				output,
				timestamp: Date.now(),
				directory: currentDir,
			},
		]);

		setInput('');

		if (!requiresInteraction) {
			setIsProcessing(false);
		}
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

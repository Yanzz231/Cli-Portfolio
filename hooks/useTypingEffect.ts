'use client';

import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
	text: string;
	speed?: number;
	onComplete?: () => void;
}

export function useTypingEffect({ text, speed = 30, onComplete }: UseTypingEffectProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		setDisplayedText('');
		setIsTyping(true);

		if (!text) {
			setIsTyping(false);
			onComplete?.();
			return;
		}

		let currentIndex = 0;
		const timer = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayedText(text.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				setIsTyping(false);
				clearInterval(timer);
				onComplete?.();
			}
		}, speed);

		return () => clearInterval(timer);
	}, [text, speed, onComplete]);

	return { displayedText, isTyping };
}

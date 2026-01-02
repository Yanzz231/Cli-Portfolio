'use client';

import { neofetchData } from '@/lib/data';

export function Neofetch() {
    const colorBlocks = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-cyan-500',
        'bg-blue-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-white',
    ];

    const asciiArt = [
        '            .-/+oossssoo+/-.',
        '        `:+ssssssssssssssssss+:`',
        '      -+ssssssssssssssssssyyssss+-',
        '    .ossssssssssssssssssdMMMNysssso.',
        '   /ssssssssssshdmmNNmmyNMMMMhssssss/',
        '  +ssssssssshmydMMMMMMMNddddyssssssss+',
        ' /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/',
        '.ssssssssdMMMNhsssssssssshNMMMdssssssss.',
        '+sssshhhyNMMNyssssssssssssyNMMMysssssss+',
        'ossyNMMMNyMMhsssssssssssssshmmmhssssssso',
        'ossyNMMMNyMMhsssssssssssssshmmmhssssssso',
        '+sssshhhyNMMNyssssssssssssyNMMMysssssss+',
        '.ssssssssdMMMNhsssssssssshNMMMdssssssss.',
        ' /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/',
        '  +sssssssssdmydMMMMMMMMddddyssssssss+',
        '   /ssssssssssshdmNNNNmyNMMMMhssssss/',
        '    .ossssssssssssssssssdMMMNysssso.',
        '      -+sssssssssssssssssyyyssss+-',
        '        `:+ssssssssssssssssss+:`',
        '            .-/+oossssoo+/-.',
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8 mb-8 text-terminal-text font-mono text-sm">
            <div className="shrink-0">
                <pre>
                    {asciiArt.map((line, i) => {
                        const chars = line.split('');
                        return (
                            <div key={i}>
                                {chars.map((char, j) => {
                                    const isWhiteChar = /[MNdyhm]/.test(char);
                                    const colorClass = isWhiteChar ? 'text-white' : 'text-[#E95420]';
                                    return (
                                        <span key={j} className={colorClass}>
                                            {char}
                                        </span>
                                    );
                                })}
                            </div>
                        );
                    })}
                </pre>
            </div>

            <div className="flex-1 ">
                <div className="text-[#E95420] font-bold text-sm">
                    {neofetchData.username}@{neofetchData.hostname}
                </div>
                <div className="text-terminal-text font-bold text-sm mb-2">
                    -----------------------
                </div>

                <InfoLine label="OS" value={neofetchData.os} color="orange" />
                <InfoLine label="Host" value={neofetchData.host} color="orange" />
                <InfoLine label="Kernel" value={neofetchData.kernel} color="orange" />
                <InfoLine label="Uptime" value={neofetchData.uptime} color="orange" />
                <InfoLine label="Packages" value={neofetchData.packages} color="orange" />
                <InfoLine label="Shell" value={neofetchData.shell} color="orange" />
                <InfoLine label="Resolution" value={neofetchData.resolution} color="orange" />
                <InfoLine label="DE" value={neofetchData.de} color="orange" />
                <InfoLine label="WM" value={neofetchData.wm} color="orange" />
                <InfoLine label="Theme" value={neofetchData.theme} color="orange" />
                <InfoLine label="Icons" value={neofetchData.icons} color="orange" />
                <InfoLine label="Terminal" value={neofetchData.terminal} color="orange" />
                <InfoLine label="CPU" value={neofetchData.cpu} color="orange" />
                <InfoLine label="GPU" value={neofetchData.gpu} color="orange" />
                <InfoLine label="Memory" value={neofetchData.memory} color="orange" />

                <div className="mt-4 flex gap-1">
                    {colorBlocks.map((color, i) => (
                        <div key={i} className={`w-6 h-4 ${color}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function InfoLine({ label, value, color }: { label: string; value: string; color: 'green' | 'orange' }) {
    const labelColor = color === 'orange' ? 'text-[#E95420]' : 'text-terminal-success';
    return (
        <div className="flex gap-2">
            <span className={`${labelColor} font-bold min-w-20`}>{label}:</span>
            <span className="text-terminal-text">{value}</span>
        </div>
    );
}

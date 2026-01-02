'use client';

import { neofetchData } from "@/lib/data";

export function TerminalHeader() {
    return (
        <div className="bg-terminal-header py-2 px-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#CC0000] hover:bg-[#CC0000]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#F0A000] hover:bg-[#F0A000]/80 transition-colors cursor-pointer"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#4E9A06] hover:bg-[#4E9A06]/80 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-terminal-text text-sm font-normal">
                    {neofetchData.username}@{neofetchData.hostname}: ~
                </div>
            </div>
        </div>
    );
}

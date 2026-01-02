"use client";

import { neofetchData } from "@/lib/data";

interface PromptLineProps {
  showPrompt?: boolean;
}

export function PromptLine({ showPrompt = true }: PromptLineProps) {
  return (
    <div className="flex items-center font-mono text-sm shrink-0">
      {showPrompt && (
        <>
          <span className="text-terminal-success font-bold">
            {neofetchData.username}@{neofetchData.hostname}
          </span>
          <span className="text-terminal-text">:</span>
          <span className="text-blue-400 font-bold">~</span>
          <span className="text-terminal-text font-bold">$</span>
        </>
      )}
    </div>
  );
}

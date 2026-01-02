export interface CommandOutput {
	command: string;
	output: React.ReactNode;
	timestamp: number;
}

export interface CommandHandler {
	description: string;
	execute: () => React.ReactNode;
}

export interface NeofetchData {
	username: string;
	hostname: string;
	os: string;
	host: string;
	kernel: string;
	uptime: string;
	packages: string;
	shell: string;
	resolution: string;
	de: string;
	wm: string;
	theme: string;
	icons: string;
	terminal: string;
	cpu: string;
	gpu: string;
	memory: string;
}

export interface Experience {
    position: string;
    period: string;
    description: string;
}

export interface ExperienceData {
    [company: string]: Experience[];
}

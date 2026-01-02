import { CommandHandler } from "./types";
import {
  experienceData,
  techStackData,
  aboutData,
  projectsData,
  contactData,
  certificationsData,
} from "./data";
import { useState, useEffect } from "react";

function CVDownloadAnimation({ onConfirm }: { onConfirm: () => void }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"downloading" | "complete">("downloading");

  useEffect(() => {
    // Start download immediately
    onConfirm();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("complete");
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onConfirm]);

  const getProgressBar = () => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    return "[" + "█".repeat(filled) + "░".repeat(empty) + "]";
  };

  return (
    <div className="space-y-1 text-terminal-text font-mono text-sm">
      <div>Reading package lists... Done</div>
      <div>Building dependency tree... Done</div>
      <div>Reading state information... Done</div>
      <div className="mt-2">
        Get:1 https://andrian-portfolio.dev/files CV_Andrian_Pratama.pdf [245kB]
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span>Downloading:</span>
        <span>{getProgressBar()}</span>
        <span>{progress}%</span>
      </div>
      {status === "complete" && (
        <div className="mt-2 space-y-1">
          <div className="text-terminal-success">
            Fetched 245kB in 2s (122kB/s)
          </div>
          <div className="text-terminal-success">
            ✓ CV downloaded successfully!
          </div>
          <div className="text-terminal-text">
            Check your downloads folder for CV_Andrian_Pratama.pdf
          </div>
        </div>
      )}
    </div>
  );
}

export const commands: Record<string, CommandHandler> = {
  help: {
    description: "List all available commands",
    execute: () => (
      <div className="space-y-1">
        <div className="text-terminal-success font-bold mb-3">
          Available Commands:
        </div>
        {Object.entries(commands).map(([cmd, handler]) => (
          <div key={cmd} className="flex gap-2">
            <span className="text-terminal-accent font-bold min-w-[120px]">
              {cmd}
            </span>
            <span className="text-terminal-text">{handler.description}</span>
          </div>
        ))}
      </div>
    ),
  },

  clear: {
    description: "Clear the terminal screen",
    execute: () => null,
  },

  about: {
    description: "Learn more about me",
    execute: () => (
      <div className="space-y-3">
        <div className="text-terminal-success font-bold">{aboutData.name}</div>
        <div className="text-terminal-accent">{aboutData.tagline}</div>
        <div className="text-terminal-text leading-relaxed whitespace-pre-line">
          {aboutData.bio}
        </div>
      </div>
    ),
  },

  experience: {
    description: "View my work experience",
    execute: () => (
      <div className="space-y-4">
        <div className="text-terminal-success font-bold mb-3">
          Work Experience:
        </div>
        {Object.entries(experienceData).map(([company, positions]) => (
          <div key={company}>
            <div className="text-terminal-accent font-bold">{company}</div>
            {positions.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-terminal-prompt pl-4 ml-4 space-y-1"
              >
                <div className="text-terminal-accent font-bold">
                  {exp.position}
                </div>
                <div className="text-terminal-prompt text-sm">{exp.period}</div>
                <div className="text-terminal-text text-sm mt-2">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },

  techstack: {
    description: "See my technical skills",
    execute: () => (
      <div className="space-y-3">
        <div className="text-terminal-success font-bold mb-3">Tech Stack:</div>

        <div>
          <div className="text-terminal-accent font-bold mb-1">Languages:</div>
          <div className="text-terminal-text">
            {techStackData.languages.join(" • ")}
          </div>
        </div>

        <div>
          <div className="text-terminal-accent font-bold mb-1">Frontend:</div>
          <div className="text-terminal-text">
            {techStackData.frontend.join(" • ")}
          </div>
        </div>

        <div>
          <div className="text-terminal-accent font-bold mb-1">Backend:</div>
          <div className="text-terminal-text">
            {techStackData.backend.join(" • ")}
          </div>
        </div>

        <div>
          <div className="text-terminal-accent font-bold mb-1">Database:</div>
          <div className="text-terminal-text">
            {techStackData.database.join(" • ")}
          </div>
        </div>

        <div>
          <div className="text-terminal-accent font-bold mb-1">Tools:</div>
          <div className="text-terminal-text">
            {techStackData.tools.join(" • ")}
          </div>
        </div>
      </div>
    ),
  },

  projects: {
    description: "Browse my portfolio projects",
    execute: () => (
      <div className="space-y-4">
        <div className="text-terminal-success font-bold mb-3">Projects:</div>
        {projectsData.map((project, index) => (
          <div key={index} className="space-y-1">
            <div className="text-terminal-accent font-bold">{project.name}</div>
            <div className="text-terminal-text text-sm">
              {project.description}
            </div>
            <div className="text-terminal-prompt text-sm">
              Tech: {project.tech.join(", ")}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-success hover:underline text-sm inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    ),
  },

  contacts: {
    description: "Get my contact information",
    execute: () => (
      <div className="space-y-2">
        <div className="text-terminal-success font-bold mb-3">
          Contact Information:
        </div>
        <div className="space-y-1">
          <div className="flex gap-3">
            <span className="text-terminal-accent font-bold min-w-20">
              Email:
            </span>
            <a
              href={`mailto:${contactData.email}`}
              className="text-terminal-text hover:text-terminal-success hover:underline"
            >
              {contactData.email}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-terminal-accent font-bold min-w-20">
              GitHub:
            </span>
            <a
              href={`https://${contactData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:text-terminal-success hover:underline"
            >
              {contactData.github}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-terminal-accent font-bold min-w-20">
              LinkedIn:
            </span>
            <a
              href={`https://${contactData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:text-terminal-success hover:underline"
            >
              {contactData.linkedin}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-terminal-accent font-bold min-w-20">
              Instagram:
            </span>
            <a
              href={`https://${contactData.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:text-terminal-success hover:underline"
            >
              {contactData.instagram}
            </a>
          </div>
        </div>
      </div>
    ),
  },

  achievements: {
    description: "View my achievements and certifications",
    execute: () => (
      <div className="space-y-4">
        <div className="text-terminal-success font-bold mb-3">
          Achievements & Certifications:
        </div>
        {certificationsData.map((cert, index) => (
          <div key={index} className="space-y-2">
            <div className="text-terminal-accent font-bold">{cert.title}</div>
            <div className="text-terminal-prompt text-sm">
              {cert.organizer} • {cert.date}
            </div>
            <div className="text-terminal-success text-sm font-bold">
              🏆 {cert.achievement}
            </div>
            <div className="text-terminal-text text-sm">
              {cert.description}
            </div>
            <div className="flex gap-4 text-sm">
              {cert.projectUrl && (
                <a
                  href={cert.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-success hover:underline"
                >
                  View Project →
                </a>
              )}
              {cert.articleUrl && (
                <a
                  href={cert.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-success hover:underline"
                >
                  Read Article →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },

  cv: {
    description: "Download my CV/Resume",
    execute: () => {
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume.pdf";
        link.download = "CV_Andrian_Pratama.pdf";
        link.click();
      };

      return <CVDownloadAnimation onConfirm={handleDownload} />;
    },
  },
};

const commandAliases: Record<string, string> = {
  cls: "clear",
};

function findSimilarCommands(input: string): string[] {
  const availableCommands = Object.keys(commands);
  const similar: string[] = [];

  for (const cmd of availableCommands) {
    if (cmd.startsWith(input)) {
      similar.push(cmd);
    }
  }

  if (similar.length === 0) {
    for (const cmd of availableCommands) {
      const distance = levenshteinDistance(input, cmd);
      if (distance <= 2) {
        similar.push(cmd);
      }
    }
  }

  return similar.slice(0, 3);
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export function parseCommand(input: string): {
  command: string;
  args: string[];
} {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const command = parts[0]?.toLowerCase() || "";
  const args = parts.slice(1);

  return { command, args };
}

export function executeCommand(input: string): React.ReactNode {
  const { command } = parseCommand(input);

  if (!command) {
    return null;
  }

  const resolvedCommand = commandAliases[command] || command;
  const handler = commands[resolvedCommand];

  if (!handler) {
    const suggestions = findSimilarCommands(command);

    if (suggestions.length > 0) {
      return (
        <div>
          <div className="text-terminal-error">command not found: {command}</div>
          <div className="text-terminal-text mt-1">
            Did you mean:{" "}
            {suggestions.map((suggestion, index) => (
              <span key={suggestion}>
                <span className="text-terminal-success">{suggestion}</span>
                {index < suggestions.length - 1 && ", "}
              </span>
            ))}
            ?
          </div>
        </div>
      );
    }

    return (
      <div className="text-terminal-error">command not found: {command}</div>
    );
  }

  return handler.execute();
}

import { CommandHandler } from "./types";
import {
  workExperienceData,
  organizationExperienceData,
  techStackData,
  aboutData,
  projectsData,
  contactData,
  certificationsData,
} from "./data";
import { useState, useEffect } from "react";

let currentDirectory = "";
let pendingCertificateDownload: { filePath: string; fileName: string } | null =
  null;
let pendingFileDownload: { filePath: string; fileName: string } | null = null;

function CertificateDownloadAnimation({
  filePath,
  fileName,
  onConfirm,
  onComplete,
}: {
  filePath: string;
  fileName: string;
  onConfirm: () => void;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"waiting" | "downloading" | "complete" | "cancelled">(
    "waiting"
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (status !== "waiting") return;

      if (e.key === "y" || e.key === "Y") {
        setUserInput(e.key);
      } else if (e.key === "n" || e.key === "N") {
        setUserInput(e.key);
      } else if (e.key === "Enter" && userInput) {
        if (userInput.toLowerCase() === "y") {
          setStatus("downloading");
          onConfirm();

          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                setStatus("complete");
                setTimeout(() => onComplete(), 100);
                return 100;
              }
              return prev + 10;
            });
          }, 150);
        } else {
          setStatus("cancelled");
          setTimeout(() => onComplete(), 100);
        }
      } else if (e.key === "Backspace" && userInput) {
        setUserInput("");
      } else if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setStatus("cancelled");
        setTimeout(() => onComplete(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [status, userInput, onConfirm, onComplete]);

  const getProgressBar = () => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    return "[" + "█".repeat(filled) + "░".repeat(empty) + "]";
  };

  const fileSize = fileName.endsWith(".pdf") ? "1.2MB" : "245KB";

  if (status === "waiting") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div>Reading package lists... Done</div>
        <div>Building dependency tree... Done</div>
        <div>Reading state information... Done</div>
        <div className="mt-2">The following file will be downloaded:</div>
        <div className="ml-4">
          {fileName} ({fileSize})
        </div>
        <div className="mt-2">
          After this operation, {fileSize} will be downloaded.
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span>Do you want to continue? [Y/n]</span>
          <span className="text-terminal-success">{userInput}</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    );
  }

  if (status === "downloading") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div className="mt-2">
          Get:1 https://andrian-portfolio.dev/files {fileName} [{fileSize}]
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span>Downloading:</span>
          <span>{getProgressBar()}</span>
          <span>{progress}%</span>
        </div>
      </div>
    );
  }

  if (status === "cancelled") {
    return <div className="text-terminal-error font-mono text-sm">Abort.</div>;
  }

  if (status === "complete") {
    return (
      <div className="space-y-1 font-mono text-sm">
        <div className="text-terminal-fetch-success">
          Fetched {fileSize} in 2s ({Math.round(parseFloat(fileSize) / 2)}KB/s)
        </div>
        <div className="text-terminal-fetch-success">
          ✓ Certificate downloaded successfully!
        </div>
        <div className="text-terminal-fetch-success">
          Check your downloads folder for {fileName}
        </div>
      </div>
    );
  }

  return null;
}

function CVDownloadAnimation({
  onConfirm,
  onComplete,
}: {
  onConfirm: () => void;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"waiting" | "downloading" | "complete" | "cancelled">(
    "waiting"
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (status !== "waiting") return;

      if (e.key === "y" || e.key === "Y") {
        setUserInput(e.key);
      } else if (e.key === "n" || e.key === "N") {
        setUserInput(e.key);
      } else if (e.key === "Enter" && userInput) {
        if (userInput.toLowerCase() === "y") {
          setStatus("downloading");
          onConfirm();

          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                setStatus("complete");
                setTimeout(() => onComplete(), 100);
                return 100;
              }
              return prev + 10;
            });
          }, 150);
        } else {
          setStatus("cancelled");
          setTimeout(() => onComplete(), 100);
        }
      } else if (e.key === "Backspace" && userInput) {
        setUserInput("");
      } else if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setStatus("cancelled");
        setTimeout(() => onComplete(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [status, userInput, onConfirm, onComplete]);

  const getProgressBar = () => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    return "[" + "█".repeat(filled) + "░".repeat(empty) + "]";
  };

  if (status === "waiting") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div>Reading package lists... Done</div>
        <div>Building dependency tree... Done</div>
        <div>Reading state information... Done</div>
        <div className="mt-2">The following package will be downloaded:</div>
        <div className="ml-4">CV_Andrian_Pratama.pdf (245kB)</div>
        <div className="mt-2">
          After this operation, 245kB will be downloaded.
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span>Do you want to continue? [Y/n]</span>
          <span className="text-terminal-success">{userInput}</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    );
  }

  if (status === "downloading") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div className="mt-2">
          Get:1 https://andrian-portfolio.dev/files CV_Andrian_Pratama.pdf
          [245kB]
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span>Downloading:</span>
          <span>{getProgressBar()}</span>
          <span>{progress}%</span>
        </div>
      </div>
    );
  }

  if (status === "cancelled") {
    return <div className="text-terminal-error font-mono text-sm">Abort.</div>;
  }

  if (status === "complete") {
    return (
      <div className="space-y-1 font-mono text-sm">
        <div className="text-terminal-fetch-success">
          Fetched 245kB in 2s (122kB/s)
        </div>
        <div className="text-terminal-fetch-success">
          ✓ CV downloaded successfully!
        </div>
        <div className="text-terminal-fetch-success">
          Check your downloads folder for CV_Andrian_Pratama.pdf
        </div>
      </div>
    );
  }

  return null;
}

function FileDownloadAnimation({
  filePath,
  fileName,
  onConfirm,
  onComplete,
}: {
  filePath: string;
  fileName: string;
  onConfirm: () => void;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"waiting" | "downloading" | "complete" | "cancelled">(
    "waiting"
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (status !== "waiting") return;

      if (e.key === "y" || e.key === "Y") {
        setUserInput(e.key);
      } else if (e.key === "n" || e.key === "N") {
        setUserInput(e.key);
      } else if (e.key === "Enter" && userInput) {
        if (userInput.toLowerCase() === "y") {
          setStatus("downloading");
          onConfirm();

          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                setStatus("complete");
                setTimeout(() => onComplete(), 100);
                return 100;
              }
              return prev + 10;
            });
          }, 150);
        } else {
          setStatus("cancelled");
          setTimeout(() => onComplete(), 100);
        }
      } else if (e.key === "Backspace" && userInput) {
        setUserInput("");
      } else if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setStatus("cancelled");
        setTimeout(() => onComplete(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [status, userInput, onConfirm, onComplete]);

  const getProgressBar = () => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    return "[" + "█".repeat(filled) + "░".repeat(empty) + "]";
  };

  if (status === "waiting") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div>Reading package lists... Done</div>
        <div>Building dependency tree... Done</div>
        <div>Reading state information... Done</div>
        <div className="mt-2">The following file will be downloaded:</div>
        <div className="ml-4">{fileName}</div>
        <div className="mt-2 flex items-center gap-1">
          <span>Do you want to continue? [Y/n]</span>
          <span className="text-terminal-success">{userInput}</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    );
  }

  if (status === "downloading") {
    return (
      <div className="space-y-1 text-terminal-text font-mono text-sm">
        <div className="mt-2">
          Get:1 https://andrian-portfolio.dev/files {fileName}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span>Downloading:</span>
          <span>{getProgressBar()}</span>
          <span>{progress}%</span>
        </div>
      </div>
    );
  }

  if (status === "cancelled") {
    return <div className="text-terminal-error font-mono text-sm">Abort.</div>;
  }

  if (status === "complete") {
    return (
      <div className="space-y-1 font-mono text-sm">
        <div className="text-terminal-fetch-success">
          ✓ File downloaded successfully!
        </div>
        <div className="text-terminal-fetch-success">
          Check your downloads folder for {fileName}
        </div>
      </div>
    );
  }

  return null;
}

export const commands: Record<string, CommandHandler> = {
  help: {
    description: "List all available commands",
    execute: () => {
      const excludedCommands = ["ls", "cd", "pwd"];

      return (
        <div className="space-y-1">
          <div className="text-terminal-success font-bold mb-3">
            Available Commands:
          </div>
          {Object.entries(commands)
            .filter(([cmd]) => !excludedCommands.includes(cmd))
            .map(([cmd, handler]) => (
              <div key={cmd} className="flex gap-2">
                <span className="text-terminal-accent font-bold min-w-[120px]">
                  {cmd}
                </span>
                <span className="text-terminal-text">
                  {handler.description}
                </span>
              </div>
            ))}
        </div>
      );
    },
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
    execute: (onComplete) => {
      function ExperienceMenu() {
        const [selection, setSelection] = useState<string>("");
        const [selectedOption, setSelectedOption] = useState<
          "work" | "organization" | "cancelled" | null
        >(null);

        useEffect(() => {
          const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedOption) return;

            if (e.key === "1") {
              setSelection("1");
            } else if (e.key === "2") {
              setSelection("2");
            } else if (e.key === "3") {
              setSelection("3");
            } else if (e.key === "Enter" && selection) {
              if (selection === "1") {
                setSelectedOption("work");
                setTimeout(() => {
                  const terminalEnd = document.querySelector('[data-terminal-end]');
                  if (terminalEnd) {
                    terminalEnd.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);
                setTimeout(() => {
                  if (onComplete) onComplete();
                }, 100);
              } else if (selection === "2") {
                setSelectedOption("organization");
                setTimeout(() => {
                  const terminalEnd = document.querySelector('[data-terminal-end]');
                  if (terminalEnd) {
                    terminalEnd.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);
                setTimeout(() => {
                  if (onComplete) onComplete();
                }, 100);
              } else if (selection === "3") {
                if (onComplete) onComplete();
              }
            } else if (e.key === "Backspace" && selection) {
              setSelection("");
            } else if (e.ctrlKey && e.key === "c") {
              e.preventDefault();
              setSelectedOption("cancelled");
              setTimeout(() => {
                if (onComplete) onComplete();
              }, 10);
            }
          };

          window.addEventListener("keydown", handleKeyPress);
          return () => window.removeEventListener("keydown", handleKeyPress);
        }, [selection, selectedOption]);

        if (selectedOption === "cancelled") {
          return <div className="text-terminal-error font-mono text-sm">Abort.</div>;
        }

        if (selectedOption === "work") {
          return (
            <div className="space-y-4">
              <div className="text-terminal-success font-bold mb-3">
                Work Experience:
              </div>
              {Object.entries(workExperienceData).map(
                ([company, positions]) => (
                  <div key={company}>
                    <div className="text-terminal-accent font-bold">
                      {company}
                    </div>
                    {positions.map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-terminal-prompt pl-4 ml-4 space-y-1"
                      >
                        <div className="text-terminal-accent font-bold">
                          {exp.position}
                        </div>
                        <div className="text-terminal-prompt text-sm">
                          {exp.period}
                        </div>
                        <div className="text-terminal-text text-sm mt-2">
                          {exp.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          );
        }

        if (selectedOption === "organization") {
          return (
            <div className="space-y-4">
              <div className="text-terminal-success font-bold mb-3">
                Organization Experience:
              </div>
              {Object.entries(organizationExperienceData).map(
                ([org, positions]) => (
                  <div key={org}>
                    <div className="text-terminal-accent font-bold">{org}</div>
                    {positions.map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-terminal-prompt pl-4 ml-4 space-y-1"
                      >
                        <div className="text-terminal-accent font-bold">
                          {exp.position}
                        </div>
                        <div className="text-terminal-prompt text-sm">
                          {exp.period}
                        </div>
                        <div className="text-terminal-text text-sm mt-2">
                          {exp.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          );
        }

        return (
          <div className="space-y-2 text-terminal-text font-mono text-sm">
            <div className="text-terminal-success font-bold">
              Select Experience Type:
            </div>
            <div className="ml-4 space-y-1">
              <div>1. Work Experience</div>
              <div>2. Organization Experience</div>
              <div>3. Exit</div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span>Enter your choice [1-3]:</span>
              <span className="text-terminal-success">{selection}</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        );
      }

      return <ExperienceMenu />;
    },
    requiresInteraction: true,
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
    execute: () => {
      const handleCertificateClick = (filePath: string, fileName: string) => {
        pendingCertificateDownload = { filePath, fileName };
        window.dispatchEvent(
          new CustomEvent("terminal:download-certificate", {
            detail: { filePath, fileName },
          })
        );
      };

      return (
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
              <div className="flex gap-4 text-sm flex-wrap">
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
                {(cert as any).certificateFile && (
                  <button
                    onClick={() => {
                      const fileName = (cert as any).certificateFile
                        .split("/")
                        .pop();
                      handleCertificateClick(
                        (cert as any).certificateFile,
                        fileName
                      );
                    }}
                    className="text-terminal-accent hover:underline cursor-pointer"
                  >
                    Download Certificate →
                  </button>
                )}
                {(cert as any).certificateFiles &&
                  (cert as any).certificateFiles.map(
                    (file: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const fileName = file.split("/").pop();
                          handleCertificateClick(
                            file,
                            fileName || "certificate.pdf"
                          );
                        }}
                        className="text-terminal-accent hover:underline cursor-pointer"
                      >
                        Download Certificate {idx + 1} →
                      </button>
                    )
                  )}
              </div>
            </div>
          ))}
        </div>
      );
    },
  },

  ls: {
    description: "List directory contents",
    execute: () => {
      function LsComponent() {
        const [items, setItems] = useState<any[]>([]);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
          async function fetchFiles() {
            try {
              const response = await fetch(
                `/api/files?dir=${encodeURIComponent(currentDirectory)}`
              );
              const data = await response.json();

              if (!response.ok) {
                setError(data.error || "Failed to read directory");
                return;
              }

              setItems(data.items || []);

              setTimeout(() => {
                const terminalEnd = document.querySelector(
                  "[data-terminal-end]"
                );
                if (terminalEnd) {
                  terminalEnd.scrollIntoView({ behavior: "smooth" });
                }
              }, 50);
            } catch (err) {
              setError("Failed to read directory");
            }
          }

          fetchFiles();
        }, []);

        if (error) {
          return (
            <div className="text-terminal-error font-mono text-sm">
              ls: cannot access '{currentDirectory || "~"}': {error}
            </div>
          );
        }

        if (items.length === 0) {
          return null;
        }

        const isImageFile = (filename: string) => {
          const imageExtensions = [
            ".png",
            ".jpg",
            ".jpeg",
            ".gif",
            ".webp",
            ".bmp",
            ".svg",
          ];
          return imageExtensions.some((ext) =>
            filename.toLowerCase().endsWith(ext)
          );
        };

        const isDownloadableFile = (filename: string) => {
          const downloadExtensions = [
            ".pdf",
            ".doc",
            ".docx",
            ".txt",
            ".zip",
            ".rar",
          ];
          return downloadExtensions.some((ext) =>
            filename.toLowerCase().endsWith(ext)
          );
        };

        const handleImageClick = (filename: string) => {
          const imagePath = currentDirectory
            ? `/${currentDirectory}/${filename}`
            : `/${filename}`;

          window.dispatchEvent(
            new CustomEvent("terminal:open-image", {
              detail: { imagePath, fileName: filename },
            })
          );
        };

        const handleFileClick = (filename: string) => {
          const filePath = currentDirectory
            ? `/${currentDirectory}/${filename}`
            : `/${filename}`;

          pendingFileDownload = { filePath, fileName: filename };

          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent("terminal:download-file", {
                detail: { filePath, fileName: filename },
              })
            );
          }, 0);
        };

        return (
          <div className="space-y-1 font-mono text-sm">
            {items.map((item: any, index: number) => {
              const isImage = item.type === "file" && isImageFile(item.name);
              const isDownloadable =
                item.type === "file" && isDownloadableFile(item.name);
              const isClickable = isImage || isDownloadable;

              return (
                <div key={index} className="flex gap-4">
                  <span
                    className={
                      item.type === "folder"
                        ? "text-blue-400 font-bold"
                        : isClickable
                        ? "text-terminal-accent cursor-pointer hover:underline"
                        : "text-terminal-text"
                    }
                    onClick={() => {
                      if (isImage) handleImageClick(item.name);
                      else if (isDownloadable) handleFileClick(item.name);
                    }}
                  >
                    {item.type === "folder" ? `${item.name}/` : item.name}
                  </span>
                  {item.size && (
                    <span className="text-terminal-prompt text-xs">
                      {item.size}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      }

      return <LsComponent />;
    },
  },

  cd: {
    description: "Change directory",
    execute: () => {
      return (
        <div className="text-terminal-text font-mono text-sm">
          Use: cd &lt;directory&gt;
        </div>
      );
    },
    requiresInteraction: true,
  },

  pwd: {
    description: "Print working directory",
    execute: () => {
      function PwdComponent() {
        useEffect(() => {
          setTimeout(() => {
            const terminalEnd = document.querySelector("[data-terminal-end]");
            if (terminalEnd) {
              terminalEnd.scrollIntoView({ behavior: "smooth" });
            }
          }, 50);
        }, []);

        return (
          <div className="text-terminal-text font-mono text-sm">
            ~/{currentDirectory || ""}
          </div>
        );
      }

      return <PwdComponent />;
    },
  },

  cv: {
    description: "Download my CV/Resume",
    execute: (onComplete) => {
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume.pdf";
        link.download = "CV_Andrian_Pratama.pdf";
        link.click();
      };

      return (
        <CVDownloadAnimation
          onConfirm={handleDownload}
          onComplete={onComplete || (() => {})}
        />
      );
    },
    requiresInteraction: true,
  },
};

const commandAliases: Record<string, string> = {
  cls: "clear",
  dir: "ls",
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

export function executeCommand(
  input: string,
  onComplete?: () => void
): React.ReactNode {
  const { command, args } = parseCommand(input);

  if (!command) {
    return null;
  }

  const resolvedCommand = commandAliases[command] || command;

  if (resolvedCommand === "__download-cert__") {
    if (!pendingCertificateDownload) {
      return null;
    }

    const { filePath, fileName } = pendingCertificateDownload;
    pendingCertificateDownload = null;

    const handleDownload = async () => {
      try {
        const response = await fetch(encodeURI(filePath));
        if (!response.ok) return;

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        return;
      }
    };

    return (
      <CertificateDownloadAnimation
        filePath={filePath}
        fileName={fileName}
        onConfirm={handleDownload}
        onComplete={onComplete || (() => {})}
      />
    );
  }

  if (resolvedCommand === "__download-file__") {
    if (!pendingFileDownload) {
      return null;
    }

    const { filePath, fileName } = pendingFileDownload;
    pendingFileDownload = null;

    const handleDownload = async () => {
      try {
        const response = await fetch(encodeURI(filePath));
        if (!response.ok) return;

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        return;
      }
    };

    return (
      <FileDownloadAnimation
        filePath={filePath}
        fileName={fileName}
        onConfirm={handleDownload}
        onComplete={onComplete || (() => {})}
      />
    );
  }

  if (resolvedCommand === "cd") {
    if (args.length === 0) {
      currentDirectory = "";
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 10);
      return null;
    }

    const targetDir = input.trim().slice(3).trim() || args[0];

    if (targetDir === "~" || targetDir === "/") {
      currentDirectory = "";
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 10);
      return null;
    }

    if (targetDir.startsWith("..")) {
      if (currentDirectory) {
        const parts = currentDirectory.split("/").filter((p) => p);
        const upLevels = targetDir.split("/").filter(p => p === "..").length;

        for (let i = 0; i < upLevels && parts.length > 0; i++) {
          parts.pop();
        }

        currentDirectory = parts.join("/");
      }

      setTimeout(() => {
        if (onComplete) onComplete();
      }, 10);

      return null;
    }

    const baseDir = currentDirectory;
    const newDir = baseDir ? `${baseDir}/${targetDir}` : targetDir;

    function CdHandler() {
      const [validated, setValidated] = useState(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        async function validateDirectory() {
          try {
            const response = await fetch(
              `/api/files?dir=${encodeURIComponent(baseDir)}`
            );
            const data = await response.json();

            if (response.ok && data.items) {
              const folders = data.items
                .filter((item: any) => item.type === "folder")
                .map((item: any) => item.name);

              const exactMatch = folders.find(
                (folder: string) => folder === targetDir
              );

              if (exactMatch) {
                currentDirectory = newDir;
              } else {
                setError(`cd: no such file or directory: ${targetDir}`);
              }
            } else {
              setError(`cd: no such file or directory: ${targetDir}`);
            }
          } catch (err) {
            setError(`cd: no such file or directory: ${targetDir}`);
          }
          setValidated(true);

          setTimeout(() => {
            if (onComplete) onComplete();
          }, 10);

          setTimeout(() => {
            const terminalEnd = document.querySelector("[data-terminal-end]");
            if (terminalEnd) {
              terminalEnd.scrollIntoView({ behavior: "smooth" });
            }
          }, 50);
        }

        validateDirectory();
      }, []);

      if (!validated) {
        return null;
      }

      if (error) {
        return (
          <div className="text-terminal-error font-mono text-sm">{error}</div>
        );
      }

      return null;
    }

    return <CdHandler />;
  }

  const handler = commands[resolvedCommand];

  if (!handler) {
    const suggestions = findSimilarCommands(command);

    if (suggestions.length > 0) {
      return (
        <div>
          <div className="text-terminal-error">
            command not found: {command}
          </div>
        </div>
      );
    }

    return (
      <div className="text-terminal-error">command not found: {command}</div>
    );
  }

  return handler.execute(onComplete);
}

export function getCurrentDirectory(): string {
  return currentDirectory;
}

export async function getFolderSuggestions(): Promise<string[]> {
  try {
    const response = await fetch(
      `/api/files?dir=${encodeURIComponent(currentDirectory)}`
    );
    const data = await response.json();

    if (response.ok && data.items) {
      return data.items
        .filter((item: any) => item.type === "folder")
        .map((item: any) => item.name);
    }
  } catch (err) {
    return [];
  }
  return [];
}

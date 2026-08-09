import { useState, useRef, useEffect } from "react";

// ---------------------------------------------------------------------------
// Portfolio content — edit this to match your resume/site
// ---------------------------------------------------------------------------
const DATA = {
  name: "Sumit A. Sahni",
  role: "Engineer @ Microsoft",
  location: "Pune, India",
  about: [
    "Engineer at Microsoft, working on Windows OS support, Active Directory,",
    "Group Policy, DNS and enterprise troubleshooting.",
    "Background in frontend/full-stack (React, Next.js, TypeScript) and",
    "networking/security (CCNA, CompTIA Security+).",
  ],
  experience: [
    {
      role: "Engineer",
      company: "Microsoft",
      period: "Jan 2026 - Present",
      bullets: [
        "Technical support for Windows OS, diagnosing software/system issues",
        "Troubleshoot Active Directory: accounts, groups, auth, password resets",
        "Windows login, domain join, Group Policy, DNS, connectivity issues",
        "PowerShell + remote tools for diagnostics; SLA-driven case management",
      ],
    },
    {
      role: "MERN Engineer",
      company: "Engineer's Cradle",
      period: "Aug 2024 - Nov 2024",
      bullets: ["TypeScript", "Next.js"],
    },
    {
      role: "Frontend Developer (runner-up)",
      company: "Tryp.com",
      period: "2 weeks",
      bullets: [
        "Built a Booking Dashboard in TypeScript with pagination + status tracking",
      ],
    },
    {
      role: "Frontend Developer (Intern)",
      company: "Predrag System",
      period: "4 months",
      bullets: [
        "Responsive UI for Evogym, +25% user engagement",
        "Turned wireframes into a React-driven interactive UI",
      ],
    },
  ],
  projects: [
    { name: "evogym-ui", desc: "Responsive gym-tracking frontend built in React" },
    { name: "booking-dashboard", desc: "TypeScript admin dashboard with pagination" },
    { name: "portfolio", desc: "This site — Next.js + interactive terminal" },
  ],
  certifications: [
    "CompTIA Security+",
    "CCNA 200-301",
    "Web Development Bootcamp (Udemy)",
  ],
  contact: {
    email: "sumit.123sahni@gmail.com",
    linkedin: "linkedin.com/in/sumit-sahni-852756204",
    github: "github.com/<your-username>",
  },
};

const PROMPT = "sumit@portfolio:~$";

// ---------------------------------------------------------------------------
// Command handlers — each returns an array of output lines
// ---------------------------------------------------------------------------
function runCommand(raw, { setHistoryCleared }) {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "":
      return [];

    case "help":
      return [
        "Available commands:",
        "  portfolio        summary of my resume",
        "  about            who I am",
        "  whoami           short identity line",
        "  experience       work history",
        "  projects         things I've built",
        "  certifications   certs I hold",
        "  contact          how to reach me",
        "  clear            clear the screen",
      ];

    case "whoami":
      return [`${DATA.name} — ${DATA.role} — ${DATA.location}`];

    case "about":
      return DATA.about;

    case "experience":
      return DATA.experience.flatMap((e) => [
        `${e.role} @ ${e.company}  (${e.period})`,
        ...e.bullets.map((b) => `  - ${b}`),
        "",
      ]);

    case "projects":
      return DATA.projects.map((p) => `  ${p.name.padEnd(20)} ${p.desc}`);

    case "certifications":
      return DATA.certifications.map((c) => `  - ${c}`);

    case "contact":
      return [
        `  email     ${DATA.contact.email}`,
        `  linkedin  ${DATA.contact.linkedin}`,
        `  github    ${DATA.contact.github}`,
      ];

    case "portfolio":
      return [
        `${DATA.name} — ${DATA.role}`,
        "",
        ...DATA.about,
        "",
        "Type 'help' to see all commands.",
      ];

    case "clear":
      setHistoryCleared();
      return null; // signals "don't append output"

    default:
      return [`command not found: ${raw}`, "type 'help' to see available commands"];
  }
}

// ---------------------------------------------------------------------------
// Terminal component
// ---------------------------------------------------------------------------
export default function PortfolioTerminal() {
  const [lines, setLines] = useState([
    { type: "system", text: "Welcome to sumitsahni.in — type 'help' to get started." },
  ]);
  const [input, setInput] = useState("");
  const [historyIdx, setHistoryIdx] = useState(null);
  const cmdHistory = useRef([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function focusInput() {
    inputRef.current?.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const value = input;
    cmdHistory.current.push(value);
    setHistoryIdx(null);

    const echoLine = { type: "input", text: `${PROMPT} ${value}` };

    const output = runCommand(value, {
      setHistoryCleared: () => setLines([]),
    });

    if (output === null) {
      // 'clear' already reset lines
      setInput("");
      return;
    }

    setLines((prev) => [
      ...prev,
      echoLine,
      ...output.map((text) => ({ type: "output", text })),
    ]);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.current.length === 0) return;
      const nextIdx =
        historyIdx === null
          ? cmdHistory.current.length - 1
          : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(cmdHistory.current[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === null) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.current.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(cmdHistory.current[nextIdx]);
      }
    }
  }

  return (
    <div
      onClick={focusInput}
      style={{
       background: "#0d1117",
        color: "#c9d1d9",
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
        fontSize: "14px",
        lineHeight: 1.6,
        borderRadius: "10px",
        border: "1px solid #30363d",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        width: "100%",
        height: "auto",
        margin: "0 auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    
      }}
    >
      {/* title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 14px",
          background: "#161b22",
          borderBottom: "1px solid #30363d",
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
        <span style={{ marginLeft: 8, color: "#8b949e", fontSize: "12px" }}>
          sumit@portfolio: ~ type 'help' 
        </span>
      </div>

      {/* output area */}
      <div
        style={{
          padding: "16px",
          maxHeight: "360px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              color:
                line.type === "input"
                  ? "#58a6ff"
                  : line.type === "system"
                  ? "#8b949e"
                  : "#c9d1d9",
            }}
          >
            {line.text}
          </div>
        ))}

        {/* live input line */}
        <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: 4 }}>
          <span style={{ color: "#58a6ff", marginRight: 8, whiteSpace: "nowrap" }}>
            {PROMPT}
          </span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#c9d1d9",
              fontFamily: "inherit",
              fontSize: "inherit",
              caretColor: "#58a6ff",
            }}
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
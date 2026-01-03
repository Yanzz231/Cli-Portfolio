import { NeofetchData, ExperienceData } from "./types";

export const neofetchData: NeofetchData = {
  username: "guest",
  hostname: "andrian-ubuntu",
  os: "Ubuntu 24.04 LTS x86_64",
  host: "KVM/QEMU (Standard PC (i440FX + PIIX, 1996))",
  kernel: "6.2.0-36-generic",
  uptime: "21 mins",
  packages: "1753 (dpkg), 11 (snap)",
  shell: "bash 5.1.16",
  resolution: "1024x768",
  de: "GNOME 42.9",
  wm: "Mutter",
  theme: "Yaru-dark [GTK2/3]",
  icons: "Adwaita",
  terminal: "gnome-terminal",
  cpu: "AMD Ryzen 5 3600 (2) @ 3.60GHz",
  gpu: "00:01.0 Red Hat, Inc. Virtua",
  memory: "1253MiB / 3907MiB",
};

export const experienceData: ExperienceData = {
  "Genius Growth AI": [
    {
      position: "Junior Staff Developer",
      period: "Jun 2025 - November 2025",
      description:
        "Built landing page website and content management system for educational app, creating user-friendly pages to showcase features and manage content easily. Worked on backend development using Golang, helping build APIs and server functions that support the learning platform.",
    },
  ],
  "Binus Nusantara Computer Club (BNCC)": [
    {
      position: "Elite Team Member",
      period: "Sep 2025 - Present",
      description:
        "Selected as part of BNCC's Elite Team, a specialized group representing the organization in hackathon and technology competitions. Participated in hackathon-style projects focusing on real-world problem solving and rapid prototyping. Worked in teams to design, develop, and pitch functional applications within tight deadlines. Applied knowledge in programming, UI/UX, and system design to build complete product concepts.",
    },
    {
      position: "Learning and Training (LnT) C Programming Member",
      period: "Sep 2025 - Present",
      description:
        "Participated in BNCC's Learning and Training (LnT) Regular Class on C Programming, focusing on fundamental programming concepts and problem-solving using the C language. Learned about data types, control structures, functions, arrays, and pointers while implementing structured programming practices through various exercises and projects.",
    },
  ],
  "HIMTI Binus University": [
    {
      position: "Staff of Web Development - HISHOT 2025",
      period: "Apr 2025 - Present",
      description:
        "Developed and maintained the official HIMTI website for seminars and workshops during the HISHOT 2025 event. Actively participated as a committee member in organizing and managing the HISHOT 2025 seminar.",
    },
    {
      position: "Technical Division Staff - SESVENT 2025",
      period: "Oct 2025 - Oct 2025",
      description:
        "Assisted the Technical Division team in handling both online and offline operations during SESVENT 2025, ensuring the event ran smoothly from a technical perspective. Helped manage Zoom sessions, including spotlight control, speaker transitions, and simple live documentation. Supported sound and background music setup during offline sessions.",
    },
  ],
  "Bina Nusantara IT Division": [
    {
      position: "Software Engineer",
      period: "Mar 2025 - Present",
      description:
        "Developed advanced search functionality using Elasticsearch (ELK Stack) integrated with ASP.NET 6 backend, enabling efficient data indexing and complex query capabilities. Built comprehensive web application using React with Vite and Tailwind CSS, developing multiple responsive UI components and pages including search interfaces, documentation sections, and other interactive features.",
    },
  ],
  "Self-Employed": [
    {
      position: "Freelance Software Developer",
      period: "Jun 2024 - Present",
      description:
        "Successfully completed 3 freelance projects, all focused on website development. Built and maintained websites using React, Express.js, and MySQL. Collaborated with clients to deliver tailored solutions and ensure project requirements were met.",
    },
  ],
  "Yellow Frame Studio": [
    {
      position: "Web Developer",
      period: "Jan 2023 - Mar 2023",
      description:
        "Developed the company website using React, Express.js, and MySQL during internship at Yellow Frame Studio. Performed video and photo editing using Adobe Photoshop and Adobe Premiere Pro.",
    },
  ],
};

export const techStackData = {
  languages: [
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Go",
  ],
  frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "Bootstrap"],
  backend: [".NET", "Express.js", "Golang", "Strapi", "Filament"],
  database: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Elasticsearch",
    "Firebase",
    "Supabase",
    "Prisma",
  ],
  tools: [
    "Git",
    "Nginx",
    "Azure",
    "GCP",
    "AWS",
    "Postman",
    "Figma",
    "Logstash",
    "Kibana",
    "Notion",
  ],
};

export const aboutData = {
  name: "Andrian Pratama",
  tagline: "Junior Software Enginner",
  bio: `An undergraduate Computer Science student at Bina Nusantara University and a Fullstack Developer with 3 years of experience in web and mobile application development, and highly enthusiastic about system architecture and cloud technologies.

Currently working as Software Engineer at Bina Nusantara IT Division, developing advanced search functionality using Elasticsearch (ELK Stack) integrated with ASP.NET 6 backend.

What I do:

- Build fullstack web applications using React, Next.js, ASP.NET, and Express.js
- Develop backend services and APIs with Golang, FastAPI, and Node.js
- Work with modern databases like MySQL, MongoDB, PostgreSQL, and Firebase
- Deploy and manage applications on cloud platforms (Azure, GCP, AWS)
- Create responsive and user-friendly interfaces with React, Vite, and Tailwind CSS
- Participate in hackathons and tech competitions (Arkavidia 9.0 Winner, Samsung SFT Finalist, APICTA First Runner-Up)
`,
};

export const projectsData = [
  {
    name: "Tabi (Tangan Bicara)",
    description:
      "An interactive web-based learning platform for American Sign Language (ASL) developed as part of the Human Computer Interaction (HCI) course project.",
    tech: ["React.js", "Tailwind CSS", "HTML", "CSS", "Sweetalert2"],
    link: "https://github.com/Yanzz231/Tabi",
  },
  {
    name: "LuxCinema",
    description:
      "Built a full-stack cinema ticket booking platform integrating a secure payment gateway. Features include movie listing, seat selection, booking history, and real-time payment confirmation.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Laravel",
      "MySQL",
      "Midtrans",
    ],
    link: "https://github.com/LuxCinemaa",
  },
  {
    name: "A2 Trans",
    description:
      "Developed a responsive and SEO-optimized landing page for A2 Trans, a bus rental service provider, along with a custom Content Management System (CMS) to manage fleet information.",
    tech: ["React.js", "Laravel", "PHP", "MySQL", "JavaScript"],
    link: "",
  },
  {
    name: "SMK Buddhi",
    description:
      "Designed and developed the official website for SMK Buddhi to enhance the school's online presence. Features include dynamic news section, photo gallery, and interactive contact form.",
    tech: ["React.js", "Strapi.js", "Tailwind CSS", "SQLite"],
    link: "",
  },
];

export const contactData = {
  email: "andrianpratama231@gmail.com",
  github: "github.com/Yanzz231",
  linkedin: "linkedin.com/in/andrian-pratama-27795431b",
  instagram: "instagram.com/iyanmikasa",
};

export const certificationsData = [
  {
    title: "APICTA Awards 2025 - Industry: Inclusivity & Community Service Category",
    organizer: "Asia Pacific ICT Alliance",
    date: "Dec 2025",
    achievement: "First Runner-Up",
    description:
      "Achieved First Runner-Up position at APICTA Awards 2025 in the Industry: Inclusivity & Community Service Category. APICTA Awards is one of the most prestigious ICT innovation competitions in the Asia Pacific region, recognizing excellence in technology solutions that promote inclusivity and community service.",
    projectUrl: "https://github.com/VoiceChess",
    articleUrl:
      "https://global.turingcerts.com/en/co/cert?email=bakti.jabar%40binus.edu&hash=oQbAfMeR1p",
    certificateFile: "/Certificate/APICTA.png",
  },
  {
    title: "Arkavidia 9.0 - IT Competition",
    organizer: "Institut Teknologi Bandung (ITB)",
    date: "May 2025",
    achievement: "Finalist + Most Favorite Team",
    description:
      "Achieved Finalist position and won Most Favorite Team award at Arkavidia 9.0, one of Indonesia's largest IT competitions hosted by Institut Teknologi Bandung. Competed against top teams nationwide, demonstrating innovation, technical excellence, and teamwork in developing technology solutions.",
    projectUrl: "https://github.com/NNOGAA",
    articleUrl:
      "https://socs.binus.ac.id/2025/05/16/mahasiswa-binus-raih-prestasi-di-arkavidia-9-0-itb/",
    certificateFiles: [
      "/Certificate/Finalist_Certificate_Andrian Pratama.pdf",
      "/Certificate/Most Favorite Team_Certificate_Andrian Pratama.pdf"
    ],
  },
  {
    title: "Samsung Solve for Tomorrow 2025",
    organizer: "Samsung Indonesia",
    date: "2025",
    achievement: "Finalist",
    description:
      "Selected as Finalist in Samsung Solve for Tomorrow 2025, a prestigious innovation competition focused on developing technology solutions to address social and environmental challenges. Demonstrated creative problem-solving and technical innovation in creating impactful solutions for the community.",
    projectUrl: "https://github.com/VoiceChess",
    articleUrl:
      "https://news.samsung.com/id/semifinalis-sft-2025-angkat-tema-sport-tech-environment",
    certificateFile: "/Certificate/Sertifikat Finalis Samsung Solve for Tomorrow 2025.pdf",
  },
];

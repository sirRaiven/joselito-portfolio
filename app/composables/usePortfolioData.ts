export type PortfolioProject = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  highlights: string[];
  accent: "violet" | "lime" | "white";
};

export const usePortfolioData = () => {
  const profile = {
    name: "Joselito D. Faylogna",
    shortName: "Joselito Faylogna",
    initials: "JF",
    title: "Graphic Designer & IT Instructor",
    tagline: "Graphic designer and technology educator focused on clear, practical, and thoughtful work.",
    intro:
      "I work across graphic design, technology, and education—creating visual materials, digital interfaces, and learning experiences that communicate clearly and serve a practical purpose.",
    about:
      "My background in Information Technology gives me a practical understanding of digital products, while my work in freelance design and instruction continues to shape how I approach communication, usability, and learning. I value thoughtful design, steady improvement, and work that is useful to the people it is made for.",
    email: "faylognajolo@gmail.com",
    phone: "+63 976 150 8552",
    linkedin: "https://www.linkedin.com/in/joselitofaylogna/",
  };

  const services = [
    {
      number: "01",
      title: "Visual Design",
      description:
        "Logos, social graphics, posters, presentation visuals, video assets, and other communication materials for digital and print use.",
      icon: "i-lucide-pen-tool",
    },
    {
      number: "02",
      title: "UI & Digital Products",
      description:
        "Interface concepts and visual systems for mobile and web applications, with attention to clarity, consistency, and practical use.",
      icon: "i-lucide-panels-top-left",
    },
    {
      number: "03",
      title: "IT Instruction",
      description:
        "Hands-on instruction in digital literacy, basic programming, and practical IT skills supported by assessments and learner feedback.",
      icon: "i-lucide-presentation",
    },
    {
      number: "04",
      title: "Creative Technology",
      description:
        "Technology projects that bring together design, software, prototyping, and problem-solving for academic and real-world use cases.",
      icon: "i-lucide-cpu",
    },
  ];

  const projects: PortfolioProject[] = [
    {
      id: 1,
      number: "01",
      title: "AquaArdent",
      subtitle: "IoT Aquaculture Interface",
      year: "2023",
      category: "UI / Product Design",
      description:
        "An interface concept for an IoT-enabled automatic fish feeder with a fish-kill alert and mitigation system, developed as part of a capstone and startup-oriented project for aquaculture users.",
      role: "UI Designer / Project Team Member",
      tools: ["Figma", "UI Design", "IoT Concept", "Product Thinking"],
      highlights: [
        "Designed an intuitive interface around monitoring and automated feeding workflows.",
        "Project received an Excellence Award at AppCon 2023 organized by Otis Japan Inc.",
        "The project later received a PalRS Center Seed Funding Grant in 2024.",
      ],
      accent: "violet",
    },
    {
      id: 2,
      number: "02",
      title: "NeatApp",
      subtitle: "Laboratory Equipment Borrowing App",
      year: "2022",
      category: "Mobile Application",
      description:
        "A mobile application created to monitor equipment borrowed from a university computer network laboratory and streamline the listing and storage of borrower records.",
      role: "Student Developer",
      tools: ["Android Studio", "Firebase", "Mobile UI", "Database"],
      highlights: [
        "Built as a practical application for laboratory equipment monitoring.",
        "Used Firebase as the application database and Android Studio for development.",
      ],
      accent: "lime",
    },
    {
      id: 3,
      number: "03",
      title: "Freelance Design Practice",
      subtitle: "Brand, Social & Digital Graphics",
      year: "2021—Present",
      category: "Graphic Design",
      description:
        "Ongoing freelance design work covering logos, social media posts, videos, presentation visuals, and 3D graphics across a range of small creative requirements.",
      role: "Freelance Graphic Designer",
      tools: ["Photoshop", "Illustrator", "Canva", "CorelDRAW", "SketchUp"],
      highlights: [
        "Creates visual assets for digital communication and presentation needs.",
        "Works across photo editing, vector graphics, video, and basic 3D design.",
      ],
      accent: "white",
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Auxiliary Technology Program Instructor (Part-time)",
      company: "ATP Dagupan",
      duration: "July 2025 — Present",
      description:
        "Facilitates hands-on training and lectures in technology-related courses, with emphasis on digital literacy, basic programming, and practical IT skills.",
      highlights: [
        "Assesses learner performance through projects, quizzes, and practical evaluations.",
        "Provides constructive feedback to support continuous learner improvement.",
      ],
    },
    {
      id: 2,
      title: "Solutions Intern",
      company: "PASIA — Procurement and Supply Institute of Asia",
      duration: "March — May 2025",
      description:
        "Supported procurement data migration, validation, peer review, and internal reporting work for Metro Pacific Health-related records.",
      highlights: [
        "Encoded and migrated more than 690 item records across multiple categories.",
        "Reviewed procurement data and contributed to data-analysis and reporting tasks.",
        "Enhanced corporate training decks using PowerPoint and Google Slides.",
      ],
    },
    {
      id: 3,
      title: "Office Staff Intern",
      company: "PSU Research & Extension Office",
      duration: "February 2025",
      description:
        "Provided administrative, clerical, and digital record support for day-to-day research and extension office operations.",
      highlights: [
        "Helped organize research documents, program files, and office correspondence.",
      ],
    },
    {
      id: 4,
      title: "Freelance Graphic Designer",
      company: "Independent",
      duration: "September 2021 — Present",
      description:
        "Creates logos, social graphics, videos, presentations, and 3D visual materials using a range of creative design tools.",
      highlights: [
        "Works with Adobe Photoshop and Illustrator, Canva, CorelDRAW, Filmora, and SketchUp.",
      ],
    },
  ];

  const recognition = [
    {
      year: "2024",
      title: "PalRS Center Seed Funding Grant",
      description: "Seed funding support awarded after participation in a technology business incubation program.",
    },
    {
      year: "2023",
      title: "Excellence Award — AquaArdent",
      description: "Recognized during AppCon 2023 organized by Otis Japan Inc.",
    },
    {
      year: "2023",
      title: "2nd Place — Automated Hydroponics",
      description: "Region 1 pitching competition, 8th Philippine Startup Challenge.",
    },
  ];

  const extracurricular = [
    {
      role: "Secretary",
      organization: "Society of Future IT Innovators",
      duration: "August 2023 — September 2024",
      description:
        "Supported a student organization focused on strengthening technical, business, and interpersonal skills among IT students.",
    },
    {
      role: "Incubatee",
      organization: "Miriam College Technology Business Incubator",
      duration: "February 2023 — September 2024",
      description:
        "Participated in a student startup incubation program focused on strengthening technical and entrepreneurial skills around an innovative product concept.",
    },
  ];

  const education = {
    school: "Pangasinan State University — Lingayen Campus",
    degree: "Bachelor of Science in Information Technology",
    duration: "August 2022 — August 2025",
    achievements: ["Magna Cum Laude", "Consistent President's Lister"],
  };

  const skillGroups = [
    {
      name: "Design",
      items: ["Photoshop", "Illustrator", "InDesign", "Canva", "CorelDRAW", "SketchUp", "Figma"],
    },
    {
      name: "Development",
      items: ["Java", "HTML / CSS", "Flutter / Dart", "Go", "MongoDB", "MySQL", "Firebase"],
    },
    {
      name: "Tools",
      items: ["Android Studio", "Git", "Microsoft Word", "Excel", "PowerPoint", "Outlook"],
    },
    {
      name: "Additional",
      items: ["Video Editing", "Presentation Design", "Basic Troubleshooting", "Data Validation"],
    },
  ];

  return {
    profile,
    services,
    projects,
    experience,
    recognition,
    extracurricular,
    education,
    skillGroups,
  };
};

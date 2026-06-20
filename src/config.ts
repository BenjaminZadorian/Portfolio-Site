export const siteConfig = {
  name: "Benjamin Zadorian",
  title: "Software Engineer",
  description: "Portfolio website of Benjamin Zadorian",
  accentColor: "#65E65C",
  social: {
    email: "zadorianben@protonmail.com",
    linkedin: "https://www.linkedin.com/in/benzadorian/",
    github: "https://github.com/BenjaminZadorian",
  },
  aboutMe:
    "Ben Zadorian - I build software at the intersection of machine learning and systems programming. Spiking neural networks that model human cognition, full-stack apps deployed on AWS & Render.  Upper Second Class Honours, BSc Computer Science Computer Science graduate, Middlesex University.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "C/C++/C#", "Spiking Neural Networks", "AI/ML"],
  projects: [
    {
      name: "IAC Spiking Neural Network",
      description:
        "Using the PyNN & NEST libraries for Python, I worked on created a spiking neural network architecture that can replicate the conditions in the Rumelhart and McClelland Occlusion Experiment relating to WSE",
      link: "https://github.com/BenjaminZadorian/IAC-Spiking-Neural-Network",
      skills: ["Python", "PyNN & NEST", "MatPlotLib", "Neuromorphic Design],
    },
    {
      name: "AI Handwritten Digits Recognition",
      description:
        "A Java project which reads data from 8x8 greyscale images of handwritten digits and uses AI algorithms to learn and recognise what digit is in the image.",
      link: "https://github.com/BenjaminZadorian/Handwritten-Digits-Recognition",
      skills: ["Java"],
    },
    {
      name: "After-School Activites Booking Site",
      description:
        "A template site for booking after-school activies designed as a university project.  Uses Node.js and MongoDB for the backend with the frontend created using Vue.js",
      link: "https://github.com/BenjaminZadorian/Full-Stack-Booking-Site-Frontend",
      skills: ["Vue.js", "Node.js", "AWS", "MongoDB"],
    },
    {
      name: "Verlet-Integration Rope Simulation",
      description:
        "A 2D physics simulation implementing verlet integration to simulate a rope tied between two physics bodies in the Godot 4.5 Engine",
      link: "https://github.com/BenjaminZadorian/Verlet-Integration-Rope-Simulation",
      skills: ["Godot", "GDScript", "Verlet Integration"]
    }
  ],
  experience: [
    {
      company: "BLCMods",
      title: "Developer",
      dateRange: "May 2023 - Jul 2023",
      bullets: [
        "Developed a solo Unreal Engine modding project using Unreal Object Explorer to inspect and modify game assets.",
        "Experimented with engine data structures and implementation workflows to create and test gameplay modifications.",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "IEUK",
      title: "Student Intern",
      dateRange: "Jun 2025 - Jul 2025",
      bullets: [
        "Took part in a Technology & Engineering programme focused on professional development, industry exposure, and career exploration.",
        "Engaged with students, graduates, and senior leaders to build awareness of workplace expectations and opportunities in the sector.",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Middlesex University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 - 2026",
      achievements: [
        "Upper Second Class Honours"
      ],
    },
  ],
};

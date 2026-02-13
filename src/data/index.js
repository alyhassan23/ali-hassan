import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiExpress, SiMysql, SiCplusplus, SiMongodb } from "react-icons/si";

export const SKILLS = [
  { name: "Python", icon: FaPython, level: "Advanced" },
  { name: "Node.js", icon: FaNodeJs, level: "Advanced" },
  { name: "Express.js", icon: SiExpress, level: "Advanced" },
  { name: "MySQL", icon: SiMysql, level: "Intermediate" },
  { name: "C++", icon: SiCplusplus, level: "Intermediate" },
  { name: "Web Development", icon: FaCode, level: "Expert" },
  { name: "Database SQL", icon: FaDatabase, level: "Intermediate" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
];

export const EDUCATION = [
  {
    id: 1,
    school: "Lahore Garrison University",
    degree: "BS Computer Software Engineering",
    year: "2022 - 2026",
    location: "Lahore, Pakistan",
    details:
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.",
  },
  {
    id: 2,
    school: "Forman Christian College",
    degree: "Intermediate in Computer Science (ICS)",
    year: "2020 - 2022",
    location: "Lahore, Pakistan",
    details: "Foundation in Computer Science and Mathematics.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "IMMUNOAI",
    category: "AI & Healthcare",
    desc: "Multimodal AI System for Autoimmune Disease Diagnosis using MRI & Clinical Data.",
    details:
      "ImmunoAI is a cutting-edge diagnostic system that bridges the gap between diverse medical data sources. It utilizes a hybrid fusion model combining ResNet50 for MRI analysis and Ensemble Learning (XGBoost/LightGBM) for clinical biomarkers. Features include an Explainable AI (XAI) engine for doctor trust, a patient portal with a symptom checker, and an LLM-powered medical chatbot.",
    image: "/immuno.png",
    techstack: "Python, Django, React, PyTorch, Scikit-Learn, PostgreSQL",
    Challenge:
      "Integrating multimodal data (Images + Tabular) into a single predictive model was the biggest hurdle. effectively fusing the feature vectors from the CNN and the tabular classifiers required careful tuning. Additionally, ensuring the AI's decisions were explainable to doctors via Grad-CAM and SHAP plots was critical for clinical adoption.",
    githubLink: "https://github.com/alyhassan23/IMMUNOAI",
  },
  {
    id: 2,
    title: "Inventory & Sales Management",
    category: "Desktop Application",
    desc: "A robust desktop system for retail business management built with Python & MySQL.",
    details:
      "From stock tracking to invoice generation, this system automates the daily operations of small to medium retail businesses. It features a secure user login, real-time stock monitoring, and a dynamic dashboard for sales reports. The application is built using the MVC pattern to ensure maintainability and scalability.",
    image: "/saleinventry.jpg",
    techstack: "Python, Tkinter, MySQL, Unittest",
    Challenge:
      "Designing a responsive and intuitive UI using Tkinter was a unique challenge. Unlike web frameworks, managing state and event-driven updates in a desktop environment required a deep understanding of Python's threading and GUI lifecycle to prevent the application from freezing during heavy database queries.",
    githubLink: "https://github.com/alyhassan23/Inventory_Sales_Management_System",
  },
  {
    id: 3,
    title: "Grand Voyage Hotel Website",
    category: "Web Development",
    desc: "Dynamic web apps using React and Node.js with RESTful APIs.",
    details:
      "Grand Voyage Hotel Website is a full-stack web application developed using Node.js, Express.js, and EJS following a clean MVC architecture. The platform simulates a modern hotel booking and management system where users can explore rooms, interact with dynamic pages, and experience structured backend routing integrated with a relational database.",
    image: "/GV HOTEL.png",
    techstack: "Node.js, Express.js, EJS, MySQL",
    Challenge:
      "One of the primary challenges in developing this system was maintaining a clear separation of concerns while handling multiple routes, controllers, and database operations simultaneously. Ensuring proper database connectivity and debugging route conflicts required careful architectural planning.",
    githubLink: "https://github.com/alyhassan23/Grand-Voyage-Hotel-Website.git",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    category: "Data Science",
    desc: "Interactive dashboards using Power BI to visualize complex datasets.",
    details:
      "Transformed raw Excel/SQL data into actionable insights using Power BI. Created dynamic DAX measures to track KPIs and trends over time.",
    image: "/dashboard.jpg",
    techstack: "Power BI, SQL, Excel, DAX",
    Challenge:
      "Cleaning inconsistent data sources and creating complex DAX measures to accurately reflect business logic were the main challenges. Optimizing the dashboard for performance with large datasets was also a key focus.",
    githubLink: "https://github.com/alihassan/dashboard",
  },
  {
    id: 5,
    title: "Online Book Store",
    category: "Frontend Development",
    desc: "A lightweight, frontend-focused online book store experience.",
    details:
      "A clean and responsive frontend application for browsing books. It features a landing page, product displays, and a contact form. This project demonstrates proficiency in core web technologies and the ability to structure a project without relying on heavy frameworks.",
    image: "/bookstore.jpg",
    techstack: "HTML5, CSS3, JavaScript",
    Challenge:
      "The main goal was to create a polished user interface using only vanilla CSS and JavaScript. Implementing dynamic behaviors like form validation and interactive product cards without a framework required writing clean, modular DOM manipulation code.",
    githubLink: "https://github.com/alyhassan23/Book-Store",
  },
  {
    id: 6,
    title: "Pet Haven & Care",
    category: "Full Stack Development",
    desc: "A backend-powered web application for pet care management.",
    details:
      "PET HAVEN AND CARE is a comprehensive system designed to streamline pet care services. It allows administrators to manage pet records, track services, and maintain a structured SQL database. The application features a robust Node.js backend with Express for routing and EJS for dynamic frontend rendering.",
    image: "/petadoption.jpg",
    techstack: "Node.js, Express.js, EJS, MySQL",
    Challenge:
      "Implementing a relational database schema that effectively links pets, owners, and services was a key challenge. Additionally, ensuring secure and efficient data flow between the frontend forms and the MySQL backend required rigorous testing and validation logic.",
    githubLink: "https://github.com/alyhassan23/PET-HAVEN-AND-CARE",
  },
];

export const BLOGS = [
  {
    id: 1,
    title: "The Future of AI in Web Dev",
    date: "Oct 12, 2025",
    category: "AI & Tech",
    author: "Ali Hassan",
    excerpt:
      "How Generative AI tools are shifting the paradigm from writing code to architecting solutions.",
    content: [
      "The landscape of web development is undergoing a seismic shift. Tools like ChatGPT and GitHub Copilot are no longer just novelties; they are essential pair programmers. But the question remains: Will AI replace developers?",
      "The short answer is no. AI replaces syntax generation, not problem-solving. As a Full-Stack Engineer, I have found that using AI allows me to focus less on boilerplate code and more on system architecture and business logic.",
      "For example, in my recent project 'ImmunoAI', I utilized AI models to handle complex data classification tasks that would have taken weeks to code manually. The future belongs to developers who can orchestrate these AI tools effectively.",
      "In conclusion, the 'AI Revolution' is actually a 'Productivity Revolution'. It raises the baseline for what a junior developer can do, but it elevates the ceiling for what a senior engineer can architect.",
    ],
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    date: "Sep 28, 2025",
    category: "Engineering",
    author: "Ali Hassan",
    excerpt:
      "Advanced techniques for reducing re-renders and managing state effectively in large-scale applications.",
    content: [
      "React is fast by default, but as applications grow, performance bottlenecks inevitably appear. The most common culprit? Unnecessary re-renders.",
      "One of the most effective techniques I use is 'Memoization'. By using `useMemo` and `useCallback`, we can ensure that expensive calculations are only re-computed when their dependencies change. However, overuse can actually hurt performance due to memory overhead.",
      "Another critical aspect is State Colocation. Moving state down to the lowest common ancestor prevents the entire component tree from re-rendering when a single input field changes.",
      "Finally, code-splitting with `React.lazy` is non-negotiable for modern web apps. It allows us to load only the JavaScript needed for the current route, significantly reducing the initial load time (Time to Interactive).",
    ],
  },
];
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    date: "Aug 2025",
    credentialId: "YPWSQHEQRS3S",
    link: "https://www.coursera.org/account/accomplishments/specialization/YPWSQHEQRS3S", // Verify this link matches your actual profile
    logo: "IBM",
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google",
    date: "Dec 2024",
    credentialId: "93OJU1QHY27B",
    link: "https://www.coursera.org/account/accomplishments/verify/93OJU1QHY27B", // Verify this link
    logo: "Google",
  },
  {
    id: 3,
    title: "Generative AI: Elevate Your Data Science Career",
    issuer: "IBM",
    date: "Aug 2025",
    credentialId: "Verified",
    link: "https://www.coursera.org/account/accomplishments/verify/O0QVC4AIT2CM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", // Add actual link
    logo: "IBM",
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-c6a0ee7d-3892-41e9-a69e-336b68a0f619",
    link: "https://www.udemy.com/certificate/UC-c6a0ee7d-3892-41e9-a69e-336b68a0f619/", // Add actual link
    logo: "Udemy",
  },
];

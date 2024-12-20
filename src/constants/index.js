import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  full,
  hello,
  reac,
  h,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Ux Ui Desginer",
    icon: hello,
    iconBg: "#383E56",
    points: [
      "Designing and developing user interfaces that enhance user experience and align with brand guidelines.",
      "Collaborating with cross-functional teams, including product managers, developers, and stakeholders, to create intuitive and user-centered designs.",
      "Conducting user research, including interviews, surveys, and usability testing, to gather insights and inform design decisions.",
      "Creating wireframes, prototypes, and high-fidelity designs using tools like Figma, Sketch, or Adobe XD.",
    ],
  },
  {
    title: "Front-end Developer",
    icon: reac,
    iconBg: "#E6DEDD",
    points: [
      "Designing and implementing responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.",
      "Utilizing modern front-end frameworks and libraries such as React, Angular, or Vue.js to build interactive and dynamic web applications.",
      "Optimizing web performance by analyzing and improving load times, responsiveness, and overall user experience.",
      "Ensuring cross-browser compatibility and accessibility compliance to reach a diverse audience.",
    ],
  },
  {
    title: "Backend Developer",
    icon: h,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining server-side applications and APIs using languages such as Node.js, Python, Ruby, or Java.",
      "Designing and implementing database schemas and managing data using relational (SQL) or non-relational (NoSQL) databases.",
      "Ensuring application security by implementing authentication, authorization, and data protection measures.",
    ],
  },
  {
    title: "Full stack Developer",

    icon: full,
    iconBg: "#E6DEDD",
    points: [
      "Ensuring seamless interaction between front-end and back-end components through effective API integration and data management.",
      "Implementing responsive design principles to ensure a cohesive experience across various devices and screen sizes.",
      "Optimizing the performance of both client and server-side code to deliver fast and efficient applications.",
      "Collaborating with cross-functional teams to understand requirements and deliver high-quality, end-to-end solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
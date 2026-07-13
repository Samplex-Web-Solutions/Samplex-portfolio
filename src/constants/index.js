const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];


const esentialTools = [
  {
    imgPath: "/images/logos/supabase.png",
    name: "Supabase",
    descript: "Structure of every webpage",
  },

  {
    imgPath: " /images/logos/javascript.png",
    name: "Javascript",
    descript: "Interactive functionality",
  },

  {
    imgPath: "/images/logos/react.png",
    name: "React JS",
    descript: "Build dynamic UIs",
  },

  {
    imgPath: "/images/logos/mongodb.png",
    name: "Mongo DB",
    descript: "Flexible data storage",
  },

  {
    imgPath: "/images/logos/node.png",
    name: "Node JS",
    descript: "Backend with JavaScript",
  },

  {
    imgPath: "/images/logos/expressjs.png",
    name: "Express JS",
    descript: "Server-side framework",
  },
];

const projectSection = [
  {
    id: 1,
    title: "Daily Task Hub",
    description: "Enterprise multi-role management system for Abia State Government. Solo-developed the frontend architecture for 6+ distinct user roles.",
    tech: ["React", "Tailwind CSS", "API Integration", "Framer Motion", "RBAC"],
    isPrivate: true,

    images: [
      "/images/projects/staff_dashboard.png",
      "/images/projects/hos-department.png", 
      "/images/projects/dt-supdash.png",
      "/images/projects/dailyTask-logtask.png"

    ],
    alt: "Daily Task Hub Dashboard",
  },
  {
    id: 2,
    title: "AlertAbia Platform",
    description: "State-level emergency and project reporting system. Led frontend engineering and API consumption for efficient state-wide data tracking.",
    tech: ["React", "Node.js", "Supabase", "Vercel", "Tailwind CSS"],
    isPrivate: true,
    images: ["/images/projects/Alertabia.png"],
    alt: "AlertAbia Platform",
  },
  {
    id: 3,
    title: "Nkuzi Education Portal",
    description: "Frontend architecture for state educational resource management, facilitating data flow between administrators and educators.",
    tech: ["React", "API Integration", "Tailwind CSS", "Framer Motion", "Vercel"],
    isPrivate: true,
    images: [
      "/images/projects/nkuzi.png",
      "/images/projects/nkuzi2.png",
      "/images/projects/Nkuzi3.png",
           
    ],
    alt: "Nkuzi Platform",
  },
  {
    id: 4,
    title: "Attendance Management App",
    description: "Automated attendance tracking system for government staff, streamlining daily operational verification.",
    tech: ["React", "Supabase", "State Management"],
    isPrivate: true,
    images: ["/images/projects/ams.png"],
    alt: "Attendance App",
  },
  {
    id: 5,
    title: "Green Energy Investment",
    description: "Full-stack investment platform with secure user authentication, transaction tracking, and real-time data management using Supabase.",
    tech: ["React", "Supabase", "Node.js"],
    isPrivate: false,
    link: "https://greenervileinc.com/",
    codeLink: "https://github.com/yourname/green-energy",
    images: ["/images/projects/greener.png"],
    alt: "Green Energy Investment Platform",
  },
  {
    id: 6,
    title: "SBLUXE Luxury E-commerce",
    description: "Premium full-stack store for luxury goods. Integrated Supabase for product management, user profiles, and secure order processing.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    isPrivate: false,
    link: "https://sbluxe.netlify.app/",
    codeLink: "https://github.com/yourname/sbluxe",
    images: ["/images/projects/sb.png"],
    alt: "SBLUXE App",
  }
];
const educationData = [
  {
    year: "2019 - 2025",
    institute: "Federal University Of Petroleum Resources Effurun",
    course: "B.Sc. Computer Science",
    description:
      "Studied core areas including Software Development Life Cycle (SDLC), Databases, Compiler Construction, Algorithms, and Computer Hardware Maintenance/Repairs.",
  },
  {
    year: "2021",
    institute: "SoloLearn",
    course: "Frontend Development Certificates",
    description:
      "Earned certifications in JavaScript, HTML, CSS, React, and Responsive Web Design through hands-on coding exercises and projects.",
  },
  {
    year: "2024",
    institute: "FreeCodeCamp",
    course: "Responsive Web Design",
    description:
      "Built real-world responsive projects while mastering Flexbox, Grid, and mobile-first design principles.",
  },
];



const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  counterItems,
  educationData,
  testimonials,
  projectSection,
  socialImgs,
  esentialTools,
};

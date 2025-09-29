const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: " /images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const esentialTools = [
  {
    imgPath: "/images/logos/html.png",
    name: "HTML 5",
    descript: "Structure of every webpage",
  },

  {
    imgPath: "/images/logos/css-3.png",
    name: "CSS 3",
    descript: "Styling and layout design",
  },

  {
    imgPath: "/images/logos/tailwindcss.png",
    name: "TailWind CSS",
    descript: "Utility-first styling",
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
    title: "Real Estate Website",
    description:
      "A fully responsive real estate platform with property listings, search filters, and image sliders.",
    tech: ["React JS", "Tailwind CSS", "Swiper.js"],
    link: "https://zonira-homes.netlify.app/",
    image: "/images/projectscreenshot/hero-snap.png",
    alt: "Real Estate Website screenshot",
  },

  {
    title: "Portfolio Website",
    description:
      "A modern and interactive personal portfolio website designed to showcase my skills, projects, and services. Features smooth animations, responsive layouts, and an easy-to-navigate structure that highlights my expertise as a web developer",
    tech: ["React JS", "Framer Motion", "Tailwind CSS"],
    link: "https://samplex-web.vercel.app/",
    image: "/images/projectscreenshot/portfolio.png",
    alt: "Portfolio Website screenshot",
  },

  {
    title: "Smart Trader: Broker Platform",
    description:
      "A secure and legitimate broker platform for stock trading simulations.",
    tech: ["React JS", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://smart-trader.vercel.app/",
    image: "/images/projectscreenshot/broker.png",
    alt: "Broker Platform screenshot",
  },

  {
    title: "Rock Paper Scissors Game",
    description:
      "A fun, interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. Features a clean UI and instant win/lose results.",
    link: "https://rps-gamebox.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectscreenshot/RPC.png",
    alt: "Rock Paper Scissors Game screenshot",
  },

  {
    title: "Merito Cosmetics Landing Page",
    description:
      "A responsive landing page for a cosmetics brand. Designed with a modern, elegant look to showcase products and offers.",
    link: "https://merito-cosmetics.netlify.app/",
    image: "/images/projectscreenshot/merito-hero.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    alt: "Merito Cosmetics Landing Page screenshot",
  },

  {
    title: "Bmart Shopping List App",
    description:
      "A shopping list app that helps users add, edit, and manage groceries with a clean and responsive UI. Built for seamless daily use.",
    link: "http://bmartshoppinglist.netlify.app/",
    image: "/images/projectscreenshot/shopping.png",
    tech: ["HTML", "CSS", "JavaScript"],
    alt: "Bmart Shopping List App screenshot",
  },
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


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
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
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  educationData,
  expLogos,
  testimonials,
  projectSection,
  socialImgs,
  esentialTools,
};

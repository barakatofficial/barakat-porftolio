export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for design & development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a dynamic Tuition Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Retainify: Revolutionizing Educational Revision",
    des: "Innovative SaaS for Enhanced Learning and Retention",
    img: "/retainify2.png",
    iconLists: [
      "/fg.png",
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
      "/fg.png",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Ummah Institute: Fostering Holistic Education",
    des: "Designed a Comprehensive Website for a Modern Learning Centre Offering Diverse Educational Services",
    img: "/ummah.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fg.png",
      "/c.svg",
    ],
    link: "/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fg.png",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "/",
  },
];

export const testimonials = [
  {
    quote:
      "Alhamdulillah, working with Barakat is an absolute pleasure. He is currently designing and building a comprehensive website for our learning centre, greatly enhancing our online presence. The site is becoming user-friendly and beautifully designed, truly reflecting our mission. JazakAllah khair!",
    name: "Abdullah",
    title: "Director of a Tuition Company",
  },
  {
    quote:
      "I highly recommend Barakat for his exceptional work. He designed and developed our e-commerce website using Shopify, making it easy for our customers to navigate and shop. The attention to detail and understanding of our needs were impressive. Thank you for your hard work!",
    name: "Mohammad Fahad",
    title: "CEO of a Thobe Business",
  },
  {
    quote:
      "The site is visually appealing and very user-friendly, which has helped us attract more customers. The process was smooth and efficient, and the final product exceeded our expectations. We are grateful for your hard work and dedication.",
    name: "Yusuf Omarzai",
    title: "CEO of a Car Rental Company",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software as a Service Developer",
    desc: "Currently Developing a cutting-edge SaaS platform, focusing on scalability and user-friendly interfaces.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Desgin Intern",
    desc: "Participated in the development of a mobile app from initial concept to deployment, ensuring an intuitive user experience and seamless functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Web Designer & Developer",
    desc: "Designed and developed user-friendly websites using modern frontend technologies, ensuring responsive design and cross-browser compatibility.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

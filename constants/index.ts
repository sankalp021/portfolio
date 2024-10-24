// Define the Skill interface for type safety.
export interface Skill {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
}

export interface Social {
  name: string;
  src: string;
  url: string;
}

// Define the Skill data arrays with proper types.
export const Skill_data: Skill[] = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React",
  //   Image: "/react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Redux",
  //   Image: "/redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Type Script",
  //   Image: "/ts.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Next js 13",
  //   Image: "/next.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials: Social[] = [
  {
    name: "Discord",
    src: "/instagram.svg",
    url: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
    url: "https://discord.gg/",
  },
];

export const Frontend_skill: Skill[] = [
  // {
  //   skill_name: "Html 5",
  //   Image: "/html.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Css",
  //   Image: "/css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Java Script",
  //   Image: "/js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "Tailwind Css",
  //   Image: "/tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill: Skill[] = [
  // {
  //   skill_name: "Node js",
  //   Image: "/node-js.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Mongo db",
  //   Image: "/mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
];

export const Full_stack: Skill[] = [
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },
];

export const Other_skill: Skill[] = [
  // Add other skills here if needed, using the same structure.
];

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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ux,
  community,
  tareas,
  materialize,
  bootstrap,
  photoshop,
  illustrator,
  adobexd
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollo Frontend",
    icon: web,
  },
  {
    title: "Diseño UX/UI",
    icon: mobile,
  },
  {
    title: "Diseño Gráfico",
    icon: backend,
  }
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
    name: "Materialize",
    icon: materialize,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Adobe xd",
    icon: adobexd,
  },
];

const experiences = [
  {
    title: "Estrategias Visuales en Redes Sociales",
    company_name: "",
    icon: community,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Desarrollé y gestioné publicaciones para Instagram en una empresa de tecnología, creando contenido visualmente atractivo y relevante que reflejaba la marca. ",
    ],
  },
  {
    title: "Desarrollo de Páginas Web en Entornos Educativos",
    company_name: "",
    icon: tareas,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Llevé a cabo la creación de páginas web como parte de proyectos asignados durante mi proceso de formación en un bootcamp. Aplicando mis conocimientos en desarrollo frontend, diseñé y desarrollé sitios web interactivos que demostraron habilidades en la implementación de diseños, optimización de UX/UI y codificación funcional.",
    ],
  },
  {
    title: "Colaboración con Diseñadores de Interfaces:",
    company_name: "",
    icon: ux,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Trabajé en estrecha colaboración con diseñadores de interfaces en un estudio de diseño gráfico, contribuyendo a la implementación de diseños creativos y funcionales en diversas plataformas. ",
    ],
  }
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

export { services, technologies, experiences, projects };

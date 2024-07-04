import { FaGithub } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

// export enum ProjectType {
//   UI = 'ui',
//   SOFTWARE = 'software',
// GRAPHICS = 'graphics'

// }

export interface Project {
  id: string;
  name: string;
  date: string;
  imgSrc: string;
  description: string;
  type: string;
  link: string;
  stack?: string;
  links?: {
    url: string,
    icon: React.ReactNode,
    title: string
  }[]
}

export const projects: Project[] = [
  {
    id: 'mlthsc',
    name: "MLTHSC: Multilabel Tagalog Hate Speech Classifier",
    date: "June 2023",
    imgSrc: "/img/projects/mlthsc.jpg",
    link: "https://thesis-passers.github.io/MLTHSC/",
    description: "A fine-tuned BERT Tagalog model social media hate speech that categorizes based on labels such as Age, Gender, Physical, Race, Religion, and Other discriminatory factors.",
    stack: "[HTML, CSS, JS, Python, Jupyter, Flask]",
    type: "software",
    links: [
      {
        url: 'https://thesis-passers.github.io/MLTHSC/',
        icon: <HiOutlineExternalLink size={24} />,
        title: 'MLTHSC: Multilabel Tagalog Hate Speech Classifier'
      },
      {
        url: 'https://github.com/syke9p3/mlthsc-thesis',
        icon: <FaGithub size={24} />,
        title: 'Github'
      },
    ]
  },


  {
    id: 'plantitapp',
    name: "PlantitApp Prototype",
    date: "February 2023",
    imgSrc: "/img/projects/plantitapp.png",
    link: "https://www.figma.com/proto/4wsDBAwRnSQQZeKEAaQwyL/PlantitApp-Prototype?node-id=1228-11498&t=ElzAP7ozx6g7JK27-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1228%3A11498&show-proto-sidebar=1",
    description: "40+ pages mobile application prototype for a plant-based management system in Figma.",
    stack: "[Figma]",
    type: "ui",
    links: [
      {
        url: 'https://www.figma.com/proto/4wsDBAwRnSQQZeKEAaQwyL/PlantitApp-Prototype?node-id=1228-11498&t=ElzAP7ozx6g7JK27-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1228%3A11498&show-proto-sidebar=1',
        icon: <HiOutlineExternalLink size={24} />,
        title: 'Figma'
      },
      {
        url: 'https://www.figma.com/design/4wsDBAwRnSQQZeKEAaQwyL/PlantitApp-Prototype?node-id=30-12&t=vCm5mGwyVdA76Gcw-0',
        icon: <FiFigma size={24} />,
        title: 'Figma'
      },
    ]

  },

  {
    id: 'berttpost',
    name: "BERT Part-of-Speech Tagger",
    date: "August 2023",
    imgSrc: "/img/projects/bertpos-hf.png",
    link: "https://huggingface.co/syke9p3/bert-tagalog-base-uncased-pos-tagger?text=Naisip+ko+na+kumain+na+lang+tayo+sa+pinakasikat+na+restaurant+sa+Manila+.",
    description: "Fine-tuned BERT Tagalog Base Uncased model for Filipino part of speech tagging. You can try the model on HuggingFace.",
    stack: "[Python, Jupyter, Hugging Face, Gradio]",
    type: "software",
    links: [
      {
        url: 'https://huggingface.co/syke9p3/bert-tagalog-base-uncased-pos-tagger',
        icon: <HiOutlineExternalLink size={24} />,
        title: 'Hugging Face'
      },
      {
        url: 'https://github.com/syke9p3/bert-tagalog-pos-tagger',
        icon: <FaGithub size={24} />,
        title: 'Github'
      },
    ]
  },
  {
    id: 'manila-zoo',
    name: "Manila Zoo Revamp Prototype",
    date: "June 2023",
    imgSrc: "/img/projects/manila-zoo.png",
    link: "https://www.figma.com/proto/JsEMfrCSXOnyMSndM8BDo8/Midterms?type=design&node-id=40-139&t=AkOxPnkHooM8Flvt-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A139&show-proto-sidebar=1",
    description: "Redesign of Manila Zoo website in Figma by my Web Development group. Features an online booking system, almanac, interactive map, and virtual 360 tour.",
    stack: "[Figma]",
    type: "ui",
    links: [
      {
        url: 'https://www.figma.com/proto/JsEMfrCSXOnyMSndM8BDo8/Midterms?type=design&node-id=40-139&t=AkOxPnkHooM8Flvt-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A139&show-proto-sidebar=1',
        icon: <HiOutlineExternalLink size={24} />,
        title: 'Figma'
      },
      {
        url: 'https://www.figma.com/design/JsEMfrCSXOnyMSndM8BDo8/Manila-Zoo-Website-Revamp-(WebDev-Midterms)?node-id=0-1&t=Y4qC7EC4jo3Ak9GY-0',
        icon: <FiFigma size={24} />,
        title: 'Figma'
      },
    ]
  },
  {
    id: 'ogglp',
    name: "OGGLP: Learner Management System",
    date: "June 2023",
    imgSrc: "https://github.com/syke9p3/syke-portfolio/blob/master/src/website/ogglp.png?raw=true",
    link: "https://github.com/syke9p3/OGGLP-Database",
    description: "A simple CRUD system to manage the contents of a MySQL database.",
    stack: "[PHP, JQuery, MySQL]",
    type: "software",
    links: [
      {
        url: 'https://github.com/syke9p3/OGGLP-Database',
        icon: <FaGithub size={24} />,
        title: 'Figma'
      },
    ]
  },
  {
    id: 'audit',
    name: "PUP Audit Management System Prototype",
    date: "June 2023",
    imgSrc: "/img/projects/audit.png",
    link: "https://www.figma.com/file/stn6IHAm2N53S9EHWrpL7c/Audit%20Design?node-id=405%3A2124&fuid=1176874496722611914",
    description: "Mockup for an audit management system in Figma.",
    stack: "[Figma]",
    type: "ui",
    links: [
      {
        url: 'https://www.figma.com/proto/stn6IHAm2N53S9EHWrpL7c/Audit-Design?node-id=405-2246&t=X9GWeaJWZPQB6tQX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=405%3A2124&show-proto-sidebar=1',
        icon: <HiOutlineExternalLink size={24} />,
        title: 'Figma'
      },
      {
        url: 'https://www.figma.com/proto/stn6IHAm2N53S9EHWrpL7c/Audit-Design?node-id=405-2124&t=X9GWeaJWZPQB6tQX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=405%3A2124&show-proto-sidebar=1',
        icon: <FiFigma size={24} />,
        title: 'Figma'
      },
    ]
  },



]


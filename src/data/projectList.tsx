import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

export interface Project {
  id: string;
  name: string;
  date: string;
  imgSrc: string;
  description: string;
  type: string;
  link: string;
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
    description: "A fine-tuned BERT Tagalog model social media hate speech that categorizes based on labels such as Age, Gender, Physical, Race, Religion, and Other discriminatory factors. ",
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
    link: "https://www.figma.com/proto/4wsDBAwRnSQQZeKEAaQwyL/PlantitApp-Prototype?type=design&node-id=597-8413&t=Tb7nbI96ih9CL8nG-1&scaling=scale-down&page-id=30%3A12&starting-point-node-id=597%3A8413&show-proto-sidebar=1&mode=design",
    description: "40+ pages mobile application prototype for a plant-based management system in Figma.",
    type: "ui"
  },

  {
    id: 'berttpost',
    name: "BERT Part-of-Speech Tagger",
    date: "August 2023",
    imgSrc: "/img/projects/bertpos-hf.png",
    link: "https://huggingface.co/syke9p3/bert-tagalog-base-uncased-pos-tagger?text=Naisip+ko+na+kumain+na+lang+tayo+sa+pinakasikat+na+restaurant+sa+Manila+.",
    description: "Fine-tuned BERT Tagalog Base Uncased model for Filipino part of speech tagging. You can try the model on HuggingFace",
    type: "software"
  },
  {
    id: 'manila-zoo',
    name: "Manila Zoo Revamp Prototype",
    date: "June 2023",
    imgSrc: "/img/projects/manila-zoo.png",
    link: "https://www.figma.com/proto/JsEMfrCSXOnyMSndM8BDo8/Midterms?type=design&node-id=40-139&t=AkOxPnkHooM8Flvt-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A139&show-proto-sidebar=1",
    description: "Redesign of Manila Zoo website in Figma by my Web Development group.",
    type: "ui"
  },
  {
    id: 'ogglp',
    name: "OGGLP: Learner Management System",
    date: "June 2023",
    imgSrc: "https://github.com/syke9p3/syke-portfolio/blob/master/src/website/ogglp.png?raw=true",
    link: "https://github.com/syke9p3/OGGLP-Database",
    description: "A simple CRUD system to manage the contents of a MySQL database.",
    type: "software"
  },
  {
    id: 'audit',
    name: "PUP Audit Management System",
    date: "June 2023",
    imgSrc: "/img/projects/audit.png",
    link: "https://www.figma.com/file/stn6IHAm2N53S9EHWrpL7c/Audit%20Design?node-id=405%3A2124&fuid=1176874496722611914",
    description: "Mockup for an audit management system in Figma.",
    type: "ui"
  },



]


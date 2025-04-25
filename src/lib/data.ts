import { ServiceType } from "@/lib/type";
import { imgs } from "../../public/images";
import {
  FacebookIcon,
  LinkedIcon,
  TwitterIcon,
} from "../../public/icons/icons";

export const navbarData = [
  {
    name: "Templates",
    path: "/templates",
  },
  {
    name: "About us",
    path: "/",
  },
  {
    name: "Articels",
    path: "/articels",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

export const serviceData: ServiceType[] = [
  {
    title: "Search engine",
    subTitle: "optimization",
    variant: "outline",
    linkVariant: "dark-lime",
    image: imgs.ServiceContent,
    path: "/",
  },
  {
    title: "Pay-per-click",
    subTitle: "advertising",
    variant: "primary",
    linkVariant: "dark-lime",
    image: imgs.ServiceLandingPage,
    path: "/",
  },
  {
    title: "Social Media",
    subTitle: "Marketing",
    variant: "secondary",
    linkVariant: "white-black",
    image: imgs.ServiceAnalysh,
    path: "/",
  },
  {
    title: "Email",
    subTitle: "Marketing",
    variant: "outline",
    linkVariant: "dark-lime",
    image: imgs.ServiceSocial,
    path: "/",
  },
];

export const footerIcons = [
  {
    icon: LinkedIcon,
    link: "/",
  },
  {
    icon: FacebookIcon,
    link: "/",
  },
  {
    icon: TwitterIcon,
    link: "/",
  },
];

export const contactInfoData = [
  " Email: info@positivus.com",
  "Phone: 555-567-8901",
  "Address: 1234 Main St Moonstone City, Stardust State 12345",
];

export const templatesType = [
  {
    id: 1,
    name: "Link in Bio Page",
  },
  {
    id: 2,
    name: "Portfolio Website",
  },
  {
    id: 3,
    name: "Landing Page",
  },
  {
    id: 4,
    name: "Event Landing Page",
  },
];

import { StaticImageData } from "next/image";

export type ServiceType = {
  title: string;
  subTitle: string;
  variant: "outline" | "primary" | "secondary";
  linkVariant: string;
  image: StaticImageData;
  path: string;
};

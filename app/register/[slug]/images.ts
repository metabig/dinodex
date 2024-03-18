"use server";
import dinos from "../../public/dino.jpg";
import Xokas from "../../public/ELXOKAS.jpg";
import AAA from "../../public/AAA.webp";
import AAB from "../../public/AAB.webp";
import AAC from "../../public/AAC.webp";
import AAD from "../../public/AAD.webp";
import AAE from "../../public/AAE.webp";
import AAF from "../../public/AAF.webp";
import AAG from "../../public/AAG.webp";
import AAH from "../../public/AAH.webp";

interface ImageMap {
  [key: string]: string;
}

const imageMap: ImageMap = {
  ElXokas: Xokas.src,
  [process.env.VAR_AAA as string]: AAA.src,
  [process.env.VAR_AAB as string]: AAB.src,
  [process.env.VAR_AAC as string]: AAC.src,
  [process.env.VAR_AAD as string]: AAD.src,
  [process.env.VAR_AAE as string]: AAE.src,
  [process.env.VAR_AAF as string]: AAF.src,
  [process.env.VAR_AAG as string]: AAG.src,
  [process.env.VAR_AAH as string]: AAH.src,
};

export default async function getDinoImg(dino_code: string) {
  return imageMap[dino_code] || dinos.src;
}

"use server";
import dinos from "../../public/dino.jpg";
import Xokas from "../../public/ELXOKAS.jpg";
import AAA from "../../public/04BF1585.webp";
import AAB from "../../public/4DC1DB04.webp";
import AAC from "../../public/5DE9A8FF.webp";
import AAD from "../../public/6BABEBFB.webp";
import AAE from "../../public/9A300D71.webp";
import AAF from "../../public/CCD632EF.webp";
import AAG from "../../public/DA6CD74B.webp";
import AAH from "../../public/E2E31BC9.webp";

interface ImageMap {
  [key: string]: string;
}

const imageMap: ImageMap = {
  "ElXokas": Xokas.src,
  "04BF1585": AAA.src,
  "4DC1DB04": AAB.src,
  "5DE9A8FF": AAC.src,
  "6BABEBFB": AAD.src,
  "9A300D71": AAE.src,
  "CCD632EF": AAF.src,
  "DA6CD74B": AAG.src,
  "E2E31BC9": AAH.src,
};

export default async function getDinoImg(dino_code: string) {
  return imageMap[dino_code] || dinos.src;
}
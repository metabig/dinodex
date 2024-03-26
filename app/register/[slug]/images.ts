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
import AAI from "../../public/AAI.webp";
import AAJ from "../../public/AAJ.webp";
import AAK from "../../public/AAK.webp";
import AAL from "../../public/AAL.webp";
import AAM from "../../public/AAM.webp";
import AAN from "../../public/AAN.webp";
import AAO from "../../public/AAO.webp";
import AAP from "../../public/AAP.webp";
import AAQ from "../../public/AAQ.webp";
import AAR from "../../public/AAR.webp";
import AAS from "../../public/AAS.webp";
import AAT from "../../public/AAT.webp";
import AAU from "../../public/AAU.webp";
import AAV from "../../public/AAV.webp";
import AAW from "../../public/AAW.webp";
import AAX from "../../public/AAX.webp";
import AAY from "../../public/AAY.webp";
import AAZ from "../../public/AAZ.webp";

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
  [process.env.VAR_AAI as string]: AAI.src,
  [process.env.VAR_AAJ as string]: AAJ.src,
  [process.env.VAR_AAK as string]: AAK.src,
  [process.env.VAR_AAL as string]: AAL.src,
  [process.env.VAR_AAM as string]: AAM.src,
  [process.env.VAR_AAN as string]: AAN.src,
  [process.env.VAR_AAO as string]: AAO.src,
  [process.env.VAR_AAP as string]: AAP.src,
  [process.env.VAR_AAQ as string]: AAQ.src,
  [process.env.VAR_AAR as string]: AAR.src,
  [process.env.VAR_AAS as string]: AAS.src,
  [process.env.VAR_AAT as string]: AAT.src,
  [process.env.VAR_AAU as string]: AAU.src,
  [process.env.VAR_AAV as string]: AAV.src,
  [process.env.VAR_AAW as string]: AAW.src,
  [process.env.VAR_AAX as string]: AAX.src,
  [process.env.VAR_AAY as string]: AAY.src,
  [process.env.VAR_AAZ as string]: AAZ.src,
};

export default async function getDinoImg(dino_code: string) {
  return imageMap[dino_code] || dinos.src;
}

"use client";

import { useTranslation } from "react-i18next";
import  starTitle  from "@/public/images/StarTitle.webp";
import Image from "next/image";

export const TitleSection = () => {
  const { t } = useTranslation();
  return (
    <div className="container  items-center  text-textMain  ">
      <div className="border-x border-border pt-[60px] pb-[55px] laptop:pt-[140px]  laptop:pb-[135px]">
        <div className=" text-center mb-[20px] laptop:mb-[30px]  ">
          <span className="font-spectral-mediumItalic text-[25px] leading-[27.5px] laptop:text-[60px] laptop:leading-[66px] uppercase">
            {t("titleSection.part_1")}{" "}
            <span className="font-monrope-medium text-[23px] leading-[25.3px] laptop:text-[56px] laptop:leading-[61.6px] text-accent ">
              {t("titleSection.specialPart")}
            </span>{" "}
            <br />
            {t("titleSection.part_2")}
          </span>
          <span className="hidden tabletLarge:inline-block ml-2 ">
            <Image
              src={starTitle}
              alt=""
            />
          </span>
          <span className="font-spectral-mediumItalic text-[25px] leading-[27.5px] laptop:text-[60px] laptop:leading-[66px]">
            ”
          </span>
        </div>

        <div className=" text-center border-border  border-t ">
          <h2 className="font-testimonia text-[32px] leading-[20.8px] mt-[20px] laptop:text-[64px] laptop:leading-[41.6px] text-greyLight  laptop:mt-[30px]">
            Heinrich Heine
          </h2>
        </div>
      </div>
    </div>
  );
};

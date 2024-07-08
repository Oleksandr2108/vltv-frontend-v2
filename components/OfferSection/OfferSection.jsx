"use client";

import styles from "./OfferSection.module.css";
import { classForButton } from "../../utils/classForButton";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import { Trans, useTranslation } from "react-i18next";
import clock from "@/public/images/clock.webp";
import register from "@/public/images/register.webp";
import Image from "next/image";
import Link from "next/link";

export const OfferSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.section} w-full h-[670px] laptop:h-[920px] relative overflow-hidden `}
    >
      <div className="container ">
        <div className=" container relative w-[1400px] h-[700px] ">
          <div className={`${styles.halfCircle} absolute inset-0 `}></div>
          <div className="absolute w-full text-center mt-[60px] laptop:mt-[172px] ">
            <h1 className="font-spectral-medium text-white text-[22px] leading-[24.2px] laptop:text-[48px] laptop:leading-[52.8px] uppercase  ">
              <Trans
                i18nKey={"offerSection.title"}
                components={{ br: <br /> }}
              />
            </h1>
            <div className="flex flex-col items-center mt-[30px] laptop:flex-row laptop:justify-center laptop:gap-[50px] laptop:mt-[50px]">
              <div className="flex justify-center w-full laptop:w-[237px] text-start mb-[20px] laptop:mb-0">
                <Image
                  src={clock}
                  className="w-[20px] h-[20px] laptop:w-[25px] laptop:h-[25px]"
                  alt=""
                />

                <p className="ml-[10px] text-white text-[12px] laptop:text-[18px]">
                  {t("offerSection.item_1")}
                </p>
              </div>

              <div className="flex justify-center w-full laptop:w-[200px] text-start">
                <Image
                  src={clock}
                  className="w-[20px] h-[20px] laptop:w-[25px] laptop:h-[25px]"
                  alt=""
                />
                <p className="ml-[10px] text-white text-[12px] laptop:text-[18px]">
                  {t("offerSection.item_2")}
                </p>
              </div>
            </div>

            <p className="text-white text-[14px] leading-[21px] laptop:text-[18px] laptop:leading-[27px] tablet:w-[500px] mx-auto mt-[35px]">
              {t("offerSection.text")}
            </p>
            <div className="flex">
              <Link
                href="/sign_up"
                className={`${classForButton({
                  color: "specialOrange",
                })} hover:bg-[#F2DFCB] duration-custom mx-auto px-[25px] h-[47px]  laptop:h-[62px] mt-[30px]  leading-[22.4px] `}
              >
                {t("offerSection.sign_up")}
                <Image
                  src={register}
                  className="w-[16px] h-[16px] ml-[8px] laptop:w-[20px] laptop:h-[20px] laptop:ml-[10px]"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-[400px] xm:top-[300px] tablet:top-[300px] laptop:top-[450px] desktop:top-[400px] drop-shadow-[-27px_54px_61px_rgba(71, 50, 36, 0.13)]">
          <ResponsiveImage
            imgName="MacBook"
            className="w-[210px] h-[185px] laptop:w-[482px] laptop:h-[425px] "
          />
        </div>
      </div>
    </div>
  );
};

"use client";

import styles from "./SemicircleSection.module.css";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import { ArrowIcon } from "../../Icons/ArrowIcon";
import { Trans, useTranslation } from "react-i18next";
import useHover from "@/hooks/useHover";
import Link from "next/link";
import { classForButton } from "@/utils/classForButton";

import clock from "@/public/images/clock.webp";
import Image from "next/image";

export const SemicircleSection = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { t } = useTranslation();
  return (
    <div className="container relative border-border border-x">
      <div className=" container relative w-[1400px] h-[500px] laptop:h-[700px] overflow-hidden ">
        <div className={`${styles.halfCircle} absolute inset-0 `}>
          <div className={`${styles.bgPattern} `}></div>
        </div>
        <div className="w-full text-center relative mt-[60px] laptop:mt-[214px] px-5">
          <h1 className="text-[22px] leading-[24.2px] laptop:text-[48px] text-textMain laptop:leading-[52.8px] font-spectral-medium uppercase ">
            <Trans
              i18nKey={"semicircleSection.title"}
              components={{ br: <br /> }}
            />
          </h1>
          <p className="text-[14px] leading-[21px]  laptop:text-[24px] text-textMain laptop:leading-[33.6px] mt-[5px]  uppercase">
            <Trans
              i18nKey={"semicircleSection.subtitle"}
              components={{ br: <br /> }}
            />
          </p>
          <div className="flex">
            <Link
              href="/join"
              className={`  ${classForButton({
                color: "orange",
              })} hover:text-accent hover:bg-white px-[25px] h-[47px] mx-auto   laptop:h-[62px] mt-[30px] text-4 leading-[22.4px] duration-custom relative z-10`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="mr-[10px]">{t("semicircleSection.join")}</span>
              <ArrowIcon hovered={isHovered} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container absolute top-[310px]   left-0  desktopLarge:left-[100px] laptop:top-[412px]">
        <div className="w-[85px] laptop:w-[150px] relative">
          <ResponsiveImage imgName="meal" />
          <div className="flex items-center bg-blue px-[10px] py-[5px] absolute top-5 left-[55px]  laptop:left-[110px] w-[143px] laptop:w-[190px] ">
            <Image
              src={clock}
              alt=""
              className="w-[13px] h-[13px] laptop:w-[15px] laptoph-[15px]"
            />

            <p className="ml-[7px] laptop:ml-[10px] text-[10px] leading-[14px] laptop:text-[14px] laptop:leading-[20px] uppercase text-white font-monrope-semiBold">
              {t("semicircleSection.tag_1")}
            </p>
          </div>
        </div>
      </div>

      <div className="container absolute top-[395px]  laptop:top-[126px] flex justify-end items-end">
        <div className="w-[85px] laptop:w-[150px] relative">
          <ResponsiveImage imgName="sport-exercise" />
          <div className="flex items-center bg-blue backdrop-blur-[10px] px-[10px] py-[5px] absolute bottom-5 right-[55px]  desktopLarge:left-[110px] w-[130px] laptop:w-[160px] ">
            <Image
              src={clock}
              alt=""
              className="w-[13px] h-[13px] laptop:w-[15px] laptoph-[15px]"
            />
            <p className="ml-[7px] laptop:ml-[10px] text-[10px] leading-[14px] laptop:text-[14px] laptop:leading-[20px] uppercase text-white font-monrope-semiBold">
              {t("semicircleSection.tag_2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

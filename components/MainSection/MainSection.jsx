"use client";
import styles from "./MainSection.module.css";
import { ArrowIcon } from "../../Icons/ArrowIcon";
import { useTranslation } from "react-i18next";
import { classForButton, classForTextOnImage } from "@/utils/classForButton";
import useHover from "@/hooks/useHover";
import { LinksSocialNetwork } from "../LinksSocialNetwork/LinksSocialNetwork";
import tag from "@/public/images/tag.webp";
import Image from "next/image";
import Link from "next/link";
import fire from "@/public/images/fire2.webp";

export const MainSection = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { t } = useTranslation();

  const tags = [
    {
      left: "left-[45%] laptop:left-[64%]",
      top: "top-[4.5%] laptop:top-[30.43%]",
      text: t("mainSection.tags.tag_1"),
      imgFirst: true,
    },
    {
      left: "left-[25.39%] laptop:left-[31.39%]",
      top: "top-[34.30%] laptop:top-[41.30%]",
      text: t("mainSection.tags.tag_2"),
      imgFirst: true,
    },
    {
      left: "left-[38.09%] laptop:left-[15.09%]",
      top: "top-[62.50%]",
      text: t("mainSection.tags.tag_3"),
      imgFirst: false,
    },
    {
      left: "left-[48.57%] laptop:left-[61.57%]",
      top: "top-[85.37%] laptop:top-[73.37%]",
      text: t("mainSection.tags.tag_4"),
      imgFirst: true,
    },
  ];

  return (
    <>
      <div className="relative xs:h-[890px] xm:h-[990px] tabletLarge:h-[1450px] pdt:h-[1492px] laptop:h-auto bg-yellowBg">
        <div className="relative w-full laptop:h-[920px]">
          <div className="absolute inset-0 laptop:flex">
            <div className={`${styles["left-part"]}`}></div>
            <div className={`block w-full laptop:h-full laptop:flex-1 ${styles["right-part"]} relative`}>
              {tags.map(({ left, top, text, imgFirst }, index) => (
                <div key={index} className={`flex absolute ${left} ${top}`}>
                  {imgFirst && (
                    <Image
                      src={tag}
                      className="w-6 h-6 laptop:w-[30px] laptop:h-[30px]"
                      alt="tag"
                    />
                  )}
                  <p
                    className={`${classForTextOnImage({ color: "white" })} rounded-[3px] text-[10px] desktop:text-[14px] leading-[14px] px-[10px] ${
                      imgFirst ? "ml-[5px]" : "mr-[5px]"
                    }`}
                  >
                    <span className="text-[10px] laptop:text-[14px]">{text}</span>
                  </p>
                  {!imgFirst && (
                    <Image
                      src={tag}
                      className="w-6 h-6 laptop:w-[30px] laptop:h-[30px]"
                      alt="tag"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="bg-yellowBg">
              <div className="container laptop:hidden">
                <LinksSocialNetwork />
              </div>
            </div>
          </div>

          <div className="relative container flex flex-col laptop:grid laptop:grid-cols-12 laptop:gap-5">
            <div className="col-span-7 col-start-1 col-end-8 xs:mt-[100px] tabletLarge:mt-[150px] laptop:mt-[330px]">
              <div>
                <h1 className="font-spectral-medium text-textMain text-[25px] leading-[27.5px] tablet:text-[48px] laptop:text-[60px] laptop:leading-[66px] uppercase inline">
                  {t("mainSection.title")}
                </h1>
                <span className="font-testimonia block text-[40px] leading-[26px] mobileMedium:leading-[40px] ml-[5px] tablet:inline tablet:text-[64px] laptop:text-[87px] laptop:leading-[56.55px] text-accent laptop:ml-[15px]">
                  Victoria Liub
                </span>
                <p className="text-accentSecondary text-[14px] tablet:text-[18px] mt-[10px]">
                  {t("mainSection.subtitle")}
                </p>
                <div className="flex">
                  <Link
                    href="/"
                    className={`col-start-1 col-end-3 rounded-[5px] ${classForButton({
                      color: "orange",
                    })} hover:text-accent w-full hover:bg-white tablet:text-[16px] laptop:w-auto px-[30px] h-[62px] mt-[30px] text-[16px] leading-[22.4px] duration-custom`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="mr-[10px]">{t("mainSection.join")}</span>
                    <ArrowIcon hovered={isHovered} />
                  </Link>
                </div>

                <Link
                  href="/"
                  className={`${classForButton({
                    color: "specialOrange",
                  })} w-full tablet:text-[20px] laptop:w-[124px] h-[62px] mt-[10px] text-4 leading-[22.4px] laptop:hidden`}
                >
                  <Image
                    src={fire}
                    className="w-[18px] h-[18px] ml-[10px] mr-2"
                    alt="fire"
                  />
                  {t("mainSection.offer")}
                </Link>
              </div>

              <div className="xs:hidden laptop:grid col-start-1 col-end-5 h-[35%] gap-5 desktopMedium:h-[85%] desktop:mr-[145px]">
                <div className="col-start-1 col-end-7 self-end">
                  <LinksSocialNetwork />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

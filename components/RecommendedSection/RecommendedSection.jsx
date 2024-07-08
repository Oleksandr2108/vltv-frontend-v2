"use client";

import styles from "./RecommendedSection.module.css";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

import { Trans, useTranslation } from "react-i18next";
import { StarImg } from "@/Icons/Star";
import useHover from "@/hooks/useHover";
import { LogoIcon } from "@/Icons/LogoIcon";
import Link from "next/link";
import { PinkArrowIcon } from "@/Icons/PinkArrowIcon";
import appleOrange from "@/public/images/appleOrange.webp";
import Image from "next/image";

const listItems = [
  {
    text: "Keto diet",
    fill: "#D6A07E",
  },
  {
    text: "Interval fasting",
    fill: "#E8D3D7",
  },

  {
    text: "Vegan menu",
    fill: "#E8D3D7",
  },
  {
    text: "FODMAP diet",
    fill: "#CCDBDE",
  },
  {
    text: "Anti Age",
    fill: "#CCDBDE",
  },
  {
    text: "Express drying",
    fill: "#D6A07E",
  },
  {
    text: "LCHF",
    fill: "#D6A07E",
  },
];

export const RecommendedSection = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const { t } = useTranslation();
  return (
    <div>
      <div className="container grid grid-cols-12 border-border  border-x">
        <div className=" col-span-12 laptop:col-span-7 grid grid-cols-7 pt-[60px] laptop:pt-[140px]">
          <h2 className="col-span-7 font-spectral-medium text-textMain text-[22px] leading-[24.2px] laptop:text-[48px] laptop:leading-[52.8px] uppercase mb-[30px] laptop:mb-10">
            {/* Make proper nutrition <br className="hidden laptop:block" /> a part{' '}
            <br className="block mobileMedium:hidden" />
            of your life */}
            {t("recommendedSection.title")}
          </h2>
        </div>
        <div className="col-span-3 border-l border-border"></div>
        <div className="col-span-2 border-l border-border"></div>
      </div>
      <div className="border-b border-border w-full"></div>
      <div className="container grid grid-cols-12 border-border border-x ">
        <div className="col-span-12 laptop:col-span-3 ">
          <div className="py-[31px] px-5  laptop:p-[30px]">
            <h3 className="uppercase text-textMain  text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] mb-5">
              {t("recommendedSection.subtitle_1")}
            </h3>

            <ul>
              <li className=" flex mb-5">
                <div className=" mt-[3px] flex ">
                  <StarImg fill="#D6A07E" />
                </div>

                <span className="ml-[10px] text-textSubTitle  text-[14px] leading-[21px]  laptop:text-[18px] laptop:leanding-[27px] ">
                  {t("recommendedSection.text_1")}
                </span>
              </li>
              <li className="flex">
                <div className=" mt-[3px] flex ">
                  <StarImg fill="#CCDBDE" />
                </div>
                <span className="ml-[10px] text-textSubTitle  text-[14px] leading-[21px]  laptop:text-[18px] laptop:leanding-[27px] ">
                  {t("recommendedSection.text_2")}
                </span>
              </li>
            </ul>
          </div>
          <div className="relative mt-[8px]">
            <ResponsiveImage
              imgName={"recipe"}
              className=" w-full  laptop:w-[355px]"
            />
            <div className="absolute flex top-[37px] mobileMedium:top-[60px] tabletLarge:top-[40%] laptop:top-[60px]">
              <div className=" mt-[30px] ml-5 mobileMedium:ml-[100px] tabletLarge:ml-[263px] laptop:ml-[63px]">
                <ResponsiveImage
                  imgName={"bigTag"}
                  className="tabletLarge:scale-[1.90] laptop:scale-[1] "
                />
              </div>
              <div className="uppercase grid gap-5 text-white text-[12px] leading-[16.8px] tabletLarge:ml-[120px] tabletLarge:text-[18px] laptop:text-[14px] laptop:leading-[19.6px] ml-[15px] laptop:ml-5">
                <p>{t("recommendedSection.kcal.title")}</p>
                <p>{t("recommendedSection.kcal.tag_1")}</p>
                <p>{t("recommendedSection.kcal.tag_2")}</p>
                <p>{t("recommendedSection.kcal.tag_3")} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 laptop:col-span-4 py-[30px] border-border laptop:border-x ">
          <h3 className="uppercase text-textMain  text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] mb-5 ml-5 laptop:ml-[30px]">
            {t("recommendedSection.subtitle_2")}
          </h3>
          <div className="relative">
            <ResponsiveImage imgName="graph" />
            <div className="absolute top-[50px] left-[14px] mobileMedium:top-[65px] tabletLarge:top-[160px] tabletLarge:left-[100px]  laptop:top-[86px] laptop:left-[43px] bg-blueBg rounded-[3px] py-[5px] px-[10px] ">
              <p className="text-greyLight uppercase text-[10px] tabletLarge:text-[14px]">
                <Trans
                  i18nKey="recommendedSection.time.tag_1"
                  components={{ span: <span /> }}
                />
              </p>
            </div>
            <div className="absolute top-[10px] left-[140px] mobileMedium:top-[15px] mobileMedium:left-[170px] tabletLarge:top-[60px] tabletLarge:left-[380px] laptop:top-[26px] laptop:left-[232px] bg-pinkBg rounded-[3px] py-[5px] px-[10px] ">
              <p className="text-greyLight uppercase text-[10px] tabletLarge:text-[14px]">
                <Trans
                  i18nKey="recommendedSection.time.tag_2"
                  components={{ span: <span /> }}
                />
              </p>
            </div>
            <div className="absolute top-[75px] left-[190px] mobileMedium:top-[95px] mobileMedium:left-[230px] tabletLarge:top-[220px] tabletLarge:left-[500px] laptop:top-[131px] laptop:left-[313px] bg-accentBg rounded-[3px] py-[5px] px-[10px] ">
              <p className="text-greyLight uppercase text-[10px] tabletLarge:text-[14px]">
                <Trans
                  i18nKey="recommendedSection.time.tag_3"
                  components={{ span: <span /> }}
                />
              </p>
            </div>
          </div>
          <div className="px-5 laptop:px-[30px] mt-[42px]">
            <ul>
              <li className="flex mb-5">
                <div className="mt-[3px]">
                  <StarImg fill="#CCDBDE" />
                </div>

                <span className="ml-[10px] text-greyLight  text-[14px] leading-[21px]  laptop:text-[18px] laptop:leanding-[27px] ">
                  <Trans
                    i18nKey="recommendedSection.text_3"
                    components={{ span: <span /> }}
                  />
                </span>
              </li>
              <li className="flex items-center">
                <div>
                  <StarImg fill="#E8D3D7" />
                </div>
                <span className="ml-[10px] text-greyLight  text-[14px] leading-[21px]  laptop:text-[18px] laptop:leanding-[27px] ">
                  <Trans
                    i18nKey="recommendedSection.text_4"
                    components={{ span: <span /> }}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-12 laptop:col-span-5 ">
          <div className="relative">
            <ResponsiveImage imgName="aboutFood" />
            <div className="absolute p-[10px] top-0">
              <div className="flex items-center py-[5px] px-[10px] bg-grayBg rounded-[3px]">
                <Image
                  src={appleOrange}
                  className="mr-[10px]"
                  alt=""
                />

                <p className="text-accent uppercase text-[10px] tabletLarge:text-[14px]">
                  {t("recommendedSection.from_Victoria")}
                </p>
              </div>
            </div>
          </div>
          <div className="py-[30px] px-5 laptop:p-[30px] ">
            <h3 className="uppercase text-textMain  text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] mb-5 ">
              {t("recommendedSection.subtitle_3")}
            </h3>
            <div className="flex">
              <div className="mt-[3px]">
                <StarImg fill="#CCDBDE" />
              </div>
              <span className="ml-[10px]  text-greyLight  text-[14px] leading-[21px]  laptop:text-[18px] laptop:leanding-[27px]">
                <Trans
                  i18nKey="recommendedSection.text_5"
                  components={{ span: <span />, br: <br /> }}
                />
              </span>
            </div>
          </div>
          <h3 className="text-end  laptop:text-start font-testimonia text-[64px] leading-[41.6px]  laptop:text-[87px] text-pink laptop:leading-[56.55px] mr-[20px] mt-[24px] ml-[30px] laptop:mr-0">
            Food
          </h3>
        </div>
      </div>
      <div className="border-b border-border w-full"></div>
      <div className="container grid grid-cols-12 border-border border-x">
        <div className="col-span-12 laptop:col-span-3 bg-blue py-[30px] px-[20px] laptop:p-[30px]">
          <div className="mb-[100px] laptop:mb-[138px]">
            <LogoIcon
              width="43.18"
              height="40"
              fill="#FFFFFF"
            />
          </div>

          <p className="uppercase text-white text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px]">
            {t("recommendedSection.text")}
          </p>
        </div>

        <div
          className="
        col-span-12 
        laptop:col-span-7 
        relative 
        py-[30px]
        border-border
        laptop:border-x
        flex
        overflow-hidden
        h-[624px] xm:h-[400px] laptop:h-auto
        "
        >
          <div>
            <h3 className="uppercase text-textMain text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] mb-[30px] ml-5 laptop:ml-[30px]">
              <Trans
                i18nKey="recommendedSection.subtitle_4"
                components={{ br: <br /> }}
              />
            </h3>
            <div>
              <ul className="flex flex-col laptop:flex-row flex-wrap w-[562px]">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex mb-[15px] laptop:mb-5  odd:w-[180px] even:w-[250px] ml-[20px] laptop:ml-[30px] items-center"
                  >
                    <div className="mr-[10px]">
                      <StarImg fill={item.fill} />
                    </div>
                    <span className="text-[14px] text-textSubTitle laptop:text-[18px] ">
                      {t(`recommendedSection.list.item_${index + 1}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/all_programs"
              className=" flex z-10 relative laptop:hidden text-accent text-[12px] leading-[16.8px] ml-[20px] mb-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {t("recommendedSection.all_programs")}
              <ResponsiveImage
                imgName="pinkArrow"
                className="ml-[10px] w-[11px] h-[11px]"
              />
            </Link>
          </div>

          <div className="ml-auto z-10 relative ">
            <Link
              href="/all_programs"
              className="hidden  laptop:flex  text-accent text-[16px] leading-[22.4px] mr-[30px] hover:text-greyLight duration-custom"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {t("recommendedSection.all_programs")}
              <div className="ml-[10px] w-[11px] h-[11px] ">
                <PinkArrowIcon hovered={isHovered} />
              </div>
            </Link>
          </div>
          <div className={`${styles.dishes}`}>
            <ResponsiveImage
              imgName="dishes"
              className={`${styles.dishes}`}
            />
          </div>
        </div>

        <div className={`col-span-2 ${styles.back}`}></div>
      </div>
      <div className="border-b border-border w-full"></div>
    </div>
  );
};

"use client";

import { useTranslation } from "react-i18next";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import styles from "./ForWhomSection.module.css";
import Image from "next/image";

const styleForPar =
  "text-textSubTitle mt-[15px] mb-[30px] laptop:mb-0 text-[14px] laptop:text-[18px] laptop:mt-[30px] laptop:w-[335px]";
const styleForIcon =
  "mr-[15px] w-[26px] h-[26px] laptop:w-[35px] laptop:h-[35px]";

const styleForTitle =
  "uppercase text-[14px] laptop:text-[20px] text-textMain ml-[15px]";

export const ForWhomSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container pt-[60px] laptop:pt-[140px] pb-[40px] border-border border-x">
        <h2 className="font-spectral-medium text-[22px] leading-[24.2px] laptop:text-[48px] text-textMain laptop:leading-[52.8px]  uppercase">
          {t("forWhomSection.title")}
        </h2>
      </div>

      <div className="border-b border-border w-full"></div>

      <div className="container grid grid-cols-12  border-border border-x laptop:border-x-0">
        <div className="col-span-12 laptop:col-span-3 order-1 laptop:order-1">
          <div className="flex items-center mt-[30px] pl-5 tablet:pl-0">
            <Image
              priority
              src="/images/lockIcon.webp"
              height={36}
              width={36}
              alt=""
            />

            <p className={`${styleForTitle}`}>
              {t("forWhomSection.subtitle_1")}
            </p>
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6  laptop:col-span-4 border-border laptop:border-x order-3 laptop:order-2">
          <div className="flex xm:justify-end">
            <ResponsiveImage
              imgName="routine"
              className={`${styles.imgRoutine} object-cover  w-full h-[200px] mobileMedium:h-[250px] xm:w-[236px] xm:h-[236px] `}
            />
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6  laptop:col-span-5 flex pl-5 tablet:pl-0 justify-end order-2 laptop:order-3">
          <p className={`${styleForPar}`}>{t("forWhomSection.text_1")}</p>
        </div>
      </div>

      <div className="border-b border-border w-full"></div>

      <div className="container grid grid-cols-12 border-border   border-x laptop:border-x-0">
        <div className="col-span-12 laptop:col-span-3 order-1 laptop:order-1">
          <div className="flex items-center mt-[30px] pl-5 tablet:pl-0">
            <Image
              priority
              src="/images/searchIcon.webp"
              height={36}
              width={36}
              alt=""
            />

            <p className={`${styleForTitle}`}>
              {t("forWhomSection.subtitle_2")}
            </p>
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6 border-border  laptop:col-span-4 laptop:border-x order-3 laptop:order-2">
          <div className="flex xm:justify-end  laptop:justify-start">
            <ResponsiveImage
              imgName="beachWorkout"
              className={`${styles.imgBeachWorkout} object-cover  w-full h-[200px] mobileMedium:h-[250px] xm:w-[236px] xm:h-[236px]`}
            />
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6 laptop:col-span-5 pl-5 tablet:pl-0 flex justify-end order-2 laptop:order-3">
          <p className={`${styleForPar}`}>{t("forWhomSection.text_2")}</p>
        </div>
      </div>

      <div className="border-b border-border w-full"></div>

      <div className="container grid grid-cols-12 pb-[60px] border-border laptop:pb-0  border-x laptop:border-x-0">
        <div className="col-span-12 laptop:col-span-3 order-1 laptop:order-1">
          <div className="flex items-center mt-[30px] pl-5 tablet:pl-0">
            <Image
              priority
              src="/images/beautyIcon.webp"
              height={36}
              width={36}
              alt=""
            />

            <p className={`${styleForTitle}`}>
              {t("forWhomSection.subtitle_3")}
            </p>
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6 border-border laptop:col-span-4 laptop:border-x order-3 laptop:order-2 ">
          <div className="flex justify-end">
            <ResponsiveImage
              imgName="model"
              // className="object-cover object-top w-full h-[200px] xm:w-[236px] xm:h-[236px]"
              className={`${styles.imgModel} object-cover  w-full h-[200px] mobileMedium:h-[250px] xm:w-[236px] xm:h-[236px]`}
            />
          </div>
        </div>
        <div className="col-span-12 xm:col-span-6  laptop:col-span-5 flex pl-5 tablet:pl-0 justify-end order-2 laptop:order-3">
          <p className={`${styleForPar}`}>{t("forWhomSection.text_3")}</p>
        </div>
      </div>

      <div className="border-b border-border w-full"></div>

      <div className="container grid grid-cols-12">
        <div className="col-span-12 laptop:col-span-3  "></div>

        <div className="col-span-12 laptop:col-span-4 border-border laptop:pt-[140px] laptop:border-x"></div>
        <div className="col-span-12 laptop:col-span-5 flex "></div>
      </div>
    </div>
  );
};

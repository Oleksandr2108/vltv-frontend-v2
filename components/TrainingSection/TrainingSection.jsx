"use client";

import { useState } from "react";
import styles from "./TrainingSection.module.css";

import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modal/Modal";

export const TrainingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`${styles.section} flex items-end justify-center w-full h-[670px] laptop:h-[920px] relative`}
    >
      <div className="container absolute top-[20px] laptop:top-[100px]">
        <div className="xs:w-[85px] laptop:w-[150px] relative">
          <ResponsiveImage imgName="sport-attachments" />
          <div className="xs:hidden laptop:flex items-center bg-whiteBtn backdrop-blur-[10px] px-[10px] py-[5px] absolute top-5 left-[110px] w-[163px] ">
            <ResponsiveImage imgName="clock" className="w-[15px] h-[15px]"/>
            <p className="ml-[10px] text-[14px] leading-[20px] uppercase text-white font-monrope-semiBold">
              {t("trainingSection.tag_1")}
            </p>
          </div>
          <p className="text-white xs:text-[14px] xs:leading-[21px] laptop:text-[20px] laptop:leading-[28px] mt-[15px] uppercase">
            {t("trainingSection.miniTitle_1")}
          </p>
        </div>
      </div>

      <div className="container absolute top-[115px]  laptop:top-[250px] desctopLarge flex justify-end items-end">
        <div className=" xs:w-[85px] laptop:w-[150px] laptop:mr-[60px] relative ">
          <ResponsiveImage imgName="food-attachments" />
          <div className="xs:hidden laptop:flex items-center bg-whiteBtn backdrop-blur-[10px] pl-[10px] pr-[25px] py-[5px] absolute top-5 left-[100px]  ">
          <ResponsiveImage imgName="apple" className="w-[15px] h-[15px]"/>
           
            <p className="ml-[10px] text-[14px] leading-[20px] uppercase text-white font-monrope-semiBold">
              {t("trainingSection.tag_2")}
            </p>
          </div>
          <p className="text-white xs:text-[14px] xs:leading-[21px] laptop:text-[20px] laptop:leading-[28px] mt-[15px] uppercase">
            {t("trainingSection.miniTitle_2")}
          </p>
        </div>
      </div>

      <div className="relative w-[1400px] h-[434px] laptop:h-[610px] overflow-hidden ">
        <div className={`${styles.semicircle} absolute inset-0 `}>
          <div className="container  text-center relative w-[636px]">
            <div className="mt-[86px]  laptop:mt-[172px] text-white">
              <h2 className="font-spectral-medium text-[22px] leading-[24.2px] laptop:text-[48px]  laptop:leading-[52.8px] uppercase">
                {t("trainingSection.title")}
              </h2>
              <h3 className="text-[14px] leading-[21px] laptop:text-[24px] laptop:leading-[33.6px] mt-1  uppercase">
                {t("trainingSection.subtitle")}
              </h3>
              <p className="text-[14px] tabletLarge:w-[636px] mx-auto text-center leading-[21px] mt-[15px] laptop:text-[18px] laptop:leading-[27px] laptop:mt-5">
                {t("trainingSection.text")}
              </p>
              <div className="mt-[30px] flex  items-center  justify-center hover:text-accent duration-custom">
                <div
                  onClick={openModal}
                  className={`${styles.playBtn} w-[130px] h-[130px] laptop:w-[167px] laptop:h-[172px]`}
                ></div>
                <p
                  onClick={openModal}
                  className="text-[12px] leading-[16.8px] laptop:text-[16px] ml-[-30px] w-[186px] text-left laptop:leading-[22.4px] cursor-pointer "
                >
                  {t("trainingSection.linkText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

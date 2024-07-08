"use client";

import Link from "next/link";
import { LogoIcon } from "../../Icons/LogoIcon";
import { LinksSocialNetwork } from "../LinksSocialNetwork/LinksSocialNetwork";
import { Trans, useTranslation } from "react-i18next";
import starIcon from "@/public/images/starIcon.webp";
import mastercard from "@/public/images/mastercard.webp";
import visa from "@/public/images/visa.webp";
import Image from "next/image";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-yellowBg  overflow-hidden">
      <div className="container grid grid-cols-12">
        <div className="flex justify-center py-[40px] laptop:py-0 laptop:block col-span-12 laptop:col-span-3 laptop:pt-[70px]">
          <div className="hidden laptop:block">
            <LogoIcon
              fill="#616161"
              fillLater="#D6A07E"
              width="54"
              height="50"
            />
          </div>

          <div className="block laptop:hidden">
            <LogoIcon
              fill="#616161"
              fillLater="#D6A07E"
              width="38"
              height="35"
            />
          </div>
          <div className="hidden laptop:block ">
            <div className=" flex gap-6 mt-[100px] items-center">
              <Image
                src={visa}
                alt=""
                className="w-[55.6px] h-[18px]"
              />
              <Image
                src={mastercard}
                alt=""
              />
            </div>
            <div className="hidden laptop:block  mt-5 text-[16px] text-greyLight ">
              <Link
                href=""
                className="block mb-[10px] hover:text-textMain duration-custom"
              >
                {t("footer.privacy_policy")}
              </Link>
              <Link
                href=""
                className="block mb-[10px] hover:text-textMain duration-custom"
              >
                {t("footer.conditions_of_use")}
              </Link>
              <p>© Victoria Liub 2024</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 tabletLarge:col-span-5 laptop:col-span-5 pb-[40px] laptop:pb-0 laptop:pt-[70px]">
          <div className="flex text-[14px] laptop:text-[18px]">
            <div className="text-textMain w-[152px] flex flex-col ">
              <p
                className={
                  "text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] uppercase mb-5"
                }
              >
                {t("burgerMenu.title_1")}
              </p>

              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.clothes")}
              </Link>
              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.sports_equipment")}
              </Link>
              <Link
                href=""
                className={"hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.accessories")}
              </Link>
            </div>
            <div className="text-textMain w-[101px] flex flex-col tabletLarge:ml-[10px] laptop:ml-[80px]">
              <p
                className={
                  "text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px]  uppercase mb-5"
                }
              >
                {t("burgerMenu.title_2")}
              </p>

              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.training")}
              </Link>
              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.certificates")}
              </Link>
              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.blog")}
              </Link>
              <Link
                href=""
                className={"mb-[15px] hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.faq")}
              </Link>
              <Link
                href=""
                className={"hover:text-greyLight duration-custom"}
              >
                {t("burgerMenu.links.contact")}
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-12 border-b border-t  border-x-0 laptop:border-t-0  tabletLarge:col-span-7 laptop:col-span-4 laptop:border-x laptop:pt-[70px]">
          <div className="px-0 laptop:px-[30px]">
            <div className="flex items-center justify-center laptop:justify-start pt-[30px] laptop:pt-0">
              <h3 className="text-accent  text-[14px] leading-[21px] laptop:text-[20px] laptop:leading-[28px] uppercase ">
                {t("footer.title")}
              </h3>
              <Image
                src={starIcon}
                alt=""
                className="ml-[6px] w-[18px] h-[18px] laptop:w-[22px] laptop:h-[22px]"
              />
            </div>
            <p className="text-textSubTitle text-[14px] text-center laptop:text-start laptop:text-[18px] mt-[5px]">
              <Trans
                i18nKey={"footer.subtitle"}
                components={{ br: <br /> }}
              />
            </p>
            <div className="mx-auto laptop:mx-0 tabletLarge:w-[320px] mt-5 ">
              <LinksSocialNetwork isTwoColumn />
            </div>
          </div>

          <p className="font-testimonia text-[64px] leading-[41.6px] laptop:text-[128px] laptop:leading-[83.2px] mt-[30px] text-blue text-right laptop:mt-[100px]">
            social
          </p>
        </div>

        <div className="block laptop:hidden col-span-12 py-[40px] ">
          <div className=" flex gap-6  justify-center items-center">
            <Image
              src={visa}
              alt=""
               className="w-[55.6px] h-[18px]"
            />
            <Image
              src={mastercard}
              alt=""
            />
          </div>
          <div className=" flex-col text-center tabletLarge:flex mt-5 text-[16px] text-greyLight tabletLarge:justify-between  ">
            <p className="mb-[10px]">{t("footer.privacy_policy")}</p>
            <p className="mb-[10px]">{t("footer.conditions_of_use")}</p>
            <p>© Victoria Liub 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

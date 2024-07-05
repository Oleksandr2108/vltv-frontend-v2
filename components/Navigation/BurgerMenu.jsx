"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LinksSocialNetwork } from "../LinksSocialNetwork/LinksSocialNetwork";

const styleForSubnav = "text-textSubTitle text-[18px] leading-[21px] ";

export const BurgerMenu = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="absolute p-[15px] pb-[0px] h-[100%] w-screen bg-yellowBg z-10">
        <div className="container flex flex-col gap-[15px] h-full">
          <p
            className="text-[16px] text-textMain leading-[24px] uppercase mb-[5px] mt-[85px]"
            onClick={closeMenu}
          >
            {t("burgerMenu.title_1")}
          </p>

          <Link
            href="/clothes"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.clothes")}
          </Link>
          <Link
            href="/sports_equipment"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.sports_equipment")}
          </Link>
          <Link
            href="/accessories"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.accessories")}
          </Link>

          <p
            className="text-textMain text-[16px] leading-[24px] uppercase mt-10 mb-[5px]"
            onClick={closeMenu}
          >
            {t("burgerMenu.title_2")}
          </p>

          <Link
            href="/training"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.training")}
          </Link>
          <Link
            href="/certificates"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.certificates")}
          </Link>
          <Link
            href="/blog"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.blog")}
          </Link>
          <Link
            href="/faq"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.faq")}
          </Link>
          <Link
            href="/contact"
            className={styleForSubnav}
            onClick={closeMenu}
          >
            {t("burgerMenu.links.contact")}
          </Link>

          <div className="mt-auto">
            <LinksSocialNetwork />
          </div>
        </div>
      </div>
    </nav>
  );
};



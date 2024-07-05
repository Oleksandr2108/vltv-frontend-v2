"use client";
import { LogoIcon } from "@/Icons/LogoIcon";
import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import LanguageChanger from "../LanguageChanger";
import { useEffect, useState } from "react";
import Image from "next/image";
import { classForButton } from "@/utils/classForButton";
import { useTranslation } from "react-i18next";
import user from "@/public/images/user.webp";
import user2 from "@/public/images/user2.webp";
import fire from "@/public/images/fire.webp";
import menu from "@/public/images/menu.webp";
import close from "@/public/images/close.png";
import { BurgerMenu } from "../Navigation/BurgerMenu";

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 970);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full">
          <BurgerMenu closeMenu={closeMenu} />
        </div>
      )}
      <div className="container mx-auto relative">
        <header className="absolute top-0 left-0 w-full flex laptop:grid laptop:grid-cols-12 h-[40px] laptop:h-[52px] items-center mt-5 z-10 justify-between">
          {/* Burger menu */}
          <div
            className={`${classForButton({
              color: "white",
            })} laptop:hidden w-[90px] h-full relative`}
          >
            <button
              onClick={toggleMenu}
              className="flex items-center"
            >
              {!isMenuOpen ? (
                <Image
                  src={menu}
                  alt="menu"
                  className="w-[15px] h-[15px]"
                />
              ) : (
                <Image
                  src={close}
                  alt="close"
                  className="w-[15px] h-[15px]"
                />
              )}
              <span className="uppercase text-textMain text-[12px] font-monrope-semiBold ml-[10px]">
                {t("header.menu")}
              </span>
            </button>
          </div>

          <Link
            href="/"
            className="block w-[44px] h-[40px]"
          >
            <LogoIcon />
          </Link>
          <div className="hidden flex-col laptop:flex-row laptop:flex col-start-3 col-end-13 justify-between laptop:col-start-2 laptop:col-end-6">
            <Navigation />
          </div>
          <div className="flex gap-[10px] col-start-9 col-end-13 h-full justify-end">
            <Link
              href="/sign_in"
              className={`relative w-10 h-10 mr-[0px] ${classForButton({
                color: "white",
              })} h-full laptop:w-[125px] transition-all ease-in-out duration-300 group`}
            >
              {isMobile ? (
                <Image
                  src={user2}
                  className="w-[18px] h-[18px] laptop:mr-[10px] xs:mr-[0px]"
                  alt=""
                />
              ) : (
                <Image
                  src={user}
                  className="w-[18px] h-[18px] laptop:mr-[10px] xs:mr-[0px]"
                  alt=""
                />
              )}

              <span className="xs:hidden laptop:flex">
                {t("header.sign_in")}
              </span>

              <span className="absolute inset-0 border-2 border-white opacity-0 transition-opacity duration-castom rounded-[3px] group-hover:opacity-100"></span>
            </Link>

            
              <LanguageChanger />
            
            <Link
              href="/offer"
              className={`laptop:${classForButton({
                color: "orange",
              })} laptop:px-[25px] laptop:flex hidden  hover:bg-textMain duration-custom`}
            >
              <Image
                src={fire}
                className="w-[18px] h-[18px] mr-[10px]"
                alt=""
              />

              {t("header.offer")}
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

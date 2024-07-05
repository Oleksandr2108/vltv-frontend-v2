"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Image from "next/image";
import { classForButton } from "@/utils/classForButton";
import arrowLang from '@/public/images/arrow-language.webp'

const languages = [
  { label: "EN", value: "en" },
  { label: "UA", value: "ua" },
  { label: "ES", value: "es" },
  { label: "RU", value: "ru" },
];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    let newPath;
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      newPath = `/${newLocale}${currentPathname}`;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    router.push(newPath);
    router.refresh();
  };

  const selectLanguage =
    languages.find((lang) => lang.value === currentLocale)?.label || "EN";

  return (
    <div className="relative">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className={`w-10 h-10 ${classForButton({
          color: 'white',
        })} laptop:w-[91px] h-full`}
      >
        <span className="text-accent laptop:text-white">{selectLanguage}</span>

        <Image
          src={arrowLang}
          className="laptop:ml-[10px] laptop:flex xs:hidden"
          alt="Language arrow"
          
        />
      </button>

      <div
        className={`absolute text-center top-full right-0 w-full mt-1 bg-accent laptop:bg-langBg backdrop-blur-[10px] shadow-lg rounded-md z-20 transition-all duration-custom transform ${
          isLanguageOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {languages.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => {
              handleChange(value);
              setIsLanguageOpen(false);
            }}
            className="block w-full text-center px-[4px] py-2 text-sm text-white rounded-md hover:bg-accent duration-custom"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

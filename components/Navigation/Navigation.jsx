"use client";
import { BasketIcon } from "../../Icons/BasketIcon";

import Link from "next/link";
import useHover from "@/hooks/useHover";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t } = useTranslation();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <nav>
      <div className="flex justify-between gap-6 text-base text-textMain uppercase">
        <Link
          href="/shop"
          className="flex items-center hover:text-greyLight transition duration-custom"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BasketIcon hovered={isHovered} />
          <span className="ml-[10px]">{t('header.shop')}</span>
        </Link>
        <Link
          href="/training"
          className="hover:text-greyLight transition duration-custom"
        >
          {t("header.training")}
        </Link>
        <Link
          href="/recipes"
          className="hover:text-greyLight transition duration-custom"
        >
          {t("header.recipes")}
        </Link>
        <Link
          href="/blog"
          className="hover:text-greyLight transition duration-custom"
        >
          {t("header.blog")}
        </Link>
      </div>
    </nav>
  );
};

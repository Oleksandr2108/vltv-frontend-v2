"use client";

import { useTranslation } from "react-i18next";

export default function Test() {
  const { t } = useTranslation()
  return <h3>{t('header.shop')}</h3>;
}

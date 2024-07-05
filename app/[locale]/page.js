

import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import Test from "@/components/Test";
import LanguageChanger from "@/components/LanguageChanger";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <main>
        <h1>{t("title")}</h1>
        <Test />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}

import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import { MainSection } from "@/components/MainSection/MainSection";

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
        <MainSection />
      </main>
    </TranslationsProvider>
  );
}

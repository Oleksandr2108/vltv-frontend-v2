
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import { MainSection } from "@/components/MainSection/MainSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { TrainingSection } from "@/components/TrainingSection/TrainingSection";
import { RecommendedSection } from "@/components/RecommendedSection/RecommendedSection";
import { SemicircleSection } from "@/components/SemicircleSection/SemicircleSection";
import { ForWhomSection } from "@/components/ForWhomSection/ForWhomSection";
import { OfferSection } from "@/components/OfferSection/OfferSection";


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
        <AboutSection />
        <TitleSection />
        <TrainingSection />
        <RecommendedSection />
        <SemicircleSection />
        <ForWhomSection />
        <OfferSection />
      </main>
    </TranslationsProvider>
  );
}

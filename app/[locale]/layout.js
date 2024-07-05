// app/[locale]/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

async function fetchMetaTags(locale, pageId) {
  const response = await fetch(
    `https://vl-tv.com/backend/pages/${pageId}/?lang=${locale}`,
    {
      credentials: "include",
    }
  );
  const data = await response.json();
  return data[0];
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const pageId = "8717597a-47e1-4e54-8fdf-1f888713362b";

  // Fetch meta tags from your API
  const metaTags = await fetchMetaTags(locale, pageId);

  return {
    title: metaTags?.seo_title || metaTags?.title,
    description: metaTags?.seo_description,
    robots: {
      index: !metaTags?.noindex,
      follow: !metaTags?.nofollow,
    },
    openGraph: {
      type: "article",
      locale: locale === "en" ? "en_US" : locale === "ru" ? "ru_RU" : "uk_UA",
      url: metaTags?.url,
      siteName: "VL TV by Victoria Liub",
      title: metaTags?.og_title || metaTags?.seo_title || metaTags?.title,
      description: metaTags?.og_description,
      images: [
        {
          url: metaTags?.og_image || "default-image.jpg",
          type: "image/jpeg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTags?.og_title || metaTags?.seo_title || metaTags?.title,
      description: metaTags?.og_description,
      images: [metaTags?.og_image || "default-image.jpg"],
    },
  };
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

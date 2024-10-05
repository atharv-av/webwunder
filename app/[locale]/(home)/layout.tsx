// This part is server-side and will ensure proper SSR for SEO
import LayoutTemplate from "@/components/layout/home2-template";
import Head from 'next/head';
import React from 'react'

export default function RootLayout({
  children,
  lang = "en", // Default to English (SSR default)
}: {
  children: React.ReactNode,
  lang?: "en" | "de", // Restrict lang to "en" or "de"
}) {
  const seoData = {
    en: {
      title: "WebWunder - Websites That Deliver More Sales & Lower Costs",
      description: "Boost sales & cut costs with managed websites. Book a call today!",
      keywords: "WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design",
      ogDescription: "Turn your website into a revenue driver with WebWunder’s expert, subscription-based design.",
    },
    de: {
      title: "WebWunder - Websites, die mehr Umsatz und geringere Kosten liefern",
      description: "Steigern Sie den Umsatz und senken Sie die Kosten mit den verwalteten Websites von WebWunder. Buchen Sie noch heute ein Gespräch!",
      keywords: "WebWunder, Abo-Website, Webdesign, Umsatzsteigerung, Kostensenkung, Website-Management, SEO, Design-Dienstleistungen, erschwingliches Webdesign, Unternehmenswebdesign",
      ogDescription: "Verwandeln Sie Ihre Website mit dem abonnementbasierten Design von WebWunder in einen Umsatztreiber.",
    }
  };

  const { title, description, keywords, ogDescription } = seoData[lang];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content="/webwunder-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "en" ? "en_US" : "de_DE"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content="/webwunder-icon.png" />
      </Head>
      <LayoutTemplate>
        {children}
      </LayoutTemplate>
    </>
  );
}

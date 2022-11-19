/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Jaifran's Blog",
  titleTemplate: "%s | Jaifran's Blog",
  defaultTitle: "jaifran.xyz",
  description:
    "Helping developers solve commun issues. Main topics: React, NextJs, CSS, JavaScript, Three.js",
  canonical: "https://jaifran.xyz",
  openGraph: {
    url: "https://jaifran.xyz",
    title: "Jaifran's Blog",
    description:
      "Helping developers solve commun issues. Main topics: React, NextJs, CSS, JavaScript, Three.js",
    images: [
      {
        url: "./public/blog_flyer_high.png",
        alt: "jaifran.xyz flyer-image",
      },
    ],
    site_name: "jaifran.xyz",
  },
  twitter: {
    handle: "@jandez97",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

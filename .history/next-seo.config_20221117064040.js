/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Jaifran's Blog",
  titleTemplate: "%s | Jaifran's Blog",
  defaultTitle: "jaifran.xyz",
  description: "HTML + CSS + JavaScript + TypeScript + Personal blog + NextJS + FrontEnd + ReactJS + Backend + NextJS + Jaifran Hernández + Articles + Artículos + Programación + Programming + Web Development + Tutorials + Tutoriales + Rust + Blockchain",
  canonical: "https://jaifran.xyz",
  openGraph: {
    url: "https://jaifran.xyz",
    title: "Jaifran's Blog",
    description: "HTML + CSS + JavaScript + TypeScript + Personal blog + NextJS + FrontEnd + ReactJS + Backend + NextJS + Jaifran Hernández + Articles + Artículos + Programación + Programming + Web Development + Tutorials + Tutoriales + Rust + Blockchain",
    images: [
      {
        url: "https://ksmvkqchpodxpwtmihso.supabase.co/storage/v1/object/public/personal-blog-files/jaifran_flyer.png?t=2022-11-17T10%3A33%3A11.716Z",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "jaifran.xyz",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

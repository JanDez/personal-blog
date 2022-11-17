/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Jaifran's Blog",
  titleTemplate: "%s | Jaifran's Blog",
  defaultTitle: "jaifran.xyz",
  description: "Personal blog + NextJS + FrontEnd + ",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "nextarter-chakra",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://ksmvkqchpodxpwtmihso.supabase.co/storage/v1/object/public/personal-blog-files/jaifran_flyer.png?t=2022-11-17T10%3A33%3A11.716Z",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-chakra",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

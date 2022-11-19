const APP_NAME = "https://jaifran.xyz";

const Meta = () => {
  return (
    <>
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={APP_NAME} />
      <meta property="og:image" content="../../../public/blog_flyer_high.png" />

      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;

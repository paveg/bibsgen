import { Helmet } from 'react-helmet';

const APP_NAME = 'Bibs Generator';

const Meta = () => {
  return (
    <Helmet>
      <title>Bibs Generator</title>
      <meta name="description" content="Bibs Generator" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.ico" />
    </Helmet>
  );
};

export default Meta;

import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { ServerStyleSheet } from "styled-components";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

class MyApp extends App {
  static async getInitialProps(appContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = appContext.renderPage;

    try {
      appContext.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await App.getInitialProps(appContext);

      return {
        ...initialProps,
        styles: sheet.getStyleElement(),
      };
    } finally {
      sheet.seal();
    }
  }

  // componentDidMount() {
  //   ReactGA.initialize("G-ZR5HLNX24R");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  //   Router.events.on("routeChangeComplete", (url) => ReactGA.pageview(url));
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <style jsx global>{`
            body {
              margin: 0 !important;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              box-sizing: border-box;
            }
          `}</style>
        </Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZR5HLNX24R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZR5HLNX24R');
        `}
        </Script>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

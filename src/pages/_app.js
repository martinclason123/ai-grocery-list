import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { ServerStyleSheet } from "styled-components";
import Head from "next/head";
import GlobalStyles from "@/styles/GlobalStyles";

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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

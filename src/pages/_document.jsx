import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={"#b3e3cc"} />
          <meta charset="utf-8" />
          <link
            rel="icon"
            type="image/png"
            href="https://recippy.rufat.tech/favicon-dark.svg"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta name="name" content="Recipe app" />
          <meta
            name="description"
            content="Recipe app to look for your next awesome dinner."
          />
          <meta
            name="image"
            content="https://recippy.rufat.tech/website-thumbnail.JPG"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://recippy.rufat.tech" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Recipe app | look up your next delicious dinner."
          />
          <meta
            property="og:description"
            content="Recipe app to look for your next awesome dinner."
          />
          <meta
            property="og:image"
            content="https://recippy.rufat.tech/website-thumbnail.JPG"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Learning management system" />
          <meta
            name="twitter:description"
            content="Recipe app to look up your next awesome dinner."
          />
          <meta
            name="twitter:image"
            content="https://recippy.rufat.tech/website-thumbnail.JPG"
          />
          {/* <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> --> */}
          {/* <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link
            rel="manifest"
            href="https://recippy.rufat.tech/manifest.json"
          />
          {/* <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
          --> */}
          <title>Recippy | Recipe app</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

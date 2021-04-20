import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

const GA_TRACKING_ID = 'G-2WGB4HZKGV'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script
          dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
            `
          }}

          />
        </Head>
        <body>
          <Main />
          <div id="modal"/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

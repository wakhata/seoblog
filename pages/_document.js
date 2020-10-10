import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
      window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-180257433-1');
        `,
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:300,400,500|Fira+Sans:300,400,500,600|Archivo+Narrow:400,500,600&display=swap" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Mono|Roboto+Slab:300,400,700|Roboto+Condensed:300,400,700&display=swap" />
          <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossOrigin="anonymous"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-180257433-1"
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

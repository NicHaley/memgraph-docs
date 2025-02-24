import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <script
              src="https://widget.kapa.ai/kapa-widget.bundle.js"
              data-website-id="b077599c-4584-4631-bbe1-aaafe35f8e68"
              data-project-name="Memgraph"
              data-project-color="#8C0081"
              data-project-logo="https://avatars.githubusercontent.com/u/17707542?s=200&v=4"
              data-search-mode-enabled="true"
              data-modal-override-open-class="nextra-search"
            ></script>
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

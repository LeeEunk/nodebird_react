// pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      // 기본 getInitialProps 호출
      const initialProps = await Document.getInitialProps(ctx);

      // html 속성 포함하여 반환
      return {
        ...initialProps,
        html: initialProps.html || '',
        head: initialProps.head || [],
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error('Error in getInitialProps:', error);
      return {
        html: '', // 에러 발생 시 빈 HTML 반환
        head: [],
        styles: [],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

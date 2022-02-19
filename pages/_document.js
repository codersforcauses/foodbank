import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='description'
            content='A web application aiming to educate young children about healthy eating habits and food groups.'
          />
          <meta name='theme-color' content='#671E75' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

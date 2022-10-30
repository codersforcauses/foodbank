import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
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
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='icons/apple-touch-icon.png'></link>
      </Head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VHXVXQRJEE"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VHXVXQRJEE');
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

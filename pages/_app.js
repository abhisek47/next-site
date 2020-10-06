import { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../node_modules/sal.js/dist/sal.css';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Head from 'next/head';
import sal from 'sal.js';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta httpEquiv='Content-Type' content='text/html' />
        <meta name='author' content='Uday Prakash Choudhary' />
        <meta
          name='keywords'
          content='Private Limited Company, Trademark, GST, Income Tax, Payroll, Annual Compliances, ISO Registration in Kolkata'
        />
        <meta
          name='description'
          content='We have over 8+ years of corporate and consulting experience with top firms. Our network includes experienced Chartered Accountants, Company Secretaries, Lawyers and many more.'
        />
        <meta
          name='p:domain_verify'
          content='fa608db2ee7936f92d553f1d58bc16e4'
        />
        <meta name='format-detection' content='telephone=no' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

import Head from 'next/head';
import myImg from '../assets/bts.png';
import BannerComponent from '../components/BannerComponent';
import StatsComponent from '../components/StatsComponent';
import PopularComponent from '../components/PopularComponent';
import QuotesComponent from '../components/QuotesComponent';
import SupportComponent from '../components/SupportComponent';
import HeaderComponent from '../components/HeaderComponent';
import FaqComponent from '../components/FaqComponent';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ClientFilingIndia | Business Consultants in Kolkata</title>
      </Head>
      <HeaderComponent />
      <BannerComponent
        head='We are helping startup to grow their business'
        para='We have over 8+ years of corporate and consulting experience with top firms. Our network includes experienced Chartered Accountants, Company Secretaries, Lawyers, Cost Accountants and many more.'
        btn='Get Started'
        img={myImg}
      />
      <StatsComponent />
      <PopularComponent />
      <QuotesComponent />
      <SupportComponent />
      <FaqComponent />
    </React.Fragment>
  );
};

export default Home;

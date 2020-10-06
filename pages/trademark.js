import model from '../assets/model_6.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TrademarkComponent from '../components/TrademarkComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required Timing - 10 days',
    'CA Assisted Trademark Filing for all your Trademark needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Trademark Registration'
        btn='Register now'
        img={model}
        id='trademark'
        tagline='Get your Trademark registered @₹ 6,490/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark' />
        <TrademarkComponent />
      </div>
    </>
  );
};

export default ItrThreePage;

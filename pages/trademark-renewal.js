import model from '../assets/model_7.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TmrenewalComponent from '../components/TmrenewalComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required Timing - 10 days',
    'CA Assisted Trademark Renewal Filing for all your renewal needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Trademark Renewal'
        btn='Register now'
        img={model}
        id='trademark-renewal'
        tagline='Get your Trademark Renewed @₹ 2,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark Renewal' />
        <TmrenewalComponent />
      </div>
    </>
  );
};

export default ItrThreePage;

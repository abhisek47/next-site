import model from '../assets/model_7.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TmrenewalComponent from '../components/TmrenewalComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required Timing - 10 days',
    'CA Assisted Trademark Renewal Filing for all your renewal needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Trademark Renewal'
        btn='Register now'
        img={model}
        id='trademark-renewal'
        tagline='Get your trademark renewed at Rs 2,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark Renewal' />
        <TmrenewalComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrThreePage;

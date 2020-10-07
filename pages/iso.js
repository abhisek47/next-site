import model from '../assets/model_21.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import IsoComponent from '../components/IsoComponent';
import HeaderComponent from '../components/HeaderComponent';

const IsoPage = () => {
  const services = [
    'Filing of Application for ISO Registration',
    'Required Timing - 9 days',
    'Completely Online – No need to visit office',
    'CA Assisted ISO Filing for all your ISO needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ISO Registration'
        btn='Register now'
        img={model}
        tagline='Get your ISO registered @₹ 6,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='International Organization for Standardization' />
        <IsoComponent />
      </div>
    </React.Fragment>
  );
};

export default IsoPage;

import model from '../assets/model_5.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrThreePage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 3'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-3 filing @₹ 2,900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 3' />
        <ItrThreeComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrThreePage;

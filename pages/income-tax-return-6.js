import model from '../assets/model_10.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSixComponent from '../components/ItrSixComponent';
import HeaderComponent from '../components/HeaderComponent';

const ItrSixPage = () => {
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
        head='Income Tax Return - 6'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-6 filing at Rs 5,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 6' />
        <ItrSixComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrSixPage;

import model from '../assets/model_8.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFourComponent from '../components/ItrFourComponent';
import HeaderComponent from '../components/HeaderComponent';

const ItrFourPage = () => {
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
        head='Income Tax Return - 4'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-4 filing at Rs 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 4' />
        <ItrFourComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrFourPage;

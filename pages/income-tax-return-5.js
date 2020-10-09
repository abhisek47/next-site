import model from '../assets/model_9.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFiveComponent from '../components/ItrFiveComponent';
import HeaderComponent from '../components/HeaderComponent';

const ItrFivePage = () => {
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
        head='Income Tax Return - 5'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-5 filing at Rs 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 5' />
        <ItrFiveComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrFivePage;

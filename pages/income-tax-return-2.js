import model from '../assets/model_4.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrTwoPage = () => {
  const services = [
    'Income tax return filing for persons having DIN or owing private limited company shares.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 2'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-2 filing at Rs 2,900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 2' />
        <ItrTwoComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrTwoPage;

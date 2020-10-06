import model from '../assets/model_3.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrOneComponent from '../components/ItrOneComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrOnePage = () => {
  const services = [
    'Income tax return filing for an individual with salary income of less than Rs.5 lakhs.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Income Tax Return - 1'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-1 filing @₹ 2900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 1' />
        <ItrOneComponent />
      </div>
    </>
  );
};

export default ItrOnePage;

import model from '../assets/model_16.jpg';
import ServiceBannerComponent from '../components/ServiceBanner';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PrivateComponent from '../components/PrivateComponent';

const PrivatePage = () => {
  const services = [
    'Required Timing - 5 days',
    'Completely Online – No need to visit office',
    'CA Assisted Company Filing for all your Company needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Private Limited Company'
        btn='Register now'
        img={model}
        id='private-company'
        tagline='Get your company registered @ 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Private Limited Company' />
        <PrivateComponent />
      </div>
    </>
  );
};

export default PrivatePage;

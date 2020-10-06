import model from '../assets/model_15.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpComponent from '../components/LlpComponent';

const LlpPage = () => {
  const services = [
    'Required Timing - 5 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Filing for all your LLP needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Limited Liability Partnership'
        btn='Register now'
        img={model}
        id='llp'
        tagline='Get your LLP registered  @₹ 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Limited Liability Partnership' />
        <LlpComponent />
      </div>
    </>
  );
};

export default LlpPage;

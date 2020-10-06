import model from '../assets/model_19.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpCompliancesComponent from '../components/LlpCompliancesComponent';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Compliances for all your LLP needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Compliances For Limited Liability Partnership'
        btn='Register now'
        img={model}
        tagline='Get your Annual LLP registered  @₹ 18,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Limited Liability Partnership' />
        <LlpCompliancesComponent />
      </div>
    </>
  );
};

export default PrivateCompliancesPage;

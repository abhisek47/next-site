import model from '../assets/model_18.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import PrivateCompliancesComponent from '../components/PrivateCompliancesComponent';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted Company Compliances for all your company needs',
  ];
  return (
    <>
      <ServiceBannerComponent
        head='Compliances For Private Company'
        btn='Register now'
        img={model}
        tagline='Get your Annual Compliances registered under Private Company @₹ 20,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Private Company' />
        <PrivateCompliancesComponent />
      </div>
    </>
  );
};

export default PrivateCompliancesPage;

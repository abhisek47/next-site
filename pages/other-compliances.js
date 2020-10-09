import model from '../assets/model_30.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import OtherCompliancesComponent from '../components/OtherCompliancesComponent';
import HeaderComponent from '../components/HeaderComponent';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted Partnership Compliances for all your partnership firm needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances For Partnership Firm, Society, Trust, NGO'
        btn='Register now'
        img={model}
        tagline='Get your annual compliances registered under partnership firm at Rs 23,600/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Partnership Firm, Society, Trust, NGO' />
        <OtherCompliancesComponent />
      </div>
    </React.Fragment>
  );
};

export default PrivateCompliancesPage;

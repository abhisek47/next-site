import model from '../assets/model_13.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiComponent from '../components/EsiComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const EsiPage = () => {
  const services = [
    'Filing of Application for ESI Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ESI filing for all your ESI needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI Registration'
        btn='Register now'
        img={model}
        id='esi'
        tagline='Get your ESI filing at Rs 6,779/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees State Insurance' />
        <EsiComponent />
      </div>
    </React.Fragment>
  );
};

export default EsiPage;

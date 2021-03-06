import model from '../assets/model_14.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiReturnComponent from '../components/EsiReturnComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const EsiReturnPage = () => {
  const services = [
    'Filing of Application for ESI Return Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ESI Return filing for all your ESI needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI Return Filing'
        btn='Register now'
        img={model}
        tagline='Get your ESI return filing at Rs 6,779/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees State Insurance Return' />
        <EsiReturnComponent />
      </div>
    </React.Fragment>
  );
};

export default EsiReturnPage;

import model from '../assets/model_11.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSevenComponent from '../components/ItrSevenComponent';
import HeaderComponent from '../components/HeaderComponent';

const ItrSevenPage = () => {
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
        head='Income Tax Return - 7'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-7 filing @₹ 5,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 7' />
        <ItrSevenComponent />
      </div>
    </React.Fragment>
  );
};

export default ItrSevenPage;

import model from '../assets/model_1.jpg';
import GstComponent from '../components/GstComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';

const GstPage = () => {
  const services = [
    'Secure GST Identification Number',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted GST Filing for all your GST needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST Registration Online'
        btn='Register now'
        img={model}
        id='gst'
        tagline='Get your company registered under GST @₹ 1,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST Registration' />
        <GstComponent />
      </div>
    </React.Fragment>
  );
};

export default GstPage;

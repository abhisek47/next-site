import model from '../assets/model_2.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import GstreturnComponent from '../components/GstreturnComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const GstreturnPage = () => {
  const services = [
    'Required Timing - 2 days',
    '3 months GST return filing',
    'Completely Online – No need to visit office',
    'CA Assisted GST Return Filing for all your GST return needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST Return Filing'
        btn='Register now'
        img={model}
        id='gst-return'
        tagline='Get your GST return filing at Rs 2,899/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST Return' />
        <GstreturnComponent />
      </div>
    </React.Fragment>
  );
};

export default GstreturnPage;

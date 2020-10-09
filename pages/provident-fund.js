import React from 'react';
import model from '../assets/model_12.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import PfComponent from '../components/PfComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const PfPage = () => {
  const services = [
    'Filing of Application for Provident Fund Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'Cloud backup for 10 years',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Provident Fund Registration'
        btn='Register now'
        img={model}
        tagline='Get your provident fund filing at Rs 8,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Provident Fund' />
        <PfComponent />
      </div>
    </React.Fragment>
  );
};

export default PfPage;

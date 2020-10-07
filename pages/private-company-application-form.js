import React, { Component } from 'react';
import CompanyComponent from '../application-form/privateCompany/CompanyComponent';
import DirectorComponent from '../application-form/privateCompany/DirectorComponent';
import BusinessComponent from '../application-form/privateCompany/BusinessComponent';

class PrivateUserForm extends Component {
  state = {
    step: 1,
    companyName: '',
    companyAddress: '',
    city: '',
    state: '',
    directorName: '',
    directorAddress: '',
    directorNumber: '',
    directorEmail: '',
    businessActivities: '',
    authCaptial: '',
    subsCapital: '',
  };

  //   procced to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //   go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onTypeChange = (value) => {
    console.log(value);
    this.setState({
      businessType: value,
    });
  };

  onStateChange = (value) => {
    console.log(value);
    this.setState({
      state: value,
    });
  };

  normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      addressProf: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const {
      step,
      companyName,
      companyAddress,
      city,
      state,
      directorName,
      directorAddress,
      directorNumber,
      directorEmail,
      businessActivities,
      authCaptial,
      subsCapital,
    } = this.state;
    const values = {
      companyName,
      companyAddress,
      city,
      state,
      directorName,
      directorAddress,
      directorNumber,
      directorEmail,
      businessActivities,
      authCaptial,
      subsCapital,
    };

    switch (step) {
      case 1:
        return (
          <CompanyComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onTypeChange={this.onTypeChange}
            onStateChange={this.onStateChange}
            values={values}
            title='Private Limited Company Application Form'
            para='Fill in the below form to apply for Company registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 2:
        return (
          <DirectorComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onUploadChange={this.normFile}
            values={values}
            title='Private Limited Company Application Form'
            para='Fill in the below form to apply for Company registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 3:
        return (
          <BusinessComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            title='Private Limited Company Application Form'
            para='Fill in the below form to apply for Company registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
    }
  }
}

export default PrivateUserForm;

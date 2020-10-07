import React, { Component } from 'react';
import CompanyComponent from '../application-form/llp/CompanyComponent';
import PartnerComponent from '../application-form/llp/PartnerComponent';
import BusinessComponent from '../application-form/llp/BusinessComponent';

class LlpUserForm extends Component {
  state = {
    step: 1,
    prefNameOne: '',
    prefNameTwo: '',
    prefNameThree: '',
    companyAddress: '',
    city: '',
    state: '',
    partnerName: '',
    partnerAdd: '',
    partnerNum: '',
    partnerPan: '',
    businessActivities: '',
    value: '',
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

  onActivityChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      businessActivities: e.target.value,
    });
  };

  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
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
      prefNameOne,
      prefNameTwo,
      prefNameThree,
      companyAddress,
      city,
      state,
      partnerName,
      partnerAdd,
      partnerNum,
      partnerPan,
      businessActivities,
      value,
    } = this.state;
    const values = {
      prefNameOne,
      prefNameTwo,
      prefNameThree,
      companyAddress,
      city,
      state,
      partnerName,
      partnerAdd,
      partnerNum,
      partnerPan,
      businessActivities,
      value,
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
            title='Limited Liability (LLP) Application Form'
            para='Fill in the below form to apply for LLP registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 2:
        return (
          <PartnerComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onUploadChange={this.normFile}
            values={values}
            title='Limited Liability (LLP) Application Form'
            para='Fill in the below form to apply for LLP registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 3:
        return (
          <BusinessComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onActivityChange={this.onActivityChange}
            onRadioChange={this.onRadioChange}
            values={values}
            title='Limited Liability (LLP) Application Form'
            para='Fill in the below form to apply for LLP registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
    }
  }
}

export default LlpUserForm;

import React, { Component } from 'react';
import BusinessComponent from '../application-form/gst/BusinessComponent';
import OwnerComponent from '../application-form/gst/OwnerComponent';
import PaymentComponent from '../application-form/gst/PaymentComponent';
import ConfirmComponent from '../application-form/gst/ConfirmComponent';

class GstReturnUserForm extends Component {
  state = {
    step: 1,
    businessName: '',
    businessAddress: '',
    businessType: '',
    businessEmail: '',
    city: '',
    state: '',
    ownerName: '',
    ownerNumber: '',
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
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
    } = this.state;
    const values = {
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
    };

    switch (step) {
      case 1:
        return (
          <BusinessComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onTypeChange={this.onTypeChange}
            onStateChange={this.onStateChange}
            values={values}
            title='GST Return Application Form'
            para='Fill in the below form to apply for GST return filing. It will
            take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 2:
        return (
          <OwnerComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onUploadChange={this.normFile}
            values={values}
            title='GST Return Application Form'
          />
        );
      case 3:
        return (
          <PaymentComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <ConfirmComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        return (
          <OwnerComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default GstReturnUserForm;

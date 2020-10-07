import React, { Component } from 'react';
import BusinessComponent from '../application-form/itr/BusinessComponent';

class ItrUserForm extends Component {
  state = {
    step: 1,
    name: '',
    address: '',
    city: '',
    state: '',
    itrForm: '',
  };

  //  procced to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //  go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //  handle field change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
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
      itrForm: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const { step, name, address, city, state, itrForm } = this.state;
    const values = {
      name,
      address,
      city,
      state,
      itrForm,
    };

    switch (step) {
      case 1:
        return (
          <BusinessComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onStateChange={this.onStateChange}
            onUploadChange={this.normFile}
            values={values}
            title='ITR Application Form'
            para='Fill in the below form to apply for ITR filing online. It will
            take less than 5 mins.'
          />
        );
    }
  }
}

export default ItrUserForm;

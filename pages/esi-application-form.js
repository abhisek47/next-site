import React, { Component } from 'react';
import UnitComponent from '../application-form/esi/UnitComponent';
import EmployeeComponent from '../application-form/esi/EmployeeComponent';

class EsiUserForm extends Component {
  state = {
    step: 1,
    name: '',
    address: '',
    city: '',
    state: '',
    regCertificate: '',
    companyCertificate: '',
    article: '',
    noOfEmployee: '',
    employeeList: '',
    pan: '',
    cancelCheck: '',
    directorList: '',
    shareholderList: '',
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

  regCertificate = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      regCertificate: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  companyCertificate = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      companyCertificate: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  article = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      article: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  employeeList = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      employeeList: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  pan = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      pan: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  cancelCheck = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      cancelCheck: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  directorList = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      directorList: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  shareholderList = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      shareholderList: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const {
      step,
      entityType,
      factoryName,
      factoryAdd,
      city,
      state,
      workType,
      regCertificate,
      companyCertificate,
      article,
      employeeList,
      pan,
      cancelCheck,
      directorList,
      shareholderList,
    } = this.state;
    const values = {
      entityType,
      factoryName,
      factoryAdd,
      city,
      state,
      workType,
      regCertificate,
      companyCertificate,
      article,
      employeeList,
      pan,
      cancelCheck,
      directorList,
      shareholderList,
    };

    switch (step) {
      case 1:
        return (
          <UnitComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onTypeChange={this.onTypeChange}
            onStateChange={this.onStateChange}
            onRegCertificate={this.regCertificate}
            onCompanyCertificate={this.companyCertificate}
            onArticle={this.article}
            onCancelCheck={this.cancelCheck}
            onDirectorList={this.directorList}
            onShareholderList={this.shareholderList}
            values={values}
            title='ESI Application Form'
            para='Fill in the below form to apply for ESI registration online. It will take less than 5 mins.'
          />
        );
      case 2:
        return (
          <EmployeeComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onEmoloyeeList={this.employeeList}
            onPan={this.pan}
            values={values}
            title='ESI Application Form'
            para='Fill in the below form to apply for ESI registration online. It will take less than 5 mins.'
          />
        );
    }
  }
}

export default EsiUserForm;

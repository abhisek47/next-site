import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Select } from 'antd';
import HeaderComponent from '../components/HeaderComponent'
import db from '../firebase';
import firebase from 'firebase';

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

  onFinish = (values) => {
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
    db.collection('private-company').add({
      companyName: companyName,
      companyAddress: companyAddress,
      city: city,
      state: state,
      directorName: directorName,
      directorAddress: directorAddress,
      directorNumber: directorNumber,
      directorEmail: directorEmail,
      subsCapital: subsCapital,
      authCaptial: authCaptial,
      businessActivities: businessActivities,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    window.location.href = 'https://rzp.io/l/private-company-filing';
    console.log('Received values of form: ', values);
    window.scrollTo(0, 0);
  };

  render() {
    const {
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
    const { Option } = Select;
    const { Title, Paragraph } = Typography;
    return (
      <>
       <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>Private Company Application Form</Title>
          <Paragraph strong>Fill in the below form to apply for Trademark registration online. It will take less than 5 mins. Your details are secured by SSL.</Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Company Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company name */}
                  <Form.Item
                    name='companyName'
                    label='Company Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your company name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout company name'
                      onChange={this.handleChange('companyName')}
                      value={companyName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company address */}
                  <Form.Item
                    name='companyAddress'
                    label='Company Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your company address!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout company address'
                      onChange={this.handleChange('companyAddress')}
                      value={companyAddress}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company city */}
                  <Form.Item
                    name='city'
                    label='City'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your city!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your city'
                      onChange={this.handleChange('city')}
                      value={city}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business state */}
                  <Form.Item
                    name='state'
                    label='State'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your state!',
                      },
                    ]}>
                    <Select
                      placeholder='Enter yout state'
                      allowClear
                      size='large'
                      style={{ fontSize: 'inherit' }}
                      onChange={this.onStateChange}>
                      <Option value='Andaman and Nicobar Islands'>
                        Andaman and Nicobar Islands
                      </Option>
                      <Option value='Andhra Pradesh'>Andhra Pradesh</Option>
                      <Option value='Arunachal Pradesh'>
                        Arunachal Pradesh
                      </Option>
                      <Option value='Assam'>Assam</Option>
                      <Option value='Bihar'>Bihar</Option>
                      <Option value='Chandigarh'>Chandigarh</Option>
                      <Option value='Chhattisgarh'>Chhattisgarh</Option>
                      <Option value='Dadra and Nagar Haveli and Daman and Diu'>
                        Dadra and Nagar Haveli and Daman and Diu
                      </Option>
                      <Option value='Delhi'>Delhi</Option>
                      <Option value='Goa'>Goa</Option>
                      <Option value='Gujarat'>Gujarat</Option>
                      <Option value='Haryana'>Haryana</Option>
                      <Option value='Himachal Pradesh'>Himachal Pradesh</Option>
                      <Option value='Jammu and Kashmir union territory'>
                        Jammu and Kashmir union territory
                      </Option>
                      <Option value='Jharkhand'>Jharkhand</Option>
                      <Option value='Karnataka'>Karnataka</Option>
                      <Option value='Kerala'>Kerala</Option>
                      <Option value='Ladakh'>Ladakh</Option>
                      <Option value='Lakshadweep'>Lakshadweep</Option>
                      <Option value='Madhya Pradesh'>Madhya Pradesh</Option>
                      <Option value='Maharashtra'>Maharashtra</Option>
                      <Option value='Manipur'>Manipur</Option>
                      <Option value='Meghalaya'>Meghalaya</Option>
                      <Option value='Mizoram'>Mizoram</Option>
                      <Option value='Nagaland'>Nagaland</Option>
                      <Option value='Odisha'>Odisha</Option>
                      <Option value='Puducherry'>Puducherry</Option>
                      <Option value='Punjab'>Punjab</Option>
                      <Option value='Rajasthan'>Rajasthan</Option>
                      <Option value='Sikkim'>Sikkim</Option>
                      <Option value='Tamil Nadu'>Tamil Nadu</Option>
                      <Option value='Telangana'>Telangana</Option>
                      <Option value='Tripura'>Tripura</Option>
                      <Option value='Uttar Pradesh'>Uttar Pradesh</Option>
                      <Option value='Uttarakhand'>Uttarakhand</Option>
                      <Option value='West Bengal'>West Bengal</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Director Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director name */}
                  <Form.Item
                    name='directorName'
                    label='Director Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout  name'
                      onChange={this.handleChange('directorName')}
                      value={directorName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director address */}
                  <Form.Item
                    name='directorAddress'
                    label='Director Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your address!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your address'
                      onChange={this.handleChange('directorAddress')}
                      value={directorAddress}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director number */}
                  <Form.Item
                    name='directorNumber'
                    label='Director Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  number!',
                      },
                      {
                        pattern: /^[2-9]{2}\d{8}$/,
                        message: 'Please input 10 digit number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your number'
                      onChange={this.handleChange('directorNumber')}
                      value={directorNumber}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director email */}
                  <Form.Item
                    name='directorEmail'
                    label='Director Email'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='email'
                      placeholder='Enter your email'
                      onChange={this.handleChange('directorEmail')}
                      value={directorEmail}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Business Activities</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* auth captial */}
                  <Form.Item
                    name='authCaptial'
                    label='Authorised Capital (Rs.)'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your authorised capital !',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your authorised capital'
                      onChange={this.handleChange('authCaptial')}
                      value={authCaptial}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* subs capital */}
                  <Form.Item
                    name='subsCapital'
                    label='Subscribed Capital (Rs.)'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your subscribed capital !',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your subscribed capital'
                      onChange={this.handleChange('subsCapital')}
                      value={subsCapital}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business activities */}
                  <Form.Item
                    name='businessActivities'
                    label='Business Activities'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business activities!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business activities'
                      onChange={this.handleChange('businessActivities')}
                      value={businessActivities}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
              </Row>
              {/* submit button */}
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  size='large'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    )
  }
}

export default PrivateUserForm;



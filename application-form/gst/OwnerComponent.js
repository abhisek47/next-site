import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Space } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';

class OwnerComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    window.scrollTo(0, 0);
  };

  render() {
    const { values, handleChange, title } = this.props;
    const { Title } = Typography;
    return (
      <>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>{title}</Title>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Owner Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner name */}
                  <Form.Item
                    name='ownerName'
                    label='Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business name'
                      onChange={handleChange('ownerName')}
                      value={values.ownerName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner number */}
                  <Form.Item
                    name='ownerNumber'
                    label='Mobile Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your mobile number!',
                      },
                      {
                        pattern: /^[2-9]{2}\d{8}$/,
                        message: 'Please input 10 digit number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your phone number'
                      onChange={handleChange('ownerNumber')}
                      value={values.ownerNumber}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner adhaar */}
                  <Form.Item
                    name='ownerAdhaar'
                    label='Adhaar Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your adhaar card number!',
                      },
                      {
                        pattern: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                        message: 'Please input a valid Adhaar number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your adhaar card number'
                      onChange={handleChange('ownerAdhaar')}
                      value={values.ownerAdhaar}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner pan */}
                  <Form.Item
                    name='ownerPan'
                    label='PAN Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your PAN number!',
                      },
                      {
                        pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                        message: 'Please input a valid PAN number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business PAN card number'
                      onChange={handleChange('ownerPan')}
                      value={values.ownerPan}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* submit button */}
              <Form.Item>
                <Space direction='horizontal'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    size='large'
                    onClick={this.back}>
                    Previous
                  </Button>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    size='large'>
                    Next
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default OwnerComponent;

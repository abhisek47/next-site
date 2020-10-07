import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Space } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';

class DirectorComponent extends Component {
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
    const { values, handleChange, title, para } = this.props;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>{title}</Title>
          <Paragraph strong>{para}</Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
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
                      onChange={handleChange('directorName')}
                      value={values.directorName}
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
                      onChange={handleChange('directorAddress')}
                      value={values.directorAddress}
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
                      onChange={handleChange('directorNumber')}
                      value={values.directorNumber}
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
                      onChange={handleChange('directorEmail')}
                      value={values.directorEmail}
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

export default DirectorComponent;

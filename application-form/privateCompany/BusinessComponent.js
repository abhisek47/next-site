import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Space } from 'antd';

class BusinessComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/private-company-filing';
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
                      onChange={handleChange('authCaptial')}
                      value={values.authCaptial}
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
                      onChange={handleChange('subsCapital')}
                      value={values.subsCapital}
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
                      onChange={handleChange('businessActivities')}
                      value={values.businessActivities}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
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

export default BusinessComponent;

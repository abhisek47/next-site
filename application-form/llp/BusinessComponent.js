import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Space, Radio } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';

class BusinessComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/llp-filing';
    window.scrollTo(0, 0);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    window.scrollTo(0, 0);
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { values, onActivityChange, onRadioChange, title, para } = this.props;
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
              <Title level={4}>Business Activities</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  {/* business activities */}
                  <Form.Item
                    name='businessActivities'
                    label='What would be the main business under this LLP ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select your business activities!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={1}>
                            Accommodations
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Consulting
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Manufacturing
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={4}>
                            Trading
                          </Radio>
                          <Radio style={radioStyle} value={5}>
                            Finance
                          </Radio>
                          <Radio style={radioStyle} value={6}>
                            Real Estate
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={7}>
                            Retail
                          </Radio>
                          <Radio style={radioStyle} value={8}>
                            Construction
                          </Radio>
                          <Radio style={radioStyle} value={9}>
                            Other
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  <Form.Item
                    name='trademark'
                    label='Do you own a Trademark for the logo or the name of your LLP ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select required input!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.value}>
                          <Radio style={radioStyle} value={1}>
                            Yes
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.value}>
                          <Radio style={radioStyle} value={2}>
                            No
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.value}>
                          <Radio style={radioStyle} value={3}>
                            On Process
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
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

export default BusinessComponent;

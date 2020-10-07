import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Space, Radio, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

class AboutComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/trademark-filing';
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
    const {
      values,
      onActivityChange,
      onRadioChange,
      uploadTradeLicence,
      title,
      para,
    } = this.props;
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
                {/* business activities */}
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  <Form.Item
                    name='trademark'
                    label='What kind of business will be done under this brand ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select required input!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={1}>
                            Selling Product
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={2}>
                            Providing Services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onActivityChange}
                          value={values.businessActivities}>
                          <Radio style={radioStyle} value={3}>
                            Both
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  {/* product category */}
                  <Form.Item
                    name='businessActivities'
                    label='Category of your Service'
                    extra='Choose the category of Service in which you want to register your trademark.'
                    rules={[
                      {
                        required: true,
                        message: 'Please select your category of services !',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.category}>
                          <Radio style={radioStyle} value={1}>
                            Food and drink services
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Treatment of materials
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Building, Construction, Repair and Installation
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            Legal, personal, social, security services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.category}>
                          <Radio style={radioStyle} value={5}>
                            Scientific / technological services
                          </Radio>
                          <Radio style={radioStyle} value={6}>
                            Transport / Packaging / Storage
                          </Radio>
                          <Radio style={radioStyle} value={7}>
                            Insurance, financial, real estate affairs
                          </Radio>
                          <Radio style={radioStyle} value={8}>
                            Medical, Beauty care, Agriculture services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={onRadioChange}
                          value={values.category}>
                          <Radio style={radioStyle} value={9}>
                            Education, training, entertainment
                          </Radio>
                          <Radio style={radioStyle} value={10}>
                            Telecommunications
                          </Radio>
                          <Radio style={radioStyle} value={11}>
                            Advertising, Consulting, Office services
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* trade licence */}
                  <Form.Item
                    name='dragger'
                    valuePropName='fileList'
                    getValueFromEvent={uploadTradeLicence}
                    label='Trade Licence for individuals'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your trade licence !',
                      },
                    ]}>
                    <Upload.Dragger name='files' action='/#'>
                      <p className='ant-upload-drag-icon'>
                        <InboxOutlined />
                      </p>
                      <p className='ant-upload-text'>
                        Click or drag file to this area to upload
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'></Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'></Col>
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

export default AboutComponent;

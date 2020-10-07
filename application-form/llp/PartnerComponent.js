import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

class PartnerComponent extends Component {
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
              <Title level={4}>Partner Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner name */}
                  <Form.Item
                    name='partnerName'
                    label='Name of Partner'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your name'
                      onChange={handleChange('partnerName')}
                      value={values.partnerName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner address */}
                  <Form.Item
                    name='partnerAdd'
                    label='Address of Partner'
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
                      onChange={handleChange('partnerAdd')}
                      value={values.partnerAdd}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner number */}
                  <Form.Item
                    name='partnerNum'
                    label='Number of Partner'
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
                      onChange={handleChange('partnerNum')}
                      value={values.partnerNum}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner PAN */}
                  <Form.Item
                    name='partnerOnePan'
                    label='PAN no of Partner'
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
                      placeholder='Enter your PAN number'
                      onChange={handleChange('partnerPan')}
                      value={values.partnerPan}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* add partners */}
              <Form.List name='users'>
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        //-------------------------------------
                        <React.Fragment key={field.key}>
                          <hr />
                          <Row gutter={24} align='top'>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner name */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerName']}
                                fieldKey={[field.fieldKey, 'partnerName']}
                                label='Name of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your name!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='text'
                                  placeholder='Enter your name'
                                  onChange={handleChange('partnerName')}
                                  value={values.partnerName}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner address */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerAdd']}
                                fieldKey={[field.fieldKey, 'partnerAdd']}
                                label='Address of Partner'
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
                                  onChange={handleChange('partnerAdd')}
                                  value={values.partnerAdd}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={24} align='top'>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner number */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerNum']}
                                fieldKey={[field.fieldKey, 'partnerNum']}
                                label='Number of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your  number!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='number'
                                  placeholder='Enter your number'
                                  onChange={handleChange('partnerNum')}
                                  value={values.partnerNum}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner PAN */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerPan']}
                                fieldKey={[field.fieldKey, 'partnerPan']}
                                label='PAN no of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your PAN number!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='text'
                                  placeholder='Enter your PAN number'
                                  onChange={handleChange('partnerPan')}
                                  value={values.partnerPan}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name);
                            }}
                            className='remove'
                          />
                        </React.Fragment>
                      ))}

                      <Form.Item>
                        <Button
                          type='dashed'
                          onClick={() => {
                            add();
                          }}>
                          <PlusOutlined /> Add field
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
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

export default PartnerComponent;

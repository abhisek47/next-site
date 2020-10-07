import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Select } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';

class BusinessComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  render() {
    const {
      values,
      handleChange,
      onTypeChange,
      onStateChange,
      title,
      para,
    } = this.props;
    const { Option } = Select;
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
              <Title level={4}>Business Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business name */}
                  <Form.Item
                    name='businessName'
                    label='Business Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business name'
                      onChange={handleChange('businessName')}
                      value={values.businessName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business address */}
                  <Form.Item
                    name='businessAddress'
                    label='Business Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your business name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business address'
                      onChange={handleChange('businessAddress')}
                      value={values.businessAddress}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business type */}
                  <Form.Item
                    name='businessType'
                    label='Type of Business'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business type!',
                      },
                    ]}>
                    <Select
                      placeholder='Your business registered as'
                      onChange={onTypeChange}
                      allowClear
                      size='large'
                      style={{ fontSize: 'inherit' }}>
                      <Option value='Private Limited Company'>
                        Private Limited Company
                      </Option>
                      <Option value='Public Limited Company'>
                        Public Limited Company
                      </Option>
                      <Option value='One Person Company'>
                        One Person Company
                      </Option>
                      <Option value='Proprietorship Firm'>
                        Proprietorship Firm
                      </Option>
                      <Option value='Partnership Firm'>Partnership Firm</Option>
                      <Option value='Limited Liability Partnership'>
                        Limited Liability Partnership
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business email */}
                  <Form.Item
                    name='businessEmail'
                    label='Business Email'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business type!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='email'
                      placeholder='Enter yout business email address'
                      onChange={handleChange('businessEmail')}
                      value={values.businessEmail}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business city */}
                  <Form.Item
                    name='city'
                    label='City'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business city!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business city'
                      onChange={handleChange('city')}
                      value={values.city}
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
                        message: 'Please input your business state!',
                      },
                    ]}>
                    <Select
                      placeholder='Enter yout business state'
                      allowClear
                      size='large'
                      style={{ fontSize: 'inherit' }}
                      onChange={onStateChange}>
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
              {/* submit button */}
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  size='large'>
                  Next
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default BusinessComponent;

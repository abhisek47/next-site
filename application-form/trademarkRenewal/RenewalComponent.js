import React, { Component } from 'react';
import {
  Form,
  Input,
  Typography,
  Button,
  Row,
  Col,
  Select,
  Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/HeaderComponent';

class RenewalComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/trademark-renewal';
    window.scrollTo(0, 0);
  };

  render() {
    const {
      values,
      handleChange,
      onStateChange,
      uploadIdProof,
      uploadRegCertificate,
      uploadTradeLicence,
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
                  {/*  name */}
                  <Form.Item
                    name='name'
                    label='Name of the registered owner of trademark'
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
                      onChange={handleChange('name')}
                      value={values.name}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* address */}
                  <Form.Item
                    name='address'
                    label='Address of the registered owner of trademark'
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
                      onChange={handleChange('address')}
                      value={values.address}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  city */}
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
                  {/*  state */}
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
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  pan */}
                  <Form.Item
                    name='pan'
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
                      placeholder='Enter your PAN number'
                      onChange={handleChange('pan')}
                      value={values.pan}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  govt fees */}
                  <Form.Item
                    name='govtFees'
                    label='A Government Fees of appropriate amount (Rs.)'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your government fees!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your government fees'
                      onChange={handleChange('govtFees')}
                      value={values.govtFees}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  trademark number */}
                  <Form.Item
                    name='tmNumber'
                    label='Trademark Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your trademark number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your trademark number'
                      onChange={handleChange('tmNumber')}
                      value={values.tmNumber}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* trademark class */}
                  <Form.Item
                    name='tmClass'
                    label='Trademark Class'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your trademark class!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your trademark class'
                      onChange={handleChange('tmClass')}
                      value={values.tmClass}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* id proof */}
                  <Form.Item
                    name='uploadIdProof'
                    valuePropName='fileList'
                    getValueFromEvent={uploadIdProof}
                    label='Identity proof of the Applicant'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your identity proof !',
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
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* reg certificate */}
                  <Form.Item
                    name='uploadRegCertificate'
                    valuePropName='fileList'
                    getValueFromEvent={uploadRegCertificate}
                    label='Copy of the Registration Certificate'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached your registration certificate !',
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

export default RenewalComponent;

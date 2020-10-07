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

class UnitComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  render() {
    const {
      values,
      handleChange,
      onStateChange,
      onRegCertificate,
      onCompanyCertificate,
      onArticle,
      onCancelCheck,
      onDirectorList,
      onShareholderList,
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
              <Title level={4}>Unit Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  name */}
                  <Form.Item
                    name='name'
                    label='Name of Establishment'
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
                    label='Address of Establishment'
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
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* regCertificate */}
                  <Form.Item
                    name='regCertificate'
                    valuePropName='fileList'
                    getValueFromEvent={onRegCertificate}
                    label='registration certificate obtained either under the: a. Factories Act b.Shops and Establishment Act'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached your registration certificate !',
                      },
                    ]}>
                    <Upload.Dragger name='regCertificate' method='GET'>
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
                  {/* companyCertificate */}
                  <Form.Item
                    name='companyCertificate'
                    valuePropName='fileList'
                    getValueFromEvent={onCompanyCertificate}
                    label='Certificate of Registration in case of Company, and Partnership deed in case of a Partnership'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your company certificate !',
                      },
                    ]}>
                    <Upload.Dragger name='companyCertificate' method='GET'>
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
                  {/* article */}
                  <Form.Item
                    name='article'
                    valuePropName='fileList'
                    getValueFromEvent={onArticle}
                    label='Memorandum of Association and Articles of Association of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached required file !',
                      },
                    ]}>
                    <Upload.Dragger name='article' method='GET'>
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
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* cancel check */}
                  <Form.Item
                    name='cancelCheck'
                    valuePropName='fileList'
                    getValueFromEvent={onCancelCheck}
                    label='cancelled cheque of the Bank Account of the Company'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached your cancelled cheque of the Bank !',
                      },
                    ]}>
                    <Upload.Dragger name='cancelCheck' method='GET'>
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
                  {/* directorList */}
                  <Form.Item
                    name='directorList'
                    valuePropName='fileList'
                    getValueFromEvent={onDirectorList}
                    label='List of Directors of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of directors !',
                      },
                    ]}>
                    <Upload.Dragger name='directorList' method='GET'>
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
                  {/* shareholderList */}
                  <Form.Item
                    name='shareholderList'
                    valuePropName='fileList'
                    getValueFromEvent={onShareholderList}
                    label='List of the Shareholders of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of the shareholders !',
                      },
                    ]}>
                    <Upload.Dragger name='shareholderList' method='GET'>
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

export default UnitComponent;

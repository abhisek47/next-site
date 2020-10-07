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
  List,
} from 'antd';
import {
  InboxOutlined,
  DownloadOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import Link from 'next/link';
// import ItrForm from '../../assets/ITR-1-Form-2019to2020.pdf';

class BusinessComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  render() {
    const services = [
      'Fill in details using a hard-copy of your Form-16',
      'Well guided flow for individuals without Form-16',
      'Best suited for non-salaried or business individuals',
    ];
    const servicesOne = [
      'You can also upload a Form-26AS',
      'You can also upload multiple Form-16s',
    ];
    const {
      values,
      handleChange,
      onStateChange,
      onUploadChange,
      title,
      para,
    } = this.props;
    const { Option } = Select;
    const { Title, Paragraph, Text } = Typography;
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
              <Title level={4}>Business Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* name */}
                  <Form.Item
                    name='name'
                    label='Name of Taxpaye'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your name'
                      onChange={handleChange('name')}
                      value={values.name}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* address */}
                  <Form.Item
                    name='address'
                    label='Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your address !',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your address'
                      onChange={handleChange('address')}
                      value={values.address}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* city */}
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
                      onChange={handleChange('city')}
                      value={values.city}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* state */}
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
                      placeholder='Enter your state'
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
                {/* upload form-16 pdf */}
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  <Form.Item
                    name='itrForm'
                    valuePropName='fileList'
                    getValueFromEvent={onUploadChange}
                    label='Do you have a Form-16 PDF ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your Form-16 PDF !',
                      },
                    ]}>
                    <Upload.Dragger name='files' action='/#' method='GET'>
                      <p className='ant-upload-drag-icon'>
                        <InboxOutlined />
                      </p>
                      <p className='ant-upload-text'>
                        Click or drag file to this area to upload
                      </p>
                    </Upload.Dragger>
                    <List
                      dataSource={servicesOne}
                      renderItem={(item) => (
                        <List.Item
                          style={{ margin: '8px 0', padding: '10px 0' }}>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Form.Item>
                </Col>
                {/* download form */}
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* <Form.Item
                    name='downloadForm'
                    label='Do not have ITR Form-16 ?'>
                    <Link href={ItrForm}>
                      <Button
                        type='primary'
                        icon={<DownloadOutlined />}
                        size='large'>
                        Download
                      </Button>
                    </Link>
                    <List
                      dataSource={services}
                      renderItem={(item) => (
                        <List.Item
                          style={{ margin: '8px 0', padding: '10px 0' }}>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Form.Item> */}
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

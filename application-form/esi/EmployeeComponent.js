import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Space, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/HeaderComponent';

class EmployeeComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/esi-filing';
    window.scrollTo(0, 0);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    window.scrollTo(0, 0);
  };

  render() {
    const {
      values,
      handleChange,
      onEmoloyeeList,
      onPan,
      title,
      para,
    } = this.props;
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
              <Title level={4}>Employee Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* no of employee */}
                  <Form.Item
                    name='noOfEmployee'
                    label='Total no of employees'
                    rules={[
                      {
                        required: true,
                        message: 'Please input no of employees !',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter no of employees'
                      onChange={handleChange('noOfEmployee')}
                      value={values.noOfEmployee}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* employee list */}
                  <Form.Item
                    name='employeeList'
                    valuePropName='fileList'
                    getValueFromEvent={onEmoloyeeList}
                    label='List of all the employees working in the Establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of directors !',
                      },
                    ]}>
                    <Upload.Dragger name='employeeList' method='GET'>
                      <p className='ant-upload-drag-icon'>
                        <InboxOutlined />
                      </p>
                      <p className='ant-upload-text'>
                        Click or drag file to this area to upload
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* pan */}
                  <Form.Item
                    name='pan'
                    valuePropName='fileList'
                    getValueFromEvent={onPan}
                    label='PAN Card of the Business Entity as well as all the Employees working under the entity'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card details !',
                      },
                    ]}>
                    <Upload.Dragger name='pan' method='GET'>
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

export default EmployeeComponent;

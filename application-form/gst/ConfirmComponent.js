import React, { Component } from 'react';
import { Typography, Button, Result } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';

class ConfirmComponent extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <div className='container application-form'>
          <Typography.Title className='application-title'>
            GST Application Form
          </Typography.Title>
          <div className='steps-content'>
            <Result
              status='success'
              title='Successfully Purchased Cloud Server ECS!'
              subTitle='Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.'
              extra={[
                <Button type='primary' key='console'>
                  Go Console
                </Button>,
                <Button key='buy'>Buy Again</Button>,
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ConfirmComponent;

import { Layout, Row, Col, Card, Typography } from 'antd';
// import {
//   HeartFilled,
//   MessageFilled,
//   SafetyCertificateFilled,
// } from '@ant-design/icons';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';

const SupportComponent = () => {
  const { Title, Paragraph } = Typography;
  return (
    <React.Fragment>
      <Layout className='support' style={{ background: '#e2f3f5' }}>
        <div className='container'>
          <Row gutter={16}>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-team'>
                      <img
                        src={one}
                        alt=''
                        data-sal='zoom-in'
                        data-sal-delay='300'
                        data-sal-easing='ease-out-back'
                      />
                    </Title>
                    <Title level={4}>Vibrant Team</Title>
                    <Paragraph>
                      A talented workforce that works in collaboration with a
                      network of over 6000+ Professionals.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-time'>
                      <img
                        src={two}
                        alt=''
                        data-sal='zoom-in'
                        data-sal-delay='300'
                        data-sal-easing='ease-out-back'
                      />
                    </Title>
                    <Title level={4}>24/7 Support</Title>
                    <Paragraph>
                      Get support through phone, email, mobile app or live chat
                      - 24/7, 365 days.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-payment'>
                      <img
                        src={three}
                        alt=''
                        data-sal='zoom-in'
                        data-sal-delay='300'
                        data-sal-easing='ease-out-back'
                      />
                    </Title>
                    <Title level={4}>Secure Payment</Title>
                    <Paragraph>
                      Easily pay online with EMI payments, credit or debit card,
                      net banking, PayPal and more.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default SupportComponent;

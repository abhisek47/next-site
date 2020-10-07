import { useEffect } from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
import {
  HomeFilled,
  BulbFilled,
  NotificationFilled,
  SmileFilled,
} from '@ant-design/icons';
import CountUp from 'react-countup';
import sal from 'sal.js';

const StatsComponent = () => {
  const { Title, Paragraph } = Typography;
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <Layout className='statistic'>
        <Layout.Content>
          <div className='container'>
            <Row gutter={16} align='top'>
              <Col className='ant-col-xs-12 ant-col-md-6'>
                <Card
                  data-sal='zoom-in'
                  data-sal-delay='300'
                  data-sal-easing='ease-out-back'>
                  <div>
                    <Title>
                      <NotificationFilled style={{ color: '#2f54eb' }} />
                    </Title>
                    <Paragraph>Company Established</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={2013} />
                    </Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-12 ant-col-md-6'>
                <Card
                  data-sal='zoom-in'
                  data-sal-delay='300'
                  data-sal-easing='ease-out-back'>
                  <div>
                    <Title>
                      <BulbFilled style={{ color: '#faad14' }} />
                    </Title>
                    <Paragraph>Staff Members</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={80} />
                    </Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-12 ant-col-md-6'>
                <Card
                  data-sal='zoom-in'
                  data-sal-delay='300'
                  data-sal-easing='ease-out-back'>
                  <div>
                    <Title>
                      <HomeFilled style={{ color: '#52c41a' }} />
                    </Title>
                    <Paragraph>Offices Available</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={6} />
                    </Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-12 ant-col-md-6'>
                <Card
                  data-sal='zoom-in'
                  data-sal-delay='300'
                  data-sal-easing='ease-out-back'>
                  <div>
                    <Title>
                      <SmileFilled style={{ color: '#ff7a45' }} />
                    </Title>
                    <Paragraph>Happy Clientele</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={4500} />
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default StatsComponent;

import { useEffect } from 'react';
import { Layout, Row, Col, Card, Typography, Button } from 'antd';
import serviceOne from '../assets/services_1.jpg';
import serviceTwo from '../assets/services_2.jpg';
import serviceThree from '../assets/services_3.jpg';
import serviceFour from '../assets/services_4.jpg';
import Link from 'next/link';
import { TagsFilled } from '@ant-design/icons';

const PopularComponent = () => {
  const { Meta } = Card;
  return (
    <React.Fragment>
      <Layout>
        <div className='container'>
          <div className='popular-entities'>
            <Typography.Title
              data-sal='slide-up'
              data-sal-delay='300'
              data-sal-easing='ease-out-back'>
              We Provide Multi Professional Services
            </Typography.Title>
            <Row gutter={16}>
              <Col className='ant-col-sm-24 ant-col-lg-6 ant-col-md-12'>
                <div className='service-card'>
                  <Card cover={<img alt='example' src={serviceOne} />}>
                    <Meta
                      title='GST Registration'
                      description='Every business or corporation that are involved in the buying and selling and good of services have to register for GST.'
                    />
                    <Link href='/gst'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </div>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-6 ant-col-md-12'>
                <div className='service-card'>
                  <Card cover={<img alt='example' src={serviceTwo} />}>
                    <Meta
                      title='Company Registration'
                      description='A company register is a register of organizations in the jurisdiction they operate under.'
                    />
                    <Link href='/private-limited-company'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </div>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-6 ant-col-md-12'>
                <div className='service-card'>
                  <Card cover={<img alt='example' src={serviceThree} />}>
                    <Meta
                      title='Income Tax Return'
                      description='The Income Tax Department is a government agency undertaking direct tax collection of the Government of India.'
                    />
                    <Link href='/income-tax-return-1'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </div>
              </Col>

              <Col className='ant-col-sm-24 ant-col-lg-6 ant-col-md-12'>
                <div className='service-card'>
                  <Card cover={<img alt='example' src={serviceFour} />}>
                    <Meta
                      title='Trademark Registration'
                      description='It is a type of intellectual property consisting of a recognizable sign, design which identifies products or services of a particular source from those of others,'
                    />
                    <Link href='/trademark'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PopularComponent;

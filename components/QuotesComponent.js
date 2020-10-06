import { useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import director from '../assets/chief@2x.png';

const QuotesComponent = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <React.Fragment>
      <Layout className='quotes'>
        <div className='container'>
          <Row gutter={16} align='middle'>
            <Col className='ant-col-sm-24 ant-col-lg-16 ant-col-md-12'>
              <Typography>
                <div>
                  <Title
                    className='quotes-head'
                    data-sal='slide-up'
                    data-sal-delay='100'
                    data-sal-easing='ease-out-back'>
                    PAN India Services
                  </Title>
                </div>
                <div>
                  <Paragraph
                    className='quotes-para'
                    data-sal='slide-up'
                    data-sal-delay='100'
                    data-sal-easing='ease-out-back'>
                    we have over 8+ years of corporate and consulting experience
                    with top firms. Our network includes experienced Chartered
                    Accountants, Company Secretaries, Lawyers, Cost Accountants
                    and many more. We help in startup compliance and assists in
                    ROC filing, GST filing, Income Tax filing, and assist in
                    geeting various certificates like IPR, FSSAI, IEC etc . We
                    help and assist client in legal compliances and give the
                    burden of compliance to us for ease of focusing on business.
                  </Paragraph>
                </div>
                <div
                  data-sal='slide-up'
                  data-sal-delay='200'
                  data-sal-easing='ease-out-back'>
                  <Paragraph strong className='ceo'>
                    Uday Prakash Choudhary
                  </Paragraph>
                  <Text>Chief executive officer</Text>
                </div>
              </Typography>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-12'>
              <img src={director} className='director-img' alt='director' />
            </Col>
          </Row>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default QuotesComponent;

import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrSixEligibility from '../assets/itrSix-eligibility.svg';
import itrSixIneligibility from '../assets/itrSix-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { itrSixBasic, itrSixStandard, itrSixPremium } from './PricingDetails';

const itrSixComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How to get a company registered ?',
      details:
        'Picking the right company structure for your business is as important as any other business-related activity. The right business structure will allow your enterprise to operate efficiently and meet your required business targets. In India, every business must register themselves as part of the mandatory legal compliance. Before we learn how to register a company, let’s try and understand the types of business structures in India.',
    },
    {
      id: 2,
      title: 'What is trademark registration ?',
      details:
        'A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const eligibility = [
    'companies that are not claiming any exemption under Section11 but if',
  ];
  const ineligibility = [
    'Companies are claiming an exemption u/s 11, who have Income from property held for charitable or religious purposes., then itr 6 cannot be filled.',
  ];
  const { Title, Paragraph, Text } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#itrSix-filing' title='Income Tax Return - 6' />
                <Link href='#itrSix-eligibility' title='Eligibility' />
                <Link href='#itrSix-ineligibility' title='Ineligibility' />
                <Link href='#itrSix-pricing' title='Pricing' />
                <Link href='#itrSix-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrSix-filing service' id='itrSix-filing'>
                <Typography>
                  <Title>Income Tax Return - 6</Title>
                  <Paragraph strong>
                    ITR Form 6 or ITR 6 is an income tax return form that is
                    used by companies to e-file income tax return if they do not
                    claim exemption under Section 11 of the Income Tax Act,
                    1961. Under existing Income Tax rules, companies that can
                    claim exemption u/s 11 are those who have income from
                    property that is held for charitable or religious purposes.
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrSix eligibility */}
              <div
                className='itrSix-eligibility service'
                id='itrSix-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-6</Title>
                    <Paragraph strong>
                      ITR-6 is filed by the taxpayers whose income is up to Rs
                      50 lakhs from below- mentioned sources:
                    </Paragraph>
                    <List
                      dataSource={eligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={itrSixEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrSix ineligibility */}
              <div
                className='itrSix-ineligibility service'
                id='itrSix-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrSixIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-6</Title>
                    <Paragraph strong>
                      ITR-6 is filed by the taxpayers whose income is up to Rs
                      50 lakhs from below- mentioned sources:
                    </Paragraph>
                    <List
                      dataSource={ineligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji uncheck'>
                              <ExclamationCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrSix-pricing'>
                <PricingComponent
                  dataOne={itrSixBasic}
                  dataTwo={itrSixStandard}
                  dataThree={itrSixPremium}
                  basic='5000'
                  standard='5000'
                  premium='5000'
                />
              </div>
              {/* faq */}
              <div className='itrSix-faq service' id='itrSix-faq'>
                <Title className='faq-head'>Frequently Asked Questions</Title>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='site-collapse-custom-collapse'>
                  {tab1.map((tab) => (
                    <Panel
                      header={tab.title}
                      key={tab.id}
                      className='site-collapse-custom-panel'>
                      <p>{tab.details}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default itrSixComponent;

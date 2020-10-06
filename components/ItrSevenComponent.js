import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrSevenEligibility from '../assets/itrSeven-eligibility.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import {
  itrSevenBasic,
  itrSevenStandard,
  itrSevenPremium,
} from './PricingDetails';

const itrSevenComponent = () => {
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
  const eligibility = ['Trusts', 'Political party', 'Institutions', 'Colleges'];
  //   const ineligibility = [
  //     'Companies are claiming an exemption u/s 11, who have Income from property held for charitable or religious purposes., then itr 6 cannot be filled.',
  //   ];
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
                <Link href='#itrSeven-filing' title='Income Tax Return - 7' />
                <Link href='#itrSeven-eligibility' title='Eligibility' />
                <Link href='#itrSeven-pricing' title='Pricing' />
                <Link href='#itrSeven-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrSeven-filing service' id='itrSeven-filing'>
                <Typography>
                  <Title>Income Tax Return - 7</Title>
                  <Paragraph strong>
                    For individuals and HUF with income from profits of a
                    business or profession. ITR 3 is the form used by the
                    individuals and Hindu Undivided Families who are registered
                    as ‘Partners’ in a firm. . This is applicable for the
                    professionals but in a partnership profession. The partner
                    must be earning income in the form of interest, salary,
                    bonus, commission, etc.
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrSeven eligibility */}
              <div
                className='itrSeven-eligibility service'
                id='itrSeven-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-7</Title>
                    <Paragraph strong>
                      ITR-7 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrSevenEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrSeven-pricing'>
                <PricingComponent
                  dataOne={itrSevenBasic}
                  dataTwo={itrSevenStandard}
                  dataThree={itrSevenPremium}
                  basic='5000'
                  standard='5000'
                  premium='5000'
                />
              </div>
              {/* faq */}
              <div className='itrSeven-faq service' id='itrSeven-faq'>
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

export default itrSevenComponent;

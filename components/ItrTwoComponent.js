import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrTwoEligibility from '../assets/itrTwo-eligibility.svg';
import itrTwoIneligibility from '../assets/itrTwo-ineligibility.svg';
import {
  CaretRightOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { itrTwoBasic, itrTwoStandard, itrTwoPremium } from './PricingDetails';

const ItrTwoComponent = () => {
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
    'Taxpayer having income exceeding Rs. 50 Lakhsfrom salary,profession etc',
    'Taxpayer Having foreign assets / income',
    'Taxpayer Having agricultural income in excess of Rs. 5,000',
    'Taxpayer having income under capiatal gain',
    'Taxpayer Having income from business or profession as a partner',
    'Taxpayer Having more than one house property',
    'Taxpayers having DIN or owing private limited company shares.',
  ];
  const ineligibility = [
    'Itr2 cannot be filed by LLP',
    'Itr2cannot be filled by company,society,trust,partnership etc',
    'Itr2 cannot be filled by proprietor having business or professional income',
  ];
  const { Title, Paragraph, Text } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <React.Fragment>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#itrTwo-filing' title='Income Tax Return - 2' />
                <Link href='#itrTwo-eligibility' title='Eligibility' />
                <Link href='#itrTwo-ineligibility' title='Ineligibility' />
                <Link href='#itrTwo-pricing' title='Pricing' />
                <Link href='#itrTwo-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrTwo-filing service' id='itrTwo-filing'>
                <Typography>
                  <Title>Income Tax Return - 2</Title>
                  <Paragraph strong>
                    Individuals and Hindu Undivided Families who have their
                    Income for the Financial Year through Salary or Pension,
                    more than One House Property, Income from Capital Gains,
                    Income from foreign assets/Income, Income from business or
                    profession as a partner (not proprietor) and other sources
                    including lottery, racehorses, legal gambling are eligible
                    to file their IT Return using ITR-2. Individuals who are not
                    eligible to file using ITR-1, because of their income
                    exceeding ₹ 50 Lakhs are also eligible to file itr2.
                  </Paragraph>
                </Typography>
              </div>
              {/* itrTwo eligibility */}
              <div
                className='itrTwo-eligibility service'
                id='itrTwo-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-2</Title>
                    <Paragraph strong>
                      ITR-2 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrTwoEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* itrTwo ineligibility */}
              <div
                className='itrTwo-ineligibility service'
                id='itrTwo-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrTwoIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-2</Title>
                    <Paragraph strong>
                      ITR-2 is filed by the taxpayers whose income is up to Rs
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
                  {/* due date */}
                  <div className='itr-duedate'>
                    <Title>Due Date for Filing ITR 2 Online AY 2020-21</Title>
                    <Paragraph strong>
                      ITR -2 has to be filed on or before 30 Nov of the
                      following year. After that, a late fee under section 234F
                      is levied
                    </Paragraph>
                  </div>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrTwo-pricing'>
                <PricingComponent
                  dataOne={itrTwoBasic}
                  dataTwo={itrTwoStandard}
                  dataThree={itrTwoPremium}
                  basic='2900'
                  standard='4900'
                  premium='6800'
                />
              </div>
              {/* faq */}
              <div className='itrTwo-faq service' id='itrTwo-faq'>
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
    </React.Fragment>
  );
};

export default ItrTwoComponent;

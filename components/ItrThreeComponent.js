import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrThreeEligibility from '../assets/itrThree-eligibility.svg';
import itrThreeIneligibility from '../assets/itrThree-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  itrThreeBasic,
  itrThreeStandard,
  itrThreePremium,
} from './PricingDetails';

const ItrThreeComponent = () => {
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
    'If the source of income is from one house property',
    'If the source of income is from pension or salary',
    'If the source of income is from other sources',
  ];
  const ineligibility = [
    'The taxpayer whose income is more than Rs 50 lakhs',
    'Non-residents and Residents but not ordinarily resident',
    'Taxpayers who have two or more house properties',
    'Taxpayer having income under business or profession',
    'Taxpayers who have long or short-term capital gains',
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
                <Link href='#itrThree-filing' title='Income Tax Return - 3' />
                <Link href='#itrThree-eligibility' title='Eligibility' />
                <Link href='#itrThree-ineligibility' title='Ineligibility' />
                <Link href='#itrThree-pricing' title='Pricing' />
                <Link href='#itrThree-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrThree-filing service' id='itrThree-filing'>
                <Typography>
                  <Title>Income Tax Return - 3</Title>
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
              {/* #itrThree eligibility */}
              <div
                className='itrThree-eligibility service'
                id='itrThree-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-3</Title>
                    <Paragraph strong>
                      ITR-3 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrThreeEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrThree ineligibility */}
              <div
                className='itrThree-ineligibility service'
                id='itrThree-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrThreeIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-3</Title>
                    <Paragraph strong>
                      ITR-3 is filed by the taxpayers whose income is up to Rs
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
                    <Title>Due Date for Filing ITR-3 Online AY 2020-21</Title>
                    <Paragraph strong>
                      ITR -3 has to be filed on or before 30 Nov of the
                      following year. After that, a late fee under section 234F
                      is levied
                    </Paragraph>
                  </div>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrThree-pricing'>
                <PricingComponent
                  dataOne={itrThreeBasic}
                  dataTwo={itrThreeStandard}
                  dataThree={itrThreePremium}
                  basic='2900'
                  standard='4900'
                  premium='6900'
                />
              </div>
              {/* faq */}
              <div className='itrThree-faq service' id='itrThree-faq'>
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

export default ItrThreeComponent;

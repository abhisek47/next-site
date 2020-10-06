import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrFourEligibility from '../assets/itrFour-eligibility.svg';
import itrFourIneligibility from '../assets/itrFour-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  itrFourBasic,
  itrFourStandard,
  itrFourPremium,
} from './PricingDetails';

const ItrFourComponent = () => {
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
    'Presumptive Income computed as per Sections 44AD, 44ADA and 44AE',
    'Salary or pension',
    'Income from single house property (provided there is no brought forward loss or loss to be carried forward)',
    'Income from other sources (including winnings or loss from lottery and racehorses, other than income chargeable at special rates, and including family pension)',
    'In the case of clubbed income, i.e., the income of another person (spouse, minor child, etc.) is to be clubbed with the income of the taxpayer.',
  ];
  const ineligibility = [
    'If taxpayer total income is more Rs.50 lakh.',
    'If taxpayer has any brought forward losses from previous years.',
    'If taxpayer have foreign assets or have generated a foreign income.',
    'If the taxpayer has income from more than one house property.',
    'If the taxpayer is Director of a company.',
    'If taxpayer is an NRI or an RNOR.',
    'If taxpayer has any income to be apportioned following Section 5A.',
    'If there is Capital gains/losses on the sale of investment/ property,',
    'If tax payer is assessable for the complete or part of the income on which TDS has been deducted in the hands of the person other than the assessee.',
    'Dividend income exceeding Rs. 10 lakhs taxable under Section 115BBDA. .Assessee has any unexplained income(i.e.cash credit, unexplained investment, etc.) taxable at 60% u / s 115BBE.',
    'Income under the head “income from other sources” of which the assessee has claimed exemption u/ s 57.',
    'Deduction has been claimed u/s 80QQB or 80RRB in respect of royalty from patent or books.',
    'Deduction has been claimed u/s 10AA or Part-C of Chapter VI-A.',
    'If an individual is taxable in respect of an income but TDS for such income has been deducted by any other person(i.e., clubbing of income, Portuguese Civil Code, etc.).. 15.Assessee is Claiming relief of tax u/ s 90, 90A or 91.',
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
                <Link href='#itrFour-filing' title='Income Tax Return - 4' />
                <Link href='#itrFour-eligibility' title='Eligibility' />
                <Link href='#itrFour-ineligibility' title='Ineligibility' />
                <Link href='#itrFour-pricing' title='Pricing' />
                <Link href='#itrFour-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrFour-filing service' id='itrFour-filing'>
                <Typography>
                  <Title>Income Tax Return - 4</Title>
                  <Paragraph strong>
                    Form is applicable For Individuals, HUFs and Firms (other
                    than LLP) being a Resident having Total Income upto Rs.50
                    lakhs and having income from Business and Profession which
                    is computed under sections 44AD, 44ADA or 44AE
                  </Paragraph>
                  <Paragraph strong>
                    This itr is Not for an Individual who is either Director in
                    a company or has invested in Unlisted Equity Share
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrFour eligibility */}
              <div
                className='itrFour-eligibility service'
                id='itrFour-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-4</Title>
                    <Paragraph strong>
                      ITR-4 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrFourEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrFour ineligibility */}
              <div
                className='itrFour-ineligibility service'
                id='itrFour-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrFourIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-4</Title>
                    <Paragraph strong>
                      ITR-4 is filed by the taxpayers whose income is up to Rs
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
              <div className='pricing service' id='itrFour-pricing'>
                <PricingComponent
                  dataOne={itrFourBasic}
                  dataTwo={itrFourStandard}
                  dataThree={itrFourPremium}
                  basic='3000'
                  standard='3000'
                  premium='3000'
                />
              </div>
              {/* faq */}
              <div className='itrFour-faq service' id='itrFour-faq'>
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

export default ItrFourComponent;

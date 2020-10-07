import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import gstrCase from '../assets/gstrCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import TableComponent from './TableComponent';
import tdsElegibility from '../assets/tds.svg';
import { tdsBasic, tdsStandard, tdsPremium } from './PricingDetails';

const TdsComponent = () => {
  const columns = [
    {
      title: 'Quarter',
      dataIndex: 'quarter',
      render: (text) => (
        <Paragraph strong style={{ color: '#1890ff' }}>
          {text}
        </Paragraph>
      ),
    },
    {
      title: 'Quarter ends on',
      dataIndex: 'quarterEnd',
    },
    {
      title: 'Due date of TDS payment',
      dataIndex: 'paymentDate',
    },
    {
      title: 'Due Date of TDS filing',
      dataIndex: 'filingDate',
    },
  ];

  const data = [
    {
      key: '1',
      quarter: 'April to June',
      quarterEnd: '30th June',
      paymentDate: '7th July',
      filingDate: '15th July',
    },
    {
      key: '2',
      quarter: 'July to September',
      quarterEnd: '30th September',
      paymentDate: '7th October',
      filingDate: '15th October',
    },
    {
      key: '3',
      quarter: 'October to December',
      quarterEnd: '31st December',
      paymentDate: '7th January',
      filingDate: '15th January',
    },
    {
      key: '4',
      quarter: 'January to March',
      quarterEnd: '31st March',
      paymentDate: '7th May',
      filingDate: '15th May',
    },
  ];
  const tab1 = [
    {
      id: 1,
      title:
        'Whether data for GSTR-3B will prevail over GSTR-1 for reporting in GSTR-9 ?',
      details:
        'As per clarifications/press release, Irrespective of when the supply was declared in FORM GSTR-1, the principle of declaring a supply in Pt. II or Pt. V is essentially driven by when tax was paid through FORM GSTR-3B in respect of such supplies. Hence for the purpose of Reporting in GSTR 9, data as reported in GSTR 3B will prevail over GSTR 1.',
    },
    {
      id: 2,
      title: 'Is filing GSTR-9 mandatory ?',
      details:
        'Yes, filing annual returns in form GSTR 9 is mandatory for all registered taxpayers who come under the normal scheme.',
    },
    {
      id: 3,
      title:
        'If a taxpayer has been a composition taxpayer for one part of the financial and a normal taxpayer for the other part of the financial year, is s/he required to file GSTR 9 or GSTR 9A?',
      details:
        'A taxpayer who has been a composition taxpayer and a normal taxpayer for different parts of the financial year is required to file both forms GSTR 9 and GSTR 9A for the respective periods. Such a taxpayer should furnish form GSTR 9 for the period s/he was a regular taxpayer, and form GSTR 9A for the period s/he was a composition taxpayer in the said financial year.',
    },
    {
      id: 4,
      title:
        'Can a taxpayer file GSTR 9 in case his/her registration got cancelled for the respective financial year ?',
      details:
        'Yes, Form GSTR 9 is to be filed by the taxpayer even if his/her registration was cancelled during the respective financial year.',
    },
    {
      id: 5,
      title:
        'If a taxpayer opts for the composition scheme during a financial year, is s/he required to file GSTR 9 ?',
      details:
        'Every taxpayer who has opted for the composition scheme during the financial year is required to furnish GSTR 9 for the time period for which s/he was a normal taxpayer.',
    },
    {
      id: 6,
      title:
        'If a taxpayer opts out of the composition scheme during a financial year, is s/he required to file GSTR 9 ?',
      details:
        'Every taxpayer who has opted out of the composition scheme during the financial year is required to furnish GSTR 9 for the time period for which s/he has been a normal taxpayer.',
    },
  ];
  const tdsFormTypes = [
    'Form 24Q -TDS on Salaries',
    'Form 26Q – TDS on payments other than Salaries',
    'Form 27Q – TDS on payments made to Non-Residents',
    'Form 27EQ – TCS',
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
                <Link href='#tds-filing' title='TDS Filing' />
                <Link href='#tds-type' title='Form Type' />
                <Link href='#tds-cases' title='Eligibility' />
                <Link href='#tds-delay' title='Delays and Late Fine' />
                <Link href='#tds-rates' title='Rates' />
                <Link href='#tds-pricing' title='Pricing' />
                <Link href='#tds-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tds-filing service' id='tds-filing'>
                <Typography>
                  <Title>What is TDS ?</Title>
                  <Paragraph strong>
                    a person (deductor) who is liable to make payment of
                    specified nature to any other person (deductee) shall deduct
                    tax at source and remit the same into the account of the
                    Central Government. The deductee from whose income tax has
                    been deducted at source would be entitled to get credit of
                    the amount so deducted on the basis of Form 26AS or TDS
                    certificate issued by the deductor.
                  </Paragraph>
                </Typography>
              </div>
              {/* tds form type */}
              <div className='tds-type service' id='tds-type'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Different types of TDS forms are as follows</Title>
                    <List
                      dataSource={tdsFormTypes}
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
                    <img src={gstrCase} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* tds eligibility */}
              <div className='tds-cases service' id='tds-cases'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={tdsElegibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Who will file return</Title>
                    <Paragraph strong>
                      It is the duty of the person who is making payment to
                      someone for specified goods or services to deduct TDS and
                      file TDS return. The specified payment includes salary,
                      interest, commission, brokerage, professional fees,
                      royalty, contract payments, etc. The person who deducts
                      TDS is called deductor and the person whose tax is being
                      deducted is called deductee.
                    </Paragraph>
                    <Paragraph strong>
                      TDS is not required to be deducted by Individuals and HUF
                      except for those whose accounts are required to be audited
                      u/s 44AB i.e. whose gross receipts in preceding financial
                      year in case of business is more than 2 crore (AY
                      2017-2018) or 1 crore ( AY 2016-2017) and in case of
                      profession 50 lakhs ( AY 2017-2018) or 25 lakhs (AY
                      2016-2017).
                    </Paragraph>
                  </Col>
                </Row>
              </div>
              {/* tds delays */}
              <div className='tds-delay service' id='tds-delay'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-24 ant-col-sm-24'>
                    <Title>Delays</Title>
                    <Paragraph strong>
                      After depositing TDS, the challan provided by the OLTAS
                      system takes 2-3 days to be processed. So make sure to
                      deposit TDS at least 3-4 days before the 15th deadline to
                      avoid paying late fees.
                    </Paragraph>
                  </Col>
                  <Col className='ant-col-lg-24 ant-col-sm-24'>
                    <Title>Late Fine</Title>
                    <Paragraph strong>
                      Late filing fees under section 234E As per section 234E,
                      where a person fails to file the TDS/TCS return on or
                      before the due date prescribed in this regard, then he
                      shall be liable to pay, by way of fee, a sum of Rs. 200
                      for every day during which the failure continues. The
                      amount of late fees shall not exceed the amount of TDS.
                      TDS/TCS return cannot be filed without payment of late
                      filing fees as discussed above. In other words, the late
                      filing fees shall be deposited before filing the TDS
                      return. It should be noted that Rs. 200 per day is not
                      penalty but it is a late filing fee.
                    </Paragraph>
                  </Col>
                </Row>
              </div>
              {/* tds rates */}
              {/* <div className='tds-rates service' id='tds-rates'>
                <TableComponent
                  title='What are the different types of GST Returns?'
                  columns={columns}
                  data={data}
                />
              </div> */}
              {/* Pricing info */}
              <div className='pricing service' id='tds-pricing'>
                <PricingComponent
                  dataOne={tdsBasic}
                  dataTwo={tdsStandard}
                  dataThree={tdsPremium}
                  basic='1499'
                  standard='2499'
                  premium='4899'
                />
              </div>
              {/* faq */}
              <div className='tds-faq service' id='tds-faq'>
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

export default TdsComponent;

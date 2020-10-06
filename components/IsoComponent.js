import {
  Layout,
  Row,
  Col,
  Typography,
  List,
  Collapse,
  Anchor,
  Card,
} from 'antd';
import isoOrg from '../assets/isoOrgBenefits.svg';
import isoCus from '../assets/isoCusBenefits.svg';
import isoDocs from '../assets/isoDocuments.svg';
import isoEleg from '../assets/isoElegibility.svg';
import isoIneleg from '../assets/isoInelegibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import { isoRowOne, isoRowTwo, isoRowThree, isoRowFour } from './IsoDocuments';
import { isoBasic, isoStandard, isoPremium } from './PricingDetails';

const IsoComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How can I return ESI ?',
      details:
        'A pdf format of the form is available on the website. Fill in the form, with the details asked for, and submit it to ESIC, for registration. Once verified, a registration number, a 17-digit unique identity, will be provided to the organization. The ESI filings can be done, once you receive the 17-digit number.',
    },
    {
      id: 2,
      title: 'How can I file esic monthly return ?',
      details:
        '1. User can file the monthly contribution via “Online Monthly contribution Screen”. 2. On submission “preview” page will be displayed. 3. To submit the monthly contribution details to ESIC click “Submit” button (refer screen shot)',
    },
    {
      id: 3,
      title: 'Can I withdraw my ESI money ?',
      details:
        'Any sum withdrawn by a subscriber at any one time for one or more of the purposes, specified in rule 17 from the amount standing to his credit in the fund shall not ordinarily exceed one half of such amount or six months pay, whichever is less.',
    },
  ];
  const isoOrgBenefits = [
    'Provides senior management with an efficient management process',
    'Sets out areas of responsibility across the organisation',
    'Mandatory if you want to tender for some public sector work',
    'Communicates a positive message to staff and customers',
    'Identifies and encourages more efficient and time saving processes',
    'Highlights deficiencies',
    'Reduces your costs',
    'Provides continuous assessment and improvement',
    'Marketing opportunities',
  ];
  const isoCustomerBenefits = [
    'Improved quality and service',
    'Delivery on time',
    'Right first time attitude',
    'Fewer returned products and complaints',
    'Independent audit demonstrates commitment to quality',
  ];
  const isoDocument = [
    {
      id: 1,
      case: 'PAN Card',
    },
    {
      id: 2,
      case: 'Passport size photograph',
    },
    {
      id: 3,
      case: 'Aadhaar Card/ Voter identity card',
    },
    {
      id: 4,
      case: 'Two copies of sales bill/purchase bill.',
    },
  ];
  const isoIneligibility = [
    'You can’t use or modify ISO’s logo…it is ISO’s brand and intellectual property.',
    'You can’t say ISO 9001 or ISO certified…You must spell it out. We are ISO 9001:2013 certified; we are not certified by ISO or by ISO 9001.',
    'ISO 9001:2015 cannot be listed on your products or used in literature to imply product certification…It’s not a product certification it’s a company certification.',
    'You must be careful with your scope description so it properly depicts your certified activities and geographic locations',
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
                <Link href='#iso-reg' title='ISO Registration' />
                <Link href='#iso-Orgbenefits' title='Organisation Benefits' />
                <Link href='#iso-Cusbenefits' title='Customer Benefits' />
                <Link href='#iso-docs' title='Documents required' />
                <Link href='#iso-eligibility' title='Eligibility' />
                <Link href='#iso-ineligibility' title='Ineligibility' />
                <Link href='#iso-advantages' title='Advantages' />
                <Link href='#iso-pricing' title='Pricing' />
                <Link href='#iso-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='iso-reg service' id='iso-reg'>
                <Typography>
                  <Title>
                    International Organization for Standardization(ISO)
                  </Title>
                  <Paragraph strong>
                    ISO 9001 is the international standard for a quality
                    management system (“QMS”). In order to be certified to the
                    ISO 9001 standard, a company must follow the requirements
                    set forth in the ISO 9001 Standard. The standard is used by
                    organizations to demonstrate their ability to consistently
                    provide products and services that meet customer and
                    regulatory requirements and to demonstrate continuous
                    improvement.
                  </Paragraph>
                </Typography>
              </div>
              {/* iso org  benefits */}
              <div className='iso-Orgbenefits service' id='iso-Orgbenefits'>
                <Title>Benifits of getting ISO registered</Title>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Paragraph strong>
                      Some of the benefits to your organisation
                    </Paragraph>
                    <List
                      dataSource={isoOrgBenefits}
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
                    <img src={isoOrg} alt='esiReturn-cases' />
                  </Col>
                </Row>
              </div>
              {/* iso cus benefits */}
              <div className='iso-Cusbenefits service' id='iso-Cusbenefits'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={isoCus} alt='esiReturn-cases' className='hide' />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Paragraph strong>
                      Some of the benefits to your customers
                    </Paragraph>
                    <List
                      dataSource={isoCustomerBenefits}
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
                </Row>
              </div>
              {/* documents */}
              <div className='iso-docs service' id='iso-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      documents={isoDocument}
                      title='Documents Required for ESI Return Filing'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={isoDocs} alt='esi-return-docs' />
                  </Col>
                </Row>
              </div>
              {/* iso eligibility */}
              <div className='iso-eligibility service' id='iso-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={isoEleg} alt='gstr-cases' className='hide' />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>What Can You Do With This Certification?</Title>
                    <Paragraph strong>
                      You can use the fact that your company is ISO
                      9001:2015 certified in your marketing. Your management
                      system and its processes have been certified to ISO
                      9001 so you do want to talk about your successful
                      registration to ISO 9001 just as long as you do not
                      suggest that your products are certified or that you are
                      certified by ISO, which is what ISO certified implies.
                    </Paragraph>
                  </Col>
                </Row>
              </div>
              {/* iso ineligibility */}
              <div className='iso-ineligibility service' id='iso-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>What can’t you do?</Title>
                    <List
                      dataSource={isoIneligibility}
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
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={isoIneleg} alt='gstr-cases' className='hide' />
                  </Col>
                </Row>
              </div>
              {/* iso advantages */}
              <div className='iso-advantages service' id='iso-advantages'>
                <Title>Few detailed advantages of having ISO</Title>
                <Row gutter={14}>
                  {isoRowOne.map((row) => (
                    <Col className='ant-col-lg-24 ant-col-sm-24' key={row.id}>
                      <Card className='box'>
                        <Title level={4}>{row.title}</Title>
                        <Paragraph>{row.para}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={14}>
                  {isoRowTwo.map((row) => (
                    <Col className='ant-col-lg-24 ant-col-sm-24' key={row.id}>
                      <Card className='box'>
                        <Title level={4}>{row.title}</Title>
                        <Paragraph>{row.para}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={14}>
                  {isoRowThree.map((row) => (
                    <Col className='ant-col-lg-24 ant-col-sm-24' key={row.id}>
                      <Card className='box' title={row.title}>
                        {row.para}
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={14}>
                  {isoRowFour.map((row) => (
                    <Col className='ant-col-lg-24 ant-col-sm-24' key={row.id}>
                      <Card className='box'>
                        <Title level={4}>{row.title}</Title>
                        <Paragraph>{row.para}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='iso-pricing'>
                <PricingComponent
                  dataOne={isoBasic}
                  dataTwo={isoStandard}
                  dataThree={isoPremium}
                  basic='6000'
                  standard='6000'
                  premium='6000'
                />
              </div>
              {/* faq */}
              <div className='iso-faq service' id='iso-faq'>
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

export default IsoComponent;

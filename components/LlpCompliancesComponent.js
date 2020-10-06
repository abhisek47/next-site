import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PricingComponent from './PricingComponent';
import {
  llpCompliancesBasic,
  llpCompliancesStandard,
  llpCompliancesPremium,
} from './PricingDetails';

const LlpCompliancesComponent = () => {
  const tab1 = [
    {
      id: 1,
      title:
        'Can the private company be incorporated with a residential address ?',
      details:
        'Yes. The company needs to provide address proof for incorporation. But the Ministry of Corporate Affairs (MCA) allows a residential address to be used as the company’s registered address. Thus any address can be provided as the registered address.',
    },
    {
      id: 2,
      title: 'What are MOA and AOA ?',
      details:
        '. Memorandum of Association (MOA) is defined under section 2(56) of the Companies Act 2013. It is the foundation on which the company is built. It defines the constitution, powers and objects of the company The Articles of Association(AOA) is defined under section 2(5) of the Companies Act.It details all the rules and regulations relating to the management of the company',
    },
    {
      id: 3,
      title:
        'What are the prerequisites to incorporate a Private Limited Company ?',
      details:
        'The prerequisites for the incorporation of a private limited company are that: The number of members must be between 2-200,  There must be at least two directors and two shareholders, Each director must have a Directors Identification Number(DIN) , PAN card copy of directors/ shareholders.Passport copy for NRI subscribers.',
    },
    {
      id: 4,
      title:
        'How are PAN and TAN communicated to the user once SPICe INC 32 is accepted?',
      details:
        ' On acceptance of SPICe forms, the Certificate of Incorporation (COI) will be issued with valid PAN and TAN as allotted by the Income Tax department. An email with the COI as an attachment along with PAN and TAN will be sent to the applicant. PAN and TAN in the email will be held valid as the requirement for a laminated card for PAN has been done away with.',
    },
  ];
  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#llpCompli-reg' title='Compliances For LLP' />
                <Link href='#llpCompli-pricing' title='Pricing' />
                <Link href='#llpCompli-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='llpCompli-reg service' id='llpCompli-reg'>
                <Typography>
                  <Title>
                    Annual Compliances for Limited Liability Partnership
                  </Title>
                  <Paragraph strong>
                    A Limited Liability Partnership enjoys a separate status.
                    Thus, an organization needs to maintain its active status by
                    regularly filing with the Ministry of Corporate Affairs
                    (MCA). Annual compliance filing is mandatory for any LLP,
                    whether having a business or not. Annual compliance for LLP
                    requires filing two separate forms. One of which is for
                    Annual Return, whereas another one is for Statement of
                    Accounts and Solvency.
                  </Paragraph>
                  <Paragraph strong>
                    The forms are filed for reporting the activities and
                    financial data for each financial year in the upcoming year.
                    The failure to fulfill LLP Annual Compliance requirements
                    levies an additional fee of ₹ 100 each day of a delay till
                    the actual date of filing. Hence, apart from the mandate,
                    the heavy penalty compels the Designated Partners to fulfill
                    the requirements.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='llpCompli-pricing'>
                <PricingComponent
                  dataOne={llpCompliancesBasic}
                  dataTwo={llpCompliancesStandard}
                  dataThree={llpCompliancesPremium}
                  basic='18000'
                  standard='25000'
                  premium='30000'
                />
              </div>
              {/* faq */}
              <div className='llpCompli-faq service' id='llpCompli-faq'>
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

export default LlpCompliancesComponent;

import { Layout, Row, Col, Typography } from 'antd';

const FooterComponent = () => {
  const footerHead = [
    {
      id: 1,
      title: 'Head Office',
      sub1: 'Kolkata, West Bengal',
      sub2: '36/A Kadapara, Kankurgachi, Kolkata-700054',
    },
    {
      id: 2,
      title: 'Andhra Pradesh Branch',
      sub1: 'Andhra Pradesh',
      sub2: '9th Phase, Rama Nilayam Road, Andhrapradesh-500072',
    },
    {
      id: 3,
      title: 'Gangtok Branch',
      sub1: 'Gangtok',
      sub2:
        'Below Supermarket (turning) M.G. Road , Gangtok, East Sikkim-737101.',
    },
    {
      id: 4,
      title: 'Siliguri Branch',
      sub1: 'Siliguri',
      sub2: 'Ward 8 , Khalpara , Siliguri - 734005',
    },
    {
      id: 5,
      title: 'Website Policies',
      sub1: 'Terms and Conditions',
      sub2: 'Privacy Policy',
      sub3: 'Disclaimer Policy',
    },
  ];
  const { Footer } = Layout;
  const { Paragraph } = Typography;
  return (
    <>
      <Layout className='footer'>
        <div className='container'>
          <Footer className='footer-top'>
            <Row gutter={16} style={{ alignItems: 'flex-start' }}>
              {footerHead.map((footer) => (
                <Col
                  className='ant-col-sm-24  ant-col-lg-4 ant-col-md-4'
                  key={footer.id}>
                  <div className='footer-content'>
                    <Typography>
                      <Paragraph strong level={4}>
                        {footer.title}
                      </Paragraph>
                      <Paragraph>{footer.sub1}</Paragraph>
                      <Paragraph>{footer.sub2}</Paragraph>
                      <Paragraph>{footer.sub3}</Paragraph>
                    </Typography>
                  </div>
                </Col>
              ))}
            </Row>
          </Footer>
        </div>
        <Footer className='footer-bottom'>
          <Typography>
            <Paragraph>
              copyright @ 2020 cilentfilingindia. all rights reserved
            </Paragraph>
          </Typography>
        </Footer>
      </Layout>
    </>
  );
};

export default FooterComponent;

import { Layout, Typography, Row, Col } from 'antd';
import ProgressiveImage from 'react-progressive-image-loading';
const BannerComponent = ({ head, para, btn, img, goTo }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;

  return (
    <>
      <Layout>
        <Content className='banner-bg'>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div>
                    <Title
                      data-sal='slide-up'
                      data-sal-delay='150'
                      data-sal-easing='ease-out-back'>
                      {head}
                    </Title>
                    <Text
                      strong
                      data-sal='slide-up'
                      data-sal-delay='200'
                      data-sal-easing='ease-out-back'>
                      {para}
                    </Text>
                  </div>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <ProgressiveImage
                  preview={img}
                  src={img}
                  transitionTime={500}
                  transitionFunction='ease'
                  render={(src, style) => (
                    <img src={src} alt='banner' style={style} />
                  )}
                />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default BannerComponent;

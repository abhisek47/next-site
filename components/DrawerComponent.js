import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MenuComponent from './MenuComponent';

const DrawerComponent = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <React.Fragment>
      <Button className='menu-btn' type='primary' onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        width='90%'
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}>
        <MenuComponent />
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComponent;

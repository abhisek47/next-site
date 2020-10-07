import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
  CompassOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuComponent = () => {
  return (
    <Menu mode='inline' style={{ width: '100%' }}>
      <SubMenu
        key='sub1'
        title={
          <span>
            <MailOutlined />
            <span>Company</span>
          </span>
        }>
        <Menu.Item key='1'>
          <a href='/private-company'>Private Limited Company</a>
        </Menu.Item>
        <Menu.Item key='2'>
          <a href='/limited-liability-partnership'>
            Limited Liability Partnership
          </a>
        </Menu.Item>
        <Menu.Item key='3'>
          <a href='/public-limited-company'>Public Limited Company</a>
        </Menu.Item>
        <Menu.Item key='4'>Proprietorship Firm Registration</Menu.Item>
        <Menu.Item key='5'>Registered Partnership</Menu.Item>
        <Menu.Item key='6'>Unregistered Partnership</Menu.Item>
      </SubMenu>
      <SubMenu
        key='sub2'
        icon={<AppstoreOutlined />}
        title='Intellectual Property'>
        <Menu.Item key='7'>
          <a href='/trademark'>Trademark Registration</a>
        </Menu.Item>
        <Menu.Item key='8'>
          <a href='/trademark-renewal'>Trademark Renewal</a>
        </Menu.Item>
        <Menu.Item key='9'>Copyright Registration</Menu.Item>
      </SubMenu>
      <SubMenu title='Goods and Services Tax' icon={<PieChartOutlined />}>
        <Menu.Item key='10'>
          <a href='/gst'>GST Registration</a>
        </Menu.Item>
        <Menu.Item key='11'>
          <a href='/gst-return'>GST Return Filing</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub3' icon={<SettingOutlined />} title='Income Tax'>
        <Menu.Item key='12'>
          <a href='/income-tax-return-1'>Income Tax Return - 1</a>
        </Menu.Item>
        <Menu.Item key='13'>
          <a href='/income-tax-return-2'>Income Tax Return - 2</a>
        </Menu.Item>
        <Menu.Item key='14'>
          <a href='/income-tax-return-3'>Income Tax Return - 3</a>
        </Menu.Item>
        <Menu.Item key='15'>
          <a href='/income-tax-return-4'>Income Tax Return - 4</a>
        </Menu.Item>
        <Menu.Item key='16'>
          <a href='/income-tax-return-5'>Income Tax Return - 5</a>
        </Menu.Item>
        <Menu.Item key='17'>
          <a href='/income-tax-return-6'>Income Tax Return - 6</a>
        </Menu.Item>
        <Menu.Item key='18'>
          <a href='/income-tax-return-7'>Income Tax Return - 7</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key='sub4'
        icon={<DatabaseOutlined />}
        title='Annual Compliances'>
        <Menu.Item key='19'>
          <a href='/private-company-compliances'>Private Limited Company</a>
        </Menu.Item>
        <Menu.Item key='20'>
          <a href='/limited-partnership-compliances'>LLP Annual Partnership</a>
        </Menu.Item>
        <Menu.Item key='21'>
          <a href='/other-compliances'>Partnership Firm, Society, Trust, NGO</a>
        </Menu.Item>
        <Menu.Item key='22'>
          <a href='/import-export-code'>Import Export Code</a>
        </Menu.Item>
        <Menu.Item key='23'>
          <a href='/iso'>ISO Registration</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub5' icon={<CompassOutlined />} title='Payroll'>
        <Menu.Item key='24'>
          <a href='/provident-fund'>PF Registration</a>
        </Menu.Item>
        <Menu.Item key='25'>
          <a href='/provident-fund-return'>PF Return Filing</a>
        </Menu.Item>
        <Menu.Item key='26'>
          <a href='/employees-state-insurance'></a>
          ESI Registration
        </Menu.Item>
        <Menu.Item key='27'>
          <a href='/employees-state-insurance-return'>ESI Return Filing</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub6' icon={<AppstoreAddOutlined />} title='Others'>
        <Menu.Item key='28'>PAN Application</Menu.Item>
        <Menu.Item key='29'>TAN Application</Menu.Item>
        <Menu.Item key='30'>80G Registration</Menu.Item>
        <Menu.Item key='31'>
          <a href='/tax-deduction-at-source'>TDS Filing</a>
        </Menu.Item>
        <Menu.Item key='32'>Excise Return Filing</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuComponent;

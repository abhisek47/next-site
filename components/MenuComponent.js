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
import Link from 'next/link';

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
          <Link href='/private-company'>Private Limited Company</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link href='/limited-liability-partnership'>
            Limited Liability Partnership
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link href='/public-limited-company'>Public Limited Company</Link>
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
          <Link href='/trademark'>Trademark Registration</Link>
        </Menu.Item>
        <Menu.Item key='8'>
          <Link href='/trademark-renewal'>Trademark Renewal</Link>
        </Menu.Item>
        <Menu.Item key='9'>Copyright Registration</Menu.Item>
      </SubMenu>
      <SubMenu title='Goods and Services Tax' icon={<PieChartOutlined />}>
        <Menu.Item key='10'>
          <Link href='/gst'>GST Registration</Link>
        </Menu.Item>
        <Menu.Item key='11'>
          <Link href='/gst-return'>GST Return Filing</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub3' icon={<SettingOutlined />} title='Income Tax'>
        <Menu.Item key='12'>
          <Link href='/income-tax-return-1'>Income Tax Return - 1</Link>
        </Menu.Item>
        <Menu.Item key='13'>
          <Link href='/income-tax-return-2'>Income Tax Return - 2</Link>
        </Menu.Item>
        <Menu.Item key='14'>
          <Link href='/income-tax-return-3'>Income Tax Return - 3</Link>
        </Menu.Item>
        <Menu.Item key='15'>
          <Link href='/income-tax-return-4'>Income Tax Return - 4</Link>
        </Menu.Item>
        <Menu.Item key='16'>
          <Link href='/income-tax-return-5'>Income Tax Return - 5</Link>
        </Menu.Item>
        <Menu.Item key='17'>
          <Link href='/income-tax-return-6'>Income Tax Return - 6</Link>
        </Menu.Item>
        <Menu.Item key='18'>
          <Link href='/income-tax-return-7'>Income Tax Return - 7</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key='sub4'
        icon={<DatabaseOutlined />}
        title='Annual Compliances'>
        <Menu.Item key='19'>
          <Link href='/private-company-compliances'>
            Private Limited Company
          </Link>
        </Menu.Item>
        <Menu.Item key='20'>
          <Link href='/limited-partnership-compliances'>
            LLP Annual Partnership
          </Link>
        </Menu.Item>
        <Menu.Item key='21'>
          <Link href='/other-compliances'>
            Partnership Firm, Society, Trust, NGO
          </Link>
        </Menu.Item>
        <Menu.Item key='22'>
          <Link href='/import-export-code'>Import Export Code</Link>
        </Menu.Item>
        <Menu.Item key='23'>
          <Link href='/iso'>ISO Registration</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub5' icon={<CompassOutlined />} title='Payroll'>
        <Menu.Item key='24'>
          <Link href='/provident-fund'>PF Registration</Link>
        </Menu.Item>
        <Menu.Item key='25'>
          <Link href='/provident-fund-return'>PF Return Filing</Link>
        </Menu.Item>
        <Menu.Item key='26'>
          <Link href='/employees-state-insurance'></Link>
          ESI Registration
        </Menu.Item>
        <Menu.Item key='27'>
          <Link href='/employees-state-insurance-return'>
            ESI Return Filing
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='sub6' icon={<AppstoreAddOutlined />} title='Others'>
        <Menu.Item key='28'>PAN Application</Menu.Item>
        <Menu.Item key='29'>TAN Application</Menu.Item>
        <Menu.Item key='30'>80G Registration</Menu.Item>
        <Menu.Item key='31'>
          <Link href='/tax-deduction-at-source'>TDS Filing</Link>
        </Menu.Item>
        <Menu.Item key='32'>Excise Return Filing</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuComponent;

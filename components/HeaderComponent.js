import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import DrawerComponent from './DrawerComponent';
import Link from 'next/link';

const { SubMenu } = Menu;

const HeaderComponent = () => {
  // state = {
  //   current: 'mail',
  // };

  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  const { Header } = Layout;
  // const { current } = this.state;
  return (
    <>
      <Layout className='layout'>
        <Header>
          <div className='logo'>
            <Link href='/'>ClientFilingIndia</Link>
          </div>
          <div className='navbar'>
            <Menu
              onClick={handleClick}
              // selectedKeys={[current]}
              mode='horizontal'>
              <SubMenu title='Company'>
                <Menu.Item key='setting:1'>
                  <Link href='/private-company'>Private Limited Company</Link>
                </Menu.Item>
                <Menu.Item key='setting:2'>
                  <Link href='/limited-liability-partnership'>
                    Limited Liability Partnership
                  </Link>
                </Menu.Item>
                <Menu.Item key='setting:3'>
                  <Link href='/public-company'>Public Limited Company</Link>
                </Menu.Item>
                <Menu.Item key='setting:4'>
                  Proprietorship Firm Registration
                </Menu.Item>
                <Menu.Item key='setting:5'>Registered Partnership</Menu.Item>
                <Menu.Item key='setting:6'>Unregistered Partnership</Menu.Item>
              </SubMenu>
              <SubMenu title='Intellectual Property'>
                <Menu.Item key='setting:7'>
                  <Link href='/trademark'>Trademark Registration</Link>
                </Menu.Item>
                <Menu.Item key='setting:8'>
                  <Link href='/trademark-renewal'>Trademark Renewal</Link>
                </Menu.Item>
                <Menu.Item key='setting:9'>Copyright Registration</Menu.Item>
              </SubMenu>
              <SubMenu title='GST'>
                <Menu.Item key='setting:10'>
                  <Link href='/gst'>GST Registration</Link>
                </Menu.Item>
                <Menu.Item key='setting:11'>
                  <Link href='/gst-return'>GST Return Filing</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='Income Tax'>
                <Menu.Item key='setting:12'>
                  <Link href='/income-tax-return-1'>Income Tax Return - 1</Link>
                </Menu.Item>
                <Menu.Item key='setting:13'>
                  <Link href='/income-tax-return-2'>Income Tax Return - 2</Link>
                </Menu.Item>
                <Menu.Item key='setting:14'>
                  <Link href='/income-tax-return-3'>Income Tax Return - 3</Link>
                </Menu.Item>
                <Menu.Item key='setting:15'>
                  <Link href='/income-tax-return-4'>Income Tax Return - 4</Link>
                </Menu.Item>
                <Menu.Item key='setting:16'>
                  <Link href='/income-tax-return-5'>Income Tax Return - 5</Link>
                </Menu.Item>
                <Menu.Item key='setting:17'>
                  <Link href='/income-tax-return-6'>Income Tax Return - 6</Link>
                </Menu.Item>
                <Menu.Item key='setting:18'>
                  <Link href='/income-tax-return-7'>Income Tax Return - 7</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='Annual Compliances'>
                <Menu.Item key='setting:19'>
                  <Link href='/private-company-compliances'>
                    Private Limited Company
                  </Link>
                </Menu.Item>
                <Menu.Item key='setting:20'>
                  <Link href='/limited-partnership-compliances'>
                    LLP Annual Partnership
                  </Link>
                </Menu.Item>
                <Menu.Item key='setting:21'>
                  <Link href='/other-compliances'>
                    Partnership Firm, Society, Trust, NGO
                  </Link>
                </Menu.Item>
                <Menu.Item key='setting:22'>
                  <Link href='/import-export-code'>Import Export Code</Link>
                </Menu.Item>
                <Menu.Item key='setting:23'>
                  <Link href='/iso'>ISO Registration</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='Payroll'>
                <Menu.Item key='setting:24'>
                  <Link href='/provident-fund'>PF Registration</Link>
                </Menu.Item>
                <Menu.Item key='setting:25'>PF Return Filing</Menu.Item>
                <Menu.Item key='setting:26'>
                  <Link href='/employees-state-insurance'>
                    ESI Registration
                  </Link>
                </Menu.Item>
                <Menu.Item key='setting:27'>
                  <Link href='/employees-state-insurance-return'>
                    ESI Return Filing
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='Others'>
                <Menu.Item key='setting:29'>PAN Application</Menu.Item>
                <Menu.Item key='setting:30'>TAN Application</Menu.Item>
                <Menu.Item key='setting:31'>80G Registration</Menu.Item>
                <Menu.Item key='setting:32'>
                  <Link href='/tax-deduction-at-source'>TDS Filing</Link>
                </Menu.Item>
                <Menu.Item key='setting:33'>Excise Return Filing</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className='action'>
            <a href='tel:+91-983-294-9193'>
              <Button
                type='primary'
                icon={<PhoneOutlined rotate={90} />}
                className='call'>
                +91-983-294-9193
              </Button>
            </a>
          </div>
          <div className='collapse-menu'>
            <DrawerComponent />
          </div>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderComponent;

import React, { useState } from 'react';

import './SideBar.css';

import { Layout, Menu } from 'antd';
import {
    MenuOutlined,
    CloseOutlined,
    FileTextOutlined,
    CloudOutlined,
    IdcardOutlined,
    CreditCardOutlined,
    GoogleOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, collapse] = useState(true);

    return (
        <Sider collapsible collapsed={collapsed} trigger={null}>
            {collapsed ? 
            <MenuOutlined className="toggle" onClick={() => collapse(!collapsed)}/> :
            <CloseOutlined className="toggle" onClick={() => collapse(!collapsed)}/>}

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<FileTextOutlined />}>
                    Tasks
                </Menu.Item>
                <Menu.Item key="2" icon={<CloudOutlined />}>
                    Proxies
                </Menu.Item>
                <Menu.Item key="3" icon={<IdcardOutlined />}>
                    Contacts
                </Menu.Item>
                <Menu.Item key="4" icon={<CreditCardOutlined />}>
                    Cards
                </Menu.Item>
                <Menu.Item key="5" icon={<GoogleOutlined />}>
                    ReCaptcha
                </Menu.Item>
                <Menu.Item key="6" icon={<SettingOutlined />}>
                    Settings
                </Menu.Item>
                <Menu.Item key="7" icon={<LogoutOutlined />}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar;
import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, Dropdown, Avatar, Tooltip, Select } from "antd";
import {
  DashboardOutlined,
  LockOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  StopOutlined,
  ToolOutlined,
  UserOutlined,
  CalendarOutlined,
  BellOutlined,
  ContactsOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  AppstoreOutlined,
  GiftOutlined,
  MenuFoldOutlined,
  ProfileOutlined,
  InboxOutlined,
  ScheduleOutlined,
  SunOutlined,
  MoonOutlined,
  BellFilled,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ukicon from "../../assets/uk-icon.svg";
import chinaicon from "../../assets/china-flag-icon.svg";
import useLanguage, { Language } from "../../hooks/useLanguage";
import { useTheme } from "../../contexts/ThemeContext";

const { Header, Sider, Content } = Layout;

const userMenuItems = [
  {
    key: "profile",
    icon: <ProfileOutlined />,
    label: "Profile",
  },
  {
    key: "inbox",
    icon: <InboxOutlined />,
    label: "Inbox",
  },
  {
    key: "taskManager",
    icon: <ScheduleOutlined />,
    label: "Task Manager",
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    key: "support",
    icon: <QuestionCircleOutlined />,
    label: "Support",
  },
  {
    key: "logout",
    icon: <CloseCircleOutlined />,
    label: "Logout",
  },
];

const languages = [
  { 
    code: 'en', 
    name: 'English', 
    flagUrl: ukicon
  },
  { 
    code: 'zh', 
    name: '中文', 
    flagUrl: chinaicon
  },
];

const MainPageLayout: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const navigate = useNavigate

  const [currentLang, setCurrentLang] = useState<Language>();

  const handleLanguageChange = (value: string) => {
    setCurrentLang(value as Language);
    changeLanguage(value as Language);

    console.log(`Language changed to: ${value}`);
  };

  useEffect(() => {
    setCurrentLang(language);
    
  
  }, [language]);



  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">Spark</span>
            <span className="logo-text">Minds</span>
          </div>
        </div>
        <div className="header-right">
          <Select
            style={{ width: 150 }}
            value={currentLang}
            onChange={handleLanguageChange}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            suffixIcon={<GlobalOutlined />}
          >
            {languages.map((lang) => (
              <Select.Option key={lang.code} value={lang.code}>
                <img
                  src={lang.flagUrl}
                  alt={`${lang.name} flag`}
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    verticalAlign: "middle",
                  }}
                />
                {lang.name}
              </Select.Option>
            ))}
          </Select>
          <Tooltip title="Toggle theme">
            <Button
              type="text"
              icon={theme === 'light' ? <SunOutlined /> : <MoonOutlined />}
              className="theme-toggle"
              onClick={toggleTheme}
            />
          </Tooltip>
          <Tooltip title="Notifications">
            <Button
              type="text"
              icon={<BellFilled />}
              className="notification-btn"
            />
          </Tooltip>
          <Dropdown
            menu={{ items: userMenuItems }}
            placement="bottomRight"
            trigger={["click"]}
            className="user-dropdown"
          >
            <div className="user-profile">
              <Avatar className="user-avatar">JT</Avatar>
              <div className="user-info">
                <div className="user-name">Json Taylor</div>
                <div className="user-role">Web Designer</div>
              </div>
            </div>
          </Dropdown>
          <Button
            type="text"
            icon={<SettingOutlined />}
            className="settings-btn"
          />
        </div>
      </Header>
      <Layout>
        <Sider width={250} className="app-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-section-title">MAIN</div>
            <Menu mode="inline" defaultSelectedKeys={["errorPage"]}>
              <Menu.Item key="dashboards" icon={<DashboardOutlined />}>
                Dashboards
              </Menu.Item>
            </Menu>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">PAGES</div>
            <Menu mode="inline" defaultSelectedKeys={["errorPage"]}>
              <Menu.Item key="authentication" icon={<LockOutlined />}>
                Authentication
              </Menu.Item>
              <Menu.SubMenu key="sub2" icon={<LockOutlined />} title="Authentication">
                <Menu.Item key="Login"><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="Register">Register</Menu.Item>
                <Menu.Item key="88">Read</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="errorPage" icon={<CloseCircleOutlined />}>
                Error Page
              </Menu.Item>
              <Menu.Item key="comingSoon" icon={<ClockCircleOutlined />}>
                Coming Soon
              </Menu.Item>
              <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Email">
                <Menu.Item key="6">Inbox</Menu.Item>
                <Menu.Item key="7">Compose</Menu.Item>
                <Menu.Item key="8">Read</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="notFound" icon={<StopOutlined />}>
                Not Found
              </Menu.Item>
              <Menu.Item key="underMaintenance" icon={<ToolOutlined />}>
                Under Maintenance
              </Menu.Item>
              <Menu.Item key="userProfile" icon={<UserOutlined />}>
                User Profile
              </Menu.Item>
              <Menu.Item key="userTimeline" icon={<CalendarOutlined />}>
                User Timeline
              </Menu.Item>
              <Menu.Item key="notifications" icon={<BellOutlined />}>
                Notifications
              </Menu.Item>
              <Menu.Item key="contacts" icon={<ContactsOutlined />}>
                Contacts
              </Menu.Item>
              <Menu.Item key="faq" icon={<QuestionCircleOutlined />}>
                Faq
              </Menu.Item>
              <Menu.Item key="accountSettings" icon={<SettingOutlined />}>
                Account settings
              </Menu.Item>
            </Menu>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">GENERAL</div>
            <Menu mode="inline">
              <Menu.Item key="uiKits" icon={<AppstoreOutlined />}>
                UI Kits
              </Menu.Item>
              <Menu.Item key="bonusUi" icon={<GiftOutlined />}>
                Bonus UI
              </Menu.Item>
            </Menu>
          </div>

          <div className="sidebar-footer">
            <Button type="text" icon={<MenuFoldOutlined />} />
          </div>
        </Sider>
        <Content className="app-content">
          {/* <div className="page-header">Error Page</div>
          <div className="error-container">
            <h1 className="error-title">Error</h1>
            <p className="error-message">Oops, The page you are looking for is not available</p>
            <p className="error-help">You can redirect to the home page by clicking below button.</p>
            <Button type="primary" className="back-home-btn">BACK TO HOME</Button>
          </div> */}
          <div className="page-header">{t('errors.header')}</div>
          <div className="error-container">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;

import React from 'react';
import { Button, Row, Col, Typography, Layout } from 'antd';
import {
  NotificationOutlined,
  BarChartOutlined,
  TeamOutlined,
  MessageOutlined,
  SettingOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <NotificationOutlined />,
      title: 'Robust Handling, Persistence',
      description: 'Efficiently manage and track all your business processes with our robust handling system.',
    },
    {
      icon: <MessageOutlined />,
      title: 'Comprehensive Event Management',
      description: 'Streamline your event planning and execution with our comprehensive management tools.',
    },
    {
      icon: <TeamOutlined />,
      title: 'Community Engagement Tools',
      description: 'Foster community growth with our specialized engagement features and analytics.',
    },
    {
      icon: <SettingOutlined />,
      title: 'API Functionality',
      description: 'Access powerful APIs to integrate and extend your platform capabilities.',
    },
    {
      icon: <BarChartOutlined />,
      title: 'Integrated Analytics Insights',
      description: 'Make data-driven decisions with our integrated analytics and reporting tools.',
    },
    {
      icon: <LineChartOutlined />,
      title: 'AI/ML marketing tools',
      description: 'Leverage advanced AI/ML capabilities to optimize your marketing strategies.',
    },
  ];

  return (
    <Layout className="layout">
      
      <Content>
      
        <div className="landing-page">
          <div className="container">
            <section className="hero-section">
              <div className="content">
                <Title level={1}>
                  Build and Monetize Your Community Effortlessly.
                </Title>
                <Paragraph>
                  Offer subscription-based access and exclusive experiences to connect with and reward your dedicated members.
                </Paragraph>
                <div className="action-buttons">
                  <Button type="primary" size="large">
                    Learn more
                  </Button>
                  <Button size="large">Get started</Button>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="/assets/hero-image.png" 
                  alt="Platform demonstration" 
                />
                <div className="floating-icons chart">
                  <img src="/assets/chart-icon.png" alt="Analytics" />
                </div>
                <div className="floating-icons message">
                  <img src="/assets/message-icon.png" alt="Communication" />
                </div>
                <div className="floating-icons stats">
                  <img src="/assets/stats-icon.png" alt="Statistics" />
                </div>
              </div>
            </section>

            <section className="features-section">
              <Title level={2}>Why Use Our Platform?</Title>
              <Row gutter={[32, 32]} className="features-grid">
                {features.map((feature, index) => (
                  <Col xs={24} sm={12} lg={8} key={index}>
                    <div className="feature-card">
                      <div className="icon-wrapper">
                        {feature.icon}
                      </div>
                      <Title level={3}>{feature.title}</Title>
                      <Paragraph>{feature.description}</Paragraph>
                    </div>
                  </Col>
                ))}
              </Row>
            </section>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default LandingPage; 
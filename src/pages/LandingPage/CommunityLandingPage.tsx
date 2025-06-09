import { Button, Card, Row, Col, Typography, Space, Collapse, Input } from 'antd';
import { 
  PlayCircleOutlined, 
  TeamOutlined, 
  TrophyOutlined,
  RocketOutlined,
  StarOutlined,
  BulbOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import Navbar from '../../components/Navbar';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CommunityLandingPage: React.FC = () => {
    const features: FeatureCardProps[] = [
      {
        icon: <TeamOutlined />,
        title: 'Community Building',
        description: 'Connect with like-minded individuals and build lasting relationships in our vibrant community platform.'
      },
      {
        icon: <TrophyOutlined />,
        title: 'Achievement System',
        description: 'Track your progress and earn rewards as you engage with the community and complete challenges.'
      },
      {
        icon: <BulbOutlined />,
        title: 'Knowledge Sharing',
        description: 'Share your expertise and learn from others through our collaborative learning environment.'
      },
      {
        icon: <RocketOutlined />,
        title: 'Growth Opportunities',
        description: 'Accelerate your personal and professional development with our growth-focused programs.'
      },
      {
        icon: <StarOutlined />,
        title: 'Quality Content',
        description: 'Access premium content curated by experts to enhance your skills and knowledge.'
      },
      {
        icon: <PlayCircleOutlined />,
        title: 'Interactive Learning',
        description: 'Engage with interactive content and real-time discussions to maximize your learning experience.'
      }
    ];
  
    const faqItems = [
      {
        key: '1',
        question: 'Why should I get a subscription?',
        answer: 'A subscription gives you access to premium features, exclusive content, and priority support. You'll be able to grow your community faster and more effectively.'
      },
      {
        key: '2',
        question: 'Why is Convilu so different?',
        answer: 'Convilu combines powerful community management tools with innovative monetization features, all in one platform. Our AI-powered insights help you make better decisions.'
      },
      {
        key: '3',
        question: 'How do I join a community?',
        answer: 'Simply browse our community directory, find one that interests you, and click "Join". You can also create your own community in just a few clicks.'
      },
      {
        key: '4',
        question: 'Why YKT5?',
        answer: 'YKT5 is our unique engagement algorithm that helps communities grow organically. It analyzes member behavior to suggest the most effective engagement strategies.'
      }
    ];
  
    const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
      <Card 
        className="feature-card"
        hoverable
      >
        <div className="card-content">
          <div className="card-icon">
            {icon}
          </div>
          <Title level={4} className="card-title">
            {title}
          </Title>
          <Paragraph className="card-description">
            {description}
          </Paragraph>
        </div>
      </Card>
    );
  
    return (
        <>
            <Navbar />
            <div className="landing-page">
                
                {/* Hero Section */}
                <div className="hero-section">
                <div className="floating-elements">
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                </div>
                
                <div className="hero-content">
                    <Row align="middle" gutter={[48, 48]}>
                    <Col xs={24} lg={12}>
                        <div className="hero-text">
                        <Title className="hero-title">
                            Build and Monetise Your Community 
                            <span className="highlight"> Effortlessly</span>
                        </Title>
                        
                        <Paragraph className="hero-description">
                            Create engaging communities, connect with your audience, and turn your passion into profit with our comprehensive platform designed for modern creators.
                        </Paragraph>
                        
                        <Space size="large" className="hero-buttons">
                            <Button 
                            type="primary" 
                            size="large"
                            className="primary-btn"
                            icon={<RocketOutlined />}
                            >
                            Get Started
                            </Button>
                            
                            <Button 
                            size="large"
                            className="secondary-btn"
                            icon={<PlayCircleOutlined />}
                            >
                            Watch Demo
                            </Button>
                        </Space>
                        </div>
                    </Col>
                    
                    <Col xs={24} lg={12}>
                        <div className="hero-image">
                        <div className="hero-image-placeholder">
                            <TeamOutlined style={{ fontSize: '80px', color: 'rgba(255, 255, 255, 0.8)' }} />
                        </div>
                        </div>
                    </Col>
                    </Row>
                </div>
                </div>
        
                {/* Features Section */}
                <div className="features-section">
                <div className="features-container">
                    <div className="section-header">
                    <Title level={2} className="section-title">
                        Why Use Our Platform?
                    </Title>
                    <Paragraph className="section-description">
                        Discover the powerful features that make community building and monetization effortless and effective.
                    </Paragraph>
                    </div>
                    
                    <Row gutter={[32, 32]}>
                    {features.map((feature, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                        <FeatureCard {...feature} />
                        </Col>
                    ))}
                    </Row>
                </div>
                </div>
        
                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="faq-container">
                        <Row gutter={[48, 48]} align="middle">
                            <Col xs={24} lg={12}>
                                <div className="faq-content">
                                    <Title level={2} className="faq-title">
                                        Addressing Common Questions
                                    </Title>
                                    <div className="faq-questions">
                                        {faqItems.map(item => (
                                            <div key={item.key} className="faq-item">
                                                <Button 
                                                    type="text" 
                                                    className="faq-question-btn"
                                                    onClick={() => {}}
                                                >
                                                    {item.question}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} lg={12}>
                                <div className="faq-image">
                                    <img src="/assets/girl-with-phone.png" alt="Girl using phone" className="girl-image" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="footer-section">
                    <div className="footer-container">
                        <Row gutter={[48, 32]}>
                            <Col xs={24} md={8}>
                                <div className="footer-brand">
                                    <div className="footer-logo">
                                        <img src="/assets/logo.svg" alt="Convilu" className="brand-logo" />
                                        <Text className="brand-text">CONVILU</Text>
                                    </div>
                                    <Paragraph className="brand-description">
                                        Join us in creating growth-driven communities. Turn your passion into a thriving business.
                                    </Paragraph>
                                    <div className="social-links">
                                        <a href="#" className="social-link">
                                            <img src="/assets/icon-fb.svg" alt="Facebook" />
                                        </a>
                                        <a href="#" className="social-link">
                                            <img src="/assets/icon-youtube.svg" alt="YouTube" />
                                        </a>
                                        <a href="#" className="social-link">
                                            <img src="/assets/icon-twitter.svg" alt="Twitter" />
                                        </a>
                                        <a href="#" className="social-link">
                                            <img src="/assets/icon-instagram.svg" alt="Instagram" />
                                        </a>
                                    </div>
                                    <div className="newsletter-signup">
                                        <Text className="newsletter-text">Subscribe to our newsletter for news alerts</Text>
                                        <div className="newsletter-form">
                                            <Input placeholder="Email address" className="newsletter-input" />
                                            <Button type="primary" className="newsletter-btn">Join</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={16}>
                                <Row gutter={[32, 32]}>
                                    <Col xs={8}>
                                        <div className="footer-links">
                                            <Title level={5}>Explore</Title>
                                            <ul>
                                                <li><a href="#">Overview</a></li>
                                                <li><a href="#">Features</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">Careers</a></li>
                                                <li><a href="#">Help</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className="footer-links">
                                            <Title level={5}>Company</Title>
                                            <ul>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Press</a></li>
                                                <li><a href="#">Partnerships</a></li>
                                                <li><a href="#">Resources</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className="footer-links">
                                            <Title level={5}>Community</Title>
                                            <ul>
                                                <li><a href="#">Help</a></li>
                                                <li><a href="#">Guidelines</a></li>
                                                <li><a href="#">Featured</a></li>
                                                <li><a href="#">Discussions</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </div>
        </>
    );
  };
  
  export default CommunityLandingPage;
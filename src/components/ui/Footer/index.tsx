import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons';
import styles from '../../../styles/Footer/Footer.module.scss';
import { FooterProps, FooterSection, SocialMediaLink, NewsletterFormData } from '../../../types/Footer/footer.types';

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const socialLinks: SocialMediaLink[] = [
    {
      platform: 'Facebook',
      href: '#',
      icon: <FacebookOutlined />
    },
    {
      platform: 'Twitter',
      href: '#',
      icon: <TwitterOutlined />
    },
    {
      platform: 'Instagram',
      href: '#',
      icon: <InstagramOutlined />
    },
    {
      platform: 'LinkedIn',
      href: '#',
      icon: <LinkedinOutlined />
    }
  ];

  const pagesSection: FooterSection = {
    title: 'Pages',
    links: [
      { key: 'home', label: 'Home', href: '/' },
      { key: 'home-v2', label: 'Home V2', href: '/home-v2' },
      { key: 'about', label: 'About', href: '/about' },
      { key: 'courses', label: 'Courses', href: '/courses' },
      { key: 'individual-course', label: 'Individual course', href: '/course' }
    ]
  };

  const contentSection: FooterSection = {
    title: '',
    links: [
      { key: 'video-page', label: 'Video Page', href: '/video' },
      { key: 'resource-center', label: 'Resource center', href: '/resources' },
      { key: 'blog-post', label: 'Blog Post', href: '/blog' },
      { key: 'event', label: 'Event', href: '/events' },
      { key: 'individual-event', label: 'Individual event', href: '/event' }
    ]
  };

  const communitySection: FooterSection = {
    title: '',
    links: [
      { key: 'teachers', label: 'Teachers', href: '/teachers' },
      { key: 'individual-teacher', label: 'Individual teacher', href: '/teacher' },
      { key: 'contact', label: 'Contact', href: '/contact' },
      { key: 'academy-memberstack', label: 'How to connect Academy with Memberstack', href: '/memberstack-guide' }
    ]
  };

  const utilitySection: FooterSection = {
    title: 'Utility Pages',
    links: [
      { key: 'styleguide', label: 'Styleguide', href: '/styleguide' },
      { key: '404', label: '404 Not Found', href: '/404' },
      { key: 'password-protected', label: 'Password Protected', href: '/password' },
      { key: 'licenses', label: 'Licenses', href: '/licenses' }
    ]
  };

  const handleNewsletterSubmit = async () => {
    if (!email) {
      message.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      message.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const renderFooterSection = (section: FooterSection, showTitle: boolean = true) => (
    <div className={styles.linkSection}>
      {showTitle && section.title && (
        <h4 className={styles.sectionTitle}>{section.title}</h4>
      )}
      <ul className={styles.linkList}>
        {section.links.map((link) => (
          <li key={link.key} className={styles.linkItem}>
            <a href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.footerContent}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Left Column - Logo & Social */}
          <div className={styles.leftColumn}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                📚
              </div>
              <span className={styles.logoText}>Academy</span>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center Column - Links */}
          <div className={styles.centerColumn}>
            {renderFooterSection(pagesSection)}
            {renderFooterSection(contentSection, false)}
            {renderFooterSection(communitySection, false)}
          </div>

          {/* Right Column - Utility Pages */}
          <div className={styles.rightColumn}>
            <h4 className={styles.utilityTitle}>{utilitySection.title}</h4>
            <ul className={styles.utilityLinks}>
              {utilitySection.links.map((link) => (
                <li key={link.key} className={styles.utilityItem}>
                  <a href={link.href} className={styles.utilityLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterIcon}>
            <MailOutlined />
          </div>

          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>Join our Newsletter</h3>
            <p className={styles.newsletterDescription}>
              Lorem ipsum dolor sit amet, consectetur adi.
            </p>
          </div>

          <div className={styles.newsletterForm}>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              onPressEnter={handleNewsletterSubmit}
            />
            <Button
              type="primary"
              className={styles.subscribeButton}
              onClick={handleNewsletterSubmit}
              loading={loading}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            Copyright © Academy |{' '}
            <a href="#" className={styles.copyrightLink}>
              Designed by BRIX Templates
            </a>
            {' '}- Powered by{' '}
            <a href="#" className={styles.copyrightLink}>
              Webflow
            </a>
          </div>

          <div className={styles.paymentMethods}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png"
              alt="PayPal"
              className={styles.paymentIcon}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe"
              className={styles.paymentIcon}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/200px-Mastercard-logo.png"
              alt="Mastercard"
              className={styles.paymentIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
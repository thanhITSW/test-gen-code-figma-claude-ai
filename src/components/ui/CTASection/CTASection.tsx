import React from 'react';
import styles from '../../../styles/components/CTASection/CTASection.module.scss';
import { CTASectionProps } from './CTASection.types';

const CTASection: React.FC<CTASectionProps> = ({
  title = "Grow your Career!",
  subtitle = "Start Learning With Academy.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quisque integer elementum egestas aliquet tincidunt.",
  buttonText = "OUR COURSES",
  onButtonClick,
  className
}) => {
  return (
    <section className={`${styles.ctaSection} ${className || ''}`}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <h3 className={styles.ctaSubtitle}>{subtitle}</h3>
          <p className={styles.ctaDescription}>{description}</p>
          <button className={styles.ctaButton} onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
        <div className={styles.ctaIllustration}>
          <div className={styles.illustrationWrapper}>
            {/* Main video/laptop */}
            <div className={styles.laptopMockup}>
              <div className={styles.laptopScreen}>
                <div className={styles.playButton}></div>
                <div className={styles.videoList}>
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className={styles.phoneMockup}>
              <div className={styles.phoneContent}>
                <div className={styles.phoneLine} />
                <div className={styles.phoneLine} />
                <div className={styles.phoneLineShort} />
              </div>
            </div>
            {/* Floating doc */}
            <div className={styles.docMockup}>
              <div className={styles.docLine} />
              <div className={styles.docLine} />
              <div className={styles.docLineShort} />
            </div>
            {/* Chart */}
            <div className={styles.chartMockup}>
              <div className={styles.chartBar} style={{ height: '40%' }} />
              <div className={styles.chartBar} style={{ height: '60%' }} />
              <div className={styles.chartBar} style={{ height: '80%' }} />
              <div className={styles.chartBar} style={{ height: '100%' }} />
              <div className={styles.chartBar} style={{ height: '70%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
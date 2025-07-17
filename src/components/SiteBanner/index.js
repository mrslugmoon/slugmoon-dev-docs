// src/components/SiteBanner/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // We'll create this next

export default function SiteBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={clsx(styles.siteBannerContainer)}>
      <div className={styles.siteBannerContent}>
        <span className={styles.siteBannerText}>
          ⚠️ Docusaurus v3 is out! 🥳
        </span>
        <button
          className={styles.siteBannerCloseButton}
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
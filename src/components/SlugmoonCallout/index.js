// src/components/SlugmoonCallout/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // This CSS module is crucial for styling

// Use a direct image path for the slugmoon logo
const SlugmoonLogo = '/img/icon.png'; // Path to your Slugmoon logo image

export default function SlugmoonCallout({ children, title = 'Slugmoon' }) {
  return (
    <div className={clsx(styles.slugmoonCalloutContainer)}>
      <div className={styles.slugmoonCalloutHeader}>
        {/* Use the direct image tag here */}
        <img src={SlugmoonLogo} alt="Slugmoon" className={styles.slugmoonIcon} />

        <span className={styles.slugmoonCalloutTitle}>{title}</span>
      </div>
      <div className={styles.slugmoonCalloutContent}>
        {children}
      </div>
    </div>
  );
}
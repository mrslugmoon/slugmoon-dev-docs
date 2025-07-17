// src/components/GradientText/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // Import the CSS module

export default function GradientText({ children, className }) {
  return (
    <span className={clsx(styles.gradientText, styles['gradient-text-animated'], className)}>
      {children}
    </span>
  );
}
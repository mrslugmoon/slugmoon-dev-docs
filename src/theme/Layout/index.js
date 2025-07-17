// src/theme/Layout/index.js
import React from 'react';
import clsx from 'clsx'; // Make sure this is imported if used
import OriginalLayout from '@theme-original/Layout';
import styles from './styles.module.css';

export default function LayoutWrapper(props) {
  return (
    <>
      <OriginalLayout {...props} >
        <div className={styles.backgroundPattern}>
          <div
            className={styles.backgroundCircles}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, var(--roblox-blue) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, var(--roblox-orange) 0%, transparent 50%)
              `
            }}
          />
        </div>
        {props.children}
      </OriginalLayout>
    </>
  );
}
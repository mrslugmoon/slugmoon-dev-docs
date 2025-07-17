// src/components/RobloxButton/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function RobloxButton({
  children,
  onClick,
  disabled = false,
  className,
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.robloxButton,
        styles.gradientRobloxButton,
        disabled && styles.disabled,
        className
      )}
    >
      <span className={clsx(styles.robloxButtonContent)}>
        {children}
      </span>
    </button>
  );
}
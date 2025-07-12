// src/components/GradientText/index.js
import React from 'react';
import clsx from 'clsx'; // Import clsx for easily combining CSS classes
import styles from './styles.module.css'; // Import our CSS module

/**
 * A reusable React component for displaying gradient text.
 * Can be animated or display a static custom gradient.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The text content to display.
 * @param {string} [props.gradient] - A custom CSS linear-gradient string (e.g., 'linear-gradient(to right, red, blue)').
 * @param {boolean} [props.animated=false] - Whether to apply the animation effect.
 */
export default function GradientText({ children, gradient, animated = false }) {
  // Determine the inline style based on props.
  // If 'animated' is true, the animation class will handle styling.
  // If 'animated' is false AND a 'gradient' prop is provided, apply it as inline style.
  const inlineStyle = !animated && gradient ? {
    background: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text', // Standard property for compatibility
    WebkitTextFillColor: 'transparent',
    color: 'transparent', // Standard property for compatibility
    display: 'inline-block',
  } : {}; // No inline style if animated or no custom gradient

  return (
    <span
      // Conditionally apply CSS classes using clsx
      className={clsx({
        [styles.gradientTextAnimated]: animated, // Apply animated class if 'animated' prop is true
        // If you had a default non-animated style, you might apply it here
        // [styles.myDefaultGradient]: !animated && !gradient
      })}
      style={inlineStyle} // Apply inline styles if determined above
    >
      {children}
    </span>
  );
}
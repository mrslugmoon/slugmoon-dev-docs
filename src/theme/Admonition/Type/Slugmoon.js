// src/theme/Admonition/Type/Slugmoon.js
import React from 'react';
import clsx from 'clsx';
// Import the base Admonition component from Docusaurus
import Admonition from '@theme/Admonition';

// Path to your image logo
const SlugmoonLogo = '/img/icon.png';

export default function AdmonitionTypeSlugmoon(props) {
  // The 'Admonition' component automatically handles styling based on its 'type' prop.
  // We'll pass our custom 'slugmoon' type and then customize the icon and title.

  // The icon to display in the header of your custom admonition
  const customIcon = (
    <img src={SlugmoonLogo} alt="Slugmoon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
  );

  return (
    <Admonition
      {...props}
      type="warning" // <--- CRITICAL: Set the type to 'warning' to inherit its styling
      // You can keep type="slugmoon" if you define custom CSS for it,
      // but to look *like* the warning, use type="warning" or whatever type you want to mimic.
      className={clsx(props.className, 'admonition-custom-slugmoon')} // Add a custom class for further styling if needed
      icon={customIcon} // Your custom icon
      title={props.title || 'Slugmoon'} // Use the passed title or default to 'Slugmoon'
    >
      {props.children}
    </Admonition>
  );
}
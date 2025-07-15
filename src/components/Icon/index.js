// src/components/Icon/index.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons you plan to use
// You can import all solid icons if you prefer, but it increases bundle size
// import { fas } from '@fortawesome/free-solid-svg-icons'; // All solid icons
// library.add(fas); // Add all solid icons to the library

// Or import specific icons you know you'll use to keep bundle size small
import { faCheck, faTimes, faInfoCircle, faExclamationTriangle, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'; // Example brand icons

// It's good practice to add them to the Font Awesome library once
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheck, faTimes, faInfoCircle, faExclamationTriangle, faHome, faUser, faGithub, faDiscord);


export default function Icon({ name, className, size, color }) {
  // Font Awesome icon names typically start with 'fa' and then the icon name.
  // We need to pass the actual icon object to the FontAwesomeIcon component.
  // The 'icon' prop can accept an array [prefix, iconName] or the icon object itself.
  // For simplicity, if you're importing specific icons, you can map them here.

  // A common approach is to use the 'icon' prop with a string if you added them to the global library
  // or use an object like this:
  const iconMap = {
    check: faCheck,
    cross: faTimes,
    info: faInfoCircle,
    warning: faExclamationTriangle,
    home: faHome,
    user: faUser,
    github: faGithub,
    discord: faDiscord,
    // Add more mappings here as you add more imports
  };

  const selectedIcon = iconMap[name.toLowerCase()]; // Convert name to lowercase for consistent lookup

  if (!selectedIcon) {
    console.warn(`Icon "${name}" not found. Please check the icon name or import it.`);
    return null; // Or return a fallback icon
  }

  return (
    <FontAwesomeIcon
      icon={selectedIcon}
      className={className}
      size={size} // e.g., "lg", "2x", "3x"
      color={color} // e.g., "blue", "#ff0000"
    />
  );
}
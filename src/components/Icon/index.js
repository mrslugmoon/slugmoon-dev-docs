// src/components/Icon/index.js - NEW STRATEGY WITH @fortawesome/react-fontawesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the component

// --- IMPORTANT: DIRECTLY IMPORT EVERY SPECIFIC ICON YOU USE ---
// These are the actual icon definition objects.
// SOLID ICONS (fas)
import {
  faCheck,
  faUser,
  faFile, // For 'file' or 'paper'
  faInfoCircle, // For 'info'
  faTimes, // For 'cross'
  faExclamationTriangle, // For 'warning'
  faHome,
  faCog,
  faDownload,
  faUpload,
  faBook,
  faEnvelope,
  faArrowRight,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';

// BRAND ICONS (fab)
import {
  faGithub,
  faDiscord,
  faTwitter,
  faXTwitter,
  faInstagram,
  faFacebook,
  faLinkedinIn, // Note: LinkedIn has '-in'
  faYoutube,
  faPatreon
} from '@fortawesome/free-brands-svg-icons';

// REGULAR ICONS (far) - Uncomment and add if you use specific outline icons
// import { faStar, faBookmark } from '@fortawesome/free-regular-svg-icons';


// --- Mapping from your markdown/input name to the exact Font Awesome kebab-case name string ---
const inputNameToFaNameMap = {
  'paper': 'file',
  'cross': 'times',
  'info': 'info-circle',
  'warning': 'exclamation-triangle',
  'linkedin': 'linkedin-in',
  // Add other aliases you use in your markdown/props
};

// --- Mapping from Font Awesome kebab-case name string to the directly imported icon OBJECT ---
const faNameToIconObjectMap = {
  // Solid Icons
  'check': faCheck,
  'gamepad': faGamepad, // For 'Place ID' icon
  'user': faUser,
  'file': faFile,
  'info-circle': faInfoCircle,
  'times': faTimes,
  'warning-fa': faExclamationTriangle,
  'home': faHome,
  'cog': faCog,
  'download': faDownload,
  'upload': faUpload,
  'book': faBook,
  'envelope': faEnvelope,
  'arrow-right': faArrowRight,

  // Brand Icons
  'github': faGithub,
  'discord': faDiscord,
  'twitter': faTwitter,
  'x-twitter': faXTwitter,
  'instagram': faInstagram,
  'facebook': faFacebook,
  'linkedin-in': faLinkedinIn,
  'youtube': faYoutube,
  'patreon': faPatreon,

  // Regular Icons (uncomment if using)
  // 'star': faStar,
  // 'bookmark': faBookmark
};


export default function Icon({ name, className, size, color }) {
  let cleanedInputName = name.toLowerCase();

  // Clean the input name (still useful if Markdown sends something unexpected)
  cleanedInputName = cleanedInputName
    .replace(/^fa-(solid|brands|regular)\s+/, '')
    .replace(/^fa-/, '')
    .trim();

  // Get the exact Font Awesome name (e.g., 'info' -> 'info-circle')
  const faIconName = inputNameToFaNameMap[cleanedInputName] || cleanedInputName;

  // Retrieve the directly imported icon *object*
  const iconDefinition = faNameToIconObjectMap[faIconName];

  if (!iconDefinition) {
    console.warn(
      `Icon definition for "${name}" (Cleaned: "${cleanedInputName}", FA name: "${faIconName}") not found in faNameToIconObjectMap. ` +
      `Please ensure: 1. It's correctly imported from '@fortawesome/free-*-svg-icons'. ` +
      `2. It's added to 'faNameToIconObjectMap' in src/components/Icon/index.js. ` +
      `3. Your alias in 'inputNameToFaNameMap' is correct if applicable.`
    );
    // Render a fallback or an empty span if icon is not found
    return <span className={className} style={{ color }}>[Icon: {name} (missing)]</span>;
  }

  // Determine Font Awesome size prop (e.g., 'lg', '2x')
  let faSize = '';
  if (size === 'sm') faSize = 'sm';
  else if (size === 'lg') faSize = 'lg';
  else if (size === 'xl') faSize = 'xl';
  else if (size === '2x') faSize = '2x';
  // Add other sizes if you use them, e.g., '3x', '4x', etc.

  return (
    <FontAwesomeIcon
      icon={iconDefinition} // Pass the imported icon object here
      className={className}
      size={faSize} // Use the specific size prop
      style={{ color: color, verticalAlign: 'middle', marginLeft: '0.2em', marginRight: '0.2em' }}
    />
  );
}
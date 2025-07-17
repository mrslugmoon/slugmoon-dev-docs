import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Admonition from '@theme/Admonition';

function MyCustomAdmonition(props) {
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

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'slugmoon': MyCustomAdmonition,
};

export default AdmonitionTypes;
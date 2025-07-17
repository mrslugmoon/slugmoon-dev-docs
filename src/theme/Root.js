// src/theme/Root.js

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'; // Core library

// Import the specific icon packs you need
//import 'fab' for brand icons (e.g., discord, github)
import { fab } from '@fortawesome/free-brands-svg-icons';
//mport 'fas' for solid icons (e.g., check, info, file, user, paper, moon)
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the imported icon packs to the global library
// This makes these icons available to all FontAwesomeIcon components
library.add(fab, fas);

export default function Root({ children }) {
  // Put any global React context providers here
  return <>{children}</>;
}
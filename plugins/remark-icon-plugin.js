// plugins/remark-icon-plugin.js
const { visit } = require('unist-util-visit');

// This regex matches simple :iconName: patterns
// It specifically looks for a colon, followed by one or more alphanumeric characters, hyphens, or underscores,
// followed by another colon.
const ICON_REGEX = /:([a-zA-Z0-9_-]+):/g;

function remarkIconPlugin() {
  return (tree) => {
    // Visit 'text' nodes. This ensures we process only the textual content.
    visit(tree, ['text'], (node, index, parent) => {
      const value = node.value;
      if (!value || typeof value !== 'string') {
        return; // Skip if no value or not a string
      }

      let match;
      const newNodes = [];
      let lastIndex = 0;

      // Ensure the regex's lastIndex is reset for each node
      ICON_REGEX.lastIndex = 0;

      while ((match = ICON_REGEX.exec(value)) !== null) {
        const iconName = match[1]; // The captured icon name (e.g., "check")

        // Add any text before the current match
        if (match.index > lastIndex) {
          newNodes.push({
            type: 'text',
            value: value.substring(lastIndex, match.index),
          });
        }

        // Add the MDX JSX element for the icon
        newNodes.push({
          type: 'mdxJsxTextElement', // For inline elements
          name: 'Icon', // The name of your React component
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'name',
              value: iconName,
            },
          ],
          children: [], // Self-closing component
        });

        // Update lastIndex to the end of the current match
        lastIndex = match.index + match[0].length;
      }

      // Add any remaining text after the last match
      if (lastIndex < value.length) {
        newNodes.push({
          type: 'text',
          value: value.substring(lastIndex),
        });
      }

      // If newNodes were created (meaning an icon was found or text was split),
      // replace the original text node with the new sequence of nodes.
      if (newNodes.length > 0) {
        // Replace the original text node with the new array of nodes
        // This is the crucial part for correct inline replacement.
        // If the parent has children, we replace the current node at its index.
        if (parent && parent.children) {
          parent.children.splice(index, 1, ...newNodes);
        } else {
          // Fallback, though typically not hit for standard text nodes in paragraphs
          Object.assign(node, { type: 'paragraph', children: newNodes });
        }
      }
    });
  };
}

module.exports = remarkIconPlugin;
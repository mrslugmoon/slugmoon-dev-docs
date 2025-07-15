// src/components/NumberedList/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function NumberedListItem({ number, children }) {
  return (
    <div className={styles.numberedListItem}>
      <div className={styles.numberCircle}>
        {number}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default function NumberedList({ children }) {
  // We need to count the items to assign numbers
  // children might be an array of React elements (each item)
  // or a single element if there's only one item.
  const listItems = React.Children.toArray(children);

  return (
    <div className={styles.numberedListContainer}>
      {listItems.map((item, index) => (
        <NumberedListItem key={index} number={index + 1}>
          {item}
        </NumberedListItem>
      ))}
    </div>
  );
}
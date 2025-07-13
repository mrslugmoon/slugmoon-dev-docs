import React, { useState } from 'react';
import styles from './styles.module.css'; // Import the CSS module

function UrlInputBox({ baseUrl = 'https://warp.slugmoon.lol/api/game-info/', placeholder = 'Enter ID (e.g., 123)', buttonText = 'Go to URL' }) {
  const [inputValue, setInputValue] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleInputChange = (event) => {
    // Only allow numbers
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setInputValue(numericValue);
    // Clear generated URL if input changes
    setGeneratedUrl('');
  };

  const handleButtonClick = () => {
    if (inputValue) {
      const url = `${baseUrl}${inputValue}`;
      setGeneratedUrl(url);
      // Optionally, open the URL in a new tab immediately
     // window.open(url, '_blank');
    } else {
      setGeneratedUrl('Please enter a number.');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text" // Use text to allow filtering for numbers in JS
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.inputField}
      />
      <button onClick={handleButtonClick} className={styles.button}>
        {buttonText}
      </button>

      {generatedUrl && (
        <p className={styles.urlOutput}>
          Generated URL: <a href={generatedUrl} target="_blank" rel="noopener noreferrer">{generatedUrl}</a>
        </p>
      )}
    </div>
  );
}

export default UrlInputBox;
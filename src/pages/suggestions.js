// src/pages/suggestions/index.js (or suggestions.js)
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './suggestions.module.css'; // Or './suggestions.module.css'
import RobloxButton from '@site/src/components/RobloxButton'; // Assuming you're using this button

// No need for Font Awesome imports here if you're not putting an icon in these fields
// If you want an icon next to Name/Email, you'd re-introduce it and add to Root.js if new.

export default function SuggestionsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API, log, etc.)
    console.log('Suggestion Form submitted!', { name, email, suggestion });
    // You might want to clear the form after submission
    setName('');
    setEmail('');
    setSuggestion('');
    alert('Thank you for your suggestion!'); // Simple feedback
  };

  return (
    <Layout title="Submit Suggestion" description="Submit your suggestions for Slugmoon.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Submit a Suggestion</h1>
          <p className="hero__subtitle">Your feedback helps us improve!</p>
        </div>
      </header>
      <main>
        <section className={styles.suggestionsSection}>
          <div className="container">
            <form onSubmit={handleSubmit} className={styles.formContainer}>

              {/* Name Input Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  disabled={true} // Disable the name field as per your request
                />
              </div>

              {/* Email Input Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  type="email" // Use type="email" for email validation
                  id="email"
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={true} // Disable the email field as per your request
                />
              </div>

              {/* Suggestion Textarea */}
              <div className={styles.inputWrapper}>
                <label htmlFor="suggestion" className={styles.formLabel}>
                  Your Suggestion
                </label>
                <textarea
                  id="suggestion"
                  className={clsx(styles.formInput, styles.formTextarea)} // Apply formTextarea for min-height
                  rows="6" // Give it a decent number of rows
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Type your detailed suggestion here..."
                  required // Make suggestion field mandatory
                  disabled={true}
                ></textarea>
              </div>

              <div className={styles.submitButtonContainer}>
                <RobloxButton type="submit" disabled={true}>
                  <span>Submit Suggestion</span>
                </RobloxButton>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
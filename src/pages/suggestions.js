import React, { useState } from 'react';
import Layout from '@theme/Layout'; // Import the Docusaurus Layout component
import styles from './suggestions.module.css'; // Import your custom CSS module
import GradientText from '@site/src/components/GradientText';
import BrowserWindow from '@site/src/components/BrowserWindow';
import Typewriter from '@site/src/components/Typewriter';

function Suggestions() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [formStatus, setFormStatus] = useState(''); // To show submission status

  // --- REPLACE THIS WITH YOUR ACTUAL DISCORD WEBHOOK URL ---
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1394013654751645796/g5AZdkH1GaxiTIv7AMeo1XT7lupFTwc5wDFXsm5O7ySeQxh_iGP1gKqCrclYx2wWJDzo';
  // --------------------------------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setFormStatus('Submitting...');

    // Basic validation
    if (!name || !email || !suggestion) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Construct the Discord webhook payload
    const payload = {
      // You can customize the username and avatar here
      // username: "Documentation Suggester",
       avatar_url: "/img/icon.png",
      embeds: [
        {
          title: "New Documentation Suggestion",
          description: suggestion,
          color: 5814783, // A nice blue color (decimal representation of hex #5865F2)
          fields: [
            {
              name: "Name",
              value: name,
              inline: true, // Display side-by-side if space allows
            },
            {
              name: "Email",
              value: email,
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(), // Current timestamp
          footer: {
            text: "Submitted via Slugmoon Docs",
            // icon_url: "https://docusaurus.io/img/docusaurus.png",
          },
        },
      ],
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormStatus('Thank you for your suggestion! It has been sent to Discord.');
        setName('');
        setEmail('');
        setSuggestion('');
      } else {
        // Log error details for debugging
        const errorText = await response.text();
        console.error('Discord webhook failed:', response.status, errorText);
        setFormStatus(`Failed to submit: ${response.status}. Please try again later.`);
      }

    } catch (error) {
      console.error('Network or submission error:', error);
      setFormStatus('An error occurred. Please check your internet connection and try again.');
    }
  };

  return (
 
    <Layout
      title="Suggestions" // Page title in browser tab
      description="Submit your suggestions for improving the documentation." // Meta description
    >
      <main className={styles.suggestionsPage}>
        <h1>{/*<GradientText animated>*/}<Typewriter text="Documentation Suggestions" loop delay={100} eraseDelay={40} />{/*</GradientText></h1> */}</h1>
        <p>We value your feedback! Please let us know what you think needs improving in our documentation.</p>

        <form onSubmit={handleSubmit} className={styles.suggestionForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="suggestion">What needs improving?</label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
              rows="5"
              className={styles.textareaField}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Suggestion
          </button>

          {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
        </form>
      </main>
    </Layout>
  );

}

export default Suggestions;
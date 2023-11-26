// NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! You seem to be lost.</h1>
      <p style={styles.paragraph}>
        The page you are looking for does not exist.
      </p>
      <p style={styles.paragraph}>
        Go back to <Link to="/" style={styles.link}>home</Link>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#555',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'underline',
  },
};

export default NotFound;

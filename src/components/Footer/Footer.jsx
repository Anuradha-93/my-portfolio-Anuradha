import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

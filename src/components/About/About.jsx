// src/components/About/About.js

import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.content}>
          <img
            src="src\assets\images\Profile.png" // Replace with your image path
            alt="Profile"
            className={styles.profilePic}
          />
          <div className={styles.text}>
            <p>Hello! I'm a passionate web developer with a love for creating stunning and functional websites. My goal is to build seamless user experiences and contribute to innovative projects.</p>
            <p>With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing ideas to life through code. I am constantly learning and evolving in this dynamic field.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

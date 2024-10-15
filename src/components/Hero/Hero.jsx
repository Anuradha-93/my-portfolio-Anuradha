// Hero.js
import React from 'react';
import Typing from 'react-typing-effect';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className={styles.highlight}>Anuradha Dhanai</span>
        </h1>
        <Typing
          className={styles.typedText}
          text={[
            'a designer.',
            'a UI/UX Designer.',
            'a React Enthusiast.',
            'a Tech Lover.',
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1500}
          typingDelay={500}
          displayTextRenderer={(text, i) => {
            return (
              <span>
                {text.split('').map((char, index) => {
                  return <span key={index}>{char}</span>;
                })}
              </span>
            );
          }}
        />
        <p>I'm specialized in creating interactive and dynamic web experiences.</p>
        <motion.a
          href="#projects"
          className={styles.btn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

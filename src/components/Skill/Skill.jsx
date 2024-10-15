import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaPhp, FaHtml5 } from 'react-icons/fa'; // Importing icons
import styles from './Skill.module.css';

const skillsData = [
  { name: 'HTML', level: 85, icon: <FaHtml5 /> },
  { name: 'CSS', level: 80, icon: <FaCss3Alt /> },
  { name: 'Javascript', level: 90, icon: <FaJsSquare /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
  { name: 'Git', level: 70, icon: <FaGitAlt /> },
  { name: 'PHP', level: 70, icon: <FaPhp /> },
];

const Skill = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillContainer}>
        {skillsData.map((skill, index) => (
          <motion.div
            className={styles.skillItem}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className={styles.level}>{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

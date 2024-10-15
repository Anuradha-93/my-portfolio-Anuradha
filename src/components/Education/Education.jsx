// Education.js
import React, { useState } from 'react';
import styles from './Education.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// Sample Education Data
const educationData = [
  {
    id: 1,
    institution: 'MCM DAV College, Sector 36, Chandigarh',
    degree: 'Bachelor of Computer Applications(BCA) ',
    year: '2017 - 2020',
    description:
      'Focused on software development, algorithms, and data structures. Completed a capstone project on machine learning applications in web development.',
    logo: '/src/assets/images/mcm.jpg', // Replace with actual logo URLs
  },
  {
    id: 2,
    institution: 'Post Graduate Government College,Sector 11, Chandigarh',
    degree: 'Master of Science in Information Technology(Msc-IT) ',
    year: '2020 - 2022',
    description:
      'Graduated with honors. Active member of the computer club and participated in regional science fairs.',
    logo: '/src/assets/images/pggc.jpg',
  },
  // Add more education items as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className={styles.education}>
      <h1>Education</h1>
      <motion.div
        className={styles.educationContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {educationData.map((item) => (
          <motion.div
            key={item.id}
            className={`${styles.educationItem} ${expandedId === item.id ? styles.expanded : ''}`}
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }} // Slight scale and shadow on hover
            onClick={() => toggleExpand(item.id)}
          >
            <div className={styles.logoContainer}>
              <img src={item.logo} alt={`${item.institution} logo`} />
              <h3>{item.institution}</h3>
            </div>
            <p className={styles.degree}>{item.degree}</p>
            <span className={styles.year}>{item.year}</span>
            <AnimatePresence>
              {expandedId === item.id && (
                <motion.p
                  className={styles.description}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.div
              className={styles.toggleIconContainer}
              animate={{ rotate: expandedId === item.id ? 180 : 0 }} // Rotate icon on expand/collapse
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className={styles.toggleIcon} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;

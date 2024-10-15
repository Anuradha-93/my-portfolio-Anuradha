import React from 'react';
import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.btn}>
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

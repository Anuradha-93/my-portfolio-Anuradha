import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
const projectsData = [
  {
    id: 1,
    title: 'Pizza Mania Static Site',
    description: 'This is a demo Single Page site using HTML, Internal CSS, Javascript.',
    image: "public/assets/images/pizzamania.png",
    link: 'https://anuradha-93.github.io/Pizza-static-site/',
  },
  {
    id: 2,
    title: 'To-Do App',
    description: 'This app was built using Flutter Flow. You can create, update, delete, and display daily tasks.',
    image: "public/assets/images/todo-app.png",
    link: 'https://app.flutterflow.io/run/b1HmrqiyrKg1zpl2bAr4',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'This app was built using React JS and Weather API.',
    image: "public/assets/images/weather.png",
    link: 'https://anuradha-93.github.io/weather-app/',
  },
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>My Projects</h2>
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

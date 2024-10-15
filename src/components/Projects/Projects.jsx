import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Separate component for project cards

const projectsData = [
  {
    id: 1,
    title: 'Pizza Mania Static Site',
    description: 'This is a demo Single Page site using HTML,Internal Css,Javascript',
    image: '/src/assets/images/pizzamania.png',
    link: 'https://anuradha-93.github.io/Pizza-static-site/',
  },
  {
    id: 2,
    title: 'To-Do-APP',
    description: 'This app was built using flutter flow.In this we can create,update,delete,display Task of our daily life.',
    image: '/src/assets/images/to-do.png',
    link: 'https://app.flutterflow.io/run/b1HmrqiyrKg1zpl2bAr4',
  },
  {
    id: 3,
    title: 'Weather APP',
    description: 'This app was built using React Js and Weather API.',
    image: '/src/assets/images/weather.png',
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

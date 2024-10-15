import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on link click or clicking outside
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu if clicked outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector(`.${styles.navbar}`);
      if (menuElement && !menuElement.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">MyPortfolio</a>
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
               Education
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
              Skills
            </Link>
            
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
              About
            </Link>
          </li>
          
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-70}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;

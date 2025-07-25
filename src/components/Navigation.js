import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navigation.css';

function Navigation({ isFooter }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle both scrolling and closing the menu
  const handleScroll = (section, url) => {
    navigate(url);
  
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const offset = 90; // Adjust this value to match the height of your fixed navbar
        const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  
    setIsOpen(false); // Close the menu after navigating
  };

  return (
    <nav className={`nav ${isFooter ? 'footer-nav' : ''}`}>
      <div className="nav-container">
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <button
              className={`${isFooter ? 'footer-link-tag' : ''}`}
              onClick={() => handleScroll('home', '/')}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className={`${isFooter ? 'footer-link-tag' : ''}`}
              onClick={() => handleScroll('services', '/services')}
            >
              SERVICES
            </button>
          </li>
          <li>
            <button
              className={`${isFooter ? 'footer-link-tag' : ''}`}
              onClick={() => handleScroll('packages', '/pricing')}
            >
              PRICING
            </button>
          </li>
          <li>
            <button
              className={`${isFooter ? 'footer-link-tag' : ''}`}
              onClick={() => handleScroll('prepTips', '/preparation-tips')}
            >
              PREPARATION TIPS
            </button>
          </li>
          <li>
            <button
              className={`${isFooter ? 'footer-link-tag' : ''}`}
              onClick={() => handleScroll('contacts', '/contacts')}
            >
              CONTACT US
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

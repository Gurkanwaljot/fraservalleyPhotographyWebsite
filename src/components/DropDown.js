import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import '../styles/dropDown.css';

function Dropdown () {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropUp, setDropUp] = useState(false);
  const toggleButtonRef = useRef(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  };

  function handleClickOutside (event){
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  function handlePosition () {
    if (toggleButtonRef.current && dropdownRef.current) {
      const buttonRect = toggleButtonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if ((windowHeight - buttonRect.bottom ) -100< dropdownHeight) {
        setDropUp(true);
      } else {
        setDropUp(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      handlePosition();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div className="dropdown" ref={dropdownRef}>
        <Link to="#" onClick={toggleDropdown} className="dropdown-button" ref={toggleButtonRef}>
            SERVICES
        </Link>
      {isOpen && (
        <div className={`dropdown-menu ${dropUp ? 'drop-up' : 'drop-down'}`}>
          <ScrollLink to="socialMedia" className='drop-down-item' smooth={true} duration={500} >
            SOCIAL MEDIA WALKTHROUGH
          </ScrollLink>
          <ScrollLink to="stagedVideo" className='drop-down-item' smooth={true} duration={500} >
            STAGED VIDEO
          </ScrollLink>
          <ScrollLink to="droneFootage" className='drop-down-item' smooth={true} duration={500} >
            DRONE FOOTAGE
          </ScrollLink>
          <ScrollLink to="floorPlan" className='drop-down-item' smooth={true} duration={500} >
            FLOOR PLAN
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

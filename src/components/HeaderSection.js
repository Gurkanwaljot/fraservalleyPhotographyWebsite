import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../images/Fraser.png';
import Navigation from '../components/Navigation';
import ImageCarousel from '../components/ImageCarousel';
import { Element } from "react-scroll";

function HeaderSection() {
  const navigate = useNavigate();

  const handleScroll = (section, url) => {
      navigate(url);
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  }

  return (
    <Element id="home">
      <header className='pageTitle'>
        <div className='header-content'>
          <div className='logoTitle header-logo'>
            {/* Wrap the img in a button and add an onClick handler */}
            <button 
              onClick={() => handleScroll('home', '/')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img src={logo} alt='Logo' className='Logo'></img>
            </button>
          </div>
          <Navigation isFooter={false} />
        </div>
        <ImageCarousel id="home" />
      </header>
    </Element>
  );
}

export default HeaderSection;

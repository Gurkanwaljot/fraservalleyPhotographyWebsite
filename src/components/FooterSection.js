import React from "react";
import Navigation from "./Navigation";
import logo from '../images/Fraser.png';
import { useNavigate } from "react-router-dom";

function FooterSection(){
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
        <footer className='footer-container'>
            <div className='logoTitle footer-logo'>
              <button 
                onClick={() => handleScroll('home', '/')}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <img src={logo} alt='Logo' className='Logo'></img>
              </button>
            </div>
            <Navigation isFooter={true}/>
            <div className='copyright-container'>
              <p>&copy; {new Date().getFullYear()} Fraser Valley Photography. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default FooterSection;
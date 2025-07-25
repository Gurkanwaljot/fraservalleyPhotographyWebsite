import React, {useEffect} from "react";
import '../App.css';
import HeaderSection from '../components/HeaderSection';
// import SelectedImages from '../components/mainContent/selectedImages';
import Services from '../components/mainContent/services';
import PopularPackages from '../components/mainContent/popularPackages';
import Addons from "./mainContent/addons";
import FooterSection from '../components/FooterSection';
import AreaCovered from './map/areaCovered'
import ContactForm from './contact/contact';

function Home({jumpToSection }){
    useEffect(() => {
        if (jumpToSection === "packages") {
          const packagesSection = document.getElementById("packages");
          if (packagesSection) {
            packagesSection.scrollIntoView({ behavior: "smooth" });
          }
        } else if (jumpToSection === "services"){
            const packagesSection = document.getElementById("services");
            if (packagesSection) {
              packagesSection.scrollIntoView({ behavior: "smooth" });
            } 
        } else if (jumpToSection === "contacts"){
            const packagesSection = document.getElementById("contacts");
            if (packagesSection) {
              packagesSection.scrollIntoView({ behavior: "smooth" });
            } 
        }
      }, [jumpToSection]);
    return(
        <div id="home" className='app-container'>
            <HeaderSection />
            <div className='content'> 
                {/* <SelectedImages /> */}
                <Services />
                <PopularPackages />
                <Addons />
                <AreaCovered />
                <ContactForm />
                <FooterSection />
            </div>
        </div>
    )
}

export default Home;
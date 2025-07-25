import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/preparation/prepTips.css";
import Navigation from '../../components/Navigation';
import backgroundImg from "../../images/prepTipsImg/backgroundPrepTipsImg.jpg";
import ImageCarousel from "../ImageCarousel";
import logo from '../../images/Fraser.png';
import FooterSection from "../FooterSection";

// Updated interior preparation tips data structure
const interiorPrepTips = [
    {
        title: "Clean Thoroughly",
        content: ["Vacuum all carpets and floors.", "Dust all surfaces, including shelves and furniture.", "Clean windows to let in as much light as possible."]
    },
    {
        title: "Declutter Spaces",
        content: ["Remove personal items such as photos and papers.", "Keep all surfaces, including countertops and tables, clear and neat."]
    },
    {
        title: "Organize Rooms",
        content: ["Straighten books.", "Align pillows.", "Arrange bedspreads smoothly.", "Tidy up shelves and organize any visible items neatly."]
    },
    {
        title: "Kitchen Care",
        content: ["Clear countertops entirely.", "Store away toasters and coffee makers.", "Remove fridge magnets and clean the front of the refrigerator."]
    },
    {
        title: "Bathroom Set-Up",
        content: ["Store all toiletries out of sight.", "Hang fresh towels.", "Ensure the toilet lid is closed.", "Clean the mirror to a sparkling shine."]
    },
    {
        title: "Lighting",
        content: ["Replace any burnt-out bulbs.", "Turn on all lights during the photoshoot to create a welcoming atmosphere."]
    },
    {
        title: "Windows and Mirrors",
        content: ["Clean glass surfaces thoroughly for a streak-free finish."]
    },
    {
        title: "Hide Pet Items",
        content: ["Pet food, bowls, toys, and beds should be out of sight to avoid distractions."]
    },
    {
        title: "Adjust Furniture",
        content: ["Position furniture to maximize space and flow in each room.", "Consider the best layout that shows off the room’s size and features."]
    }
];

// Updated exterior preparation tips data structure
const exteriorPrepTips = [
    {
        title: "Lawn Maintenance",
        content: ["Mow the grass.", "Rake any leaves.", "Ensure the garden looks tidy and cared for."]
    },
    {
        title: "Clean Walkways",
        content: ["Sweep driveways.", "Clean entry paths."]
    },
    {
        title: "Declutter Yard",
        content: ["Store away any tools, toys, and garden equipment.", "Ensure nothing unnecessary is lying around."]
    },
    {
        title: "Garden Grooming",
        content: ["Trim bushes.", "Apply fresh mulch to garden beds."]
    },
    {
        title: "Hide Garbage Bins",
        content: ["Place bins and pet waste containers out of sight."]
    },
    {
        title: "Porch Polishing",
        content: ["Clean the porch area.", "Neatly arrange any outdoor furniture."]
    },
    {
        title: "Check Lighting",
        content: ["Ensure that all outdoor lighting is functional.", "Turn on lights if the shoot extends to the evening."]
    }
];

// Updated final tips data structure
const finalTips = [
    {
        title: "FINAL TIPS",
        content: ["Walk through each room to ensure nothing has been overlooked.", "Do a last-minute tidy-up right before the photoshoot."]
    },
    {
        title: "FINAL ADJUSTMENTS",
        content: ["Ensure everything looks perfect before the photoshoot."]
    }
];

function PreparationTips() {
    const [isInView, setIsInView] = useState(false);
    const divRef = useRef(null);
    const navigate = useNavigate();

    const handleScroll = (section, url) => {
        navigate(url);
        setTimeout(() => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    useEffect(() => {
        const currentRef = divRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <main id="prepTips" className="preparation-container">
            <header className="pageTitle">
                <div className="header-content">
                    <div className="logoTitle header-logo">
                        <button 
                            onClick={() => handleScroll('home', '/')}
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                            <img src={logo} alt="Logo" className="Logo" />
                        </button>
                    </div>
                    <Navigation isFooter={false} />
                </div>
                <ImageCarousel id="prepTips" />
            </header>
            <div className="content prepContents">
                <img src={backgroundImg} className="services-background-img" alt="backgroundImg" />
                <div className="preparation-main-para">
                    <p className="preparation-para">
                        Ensuring your home looks its best for a real estate photoshoot is key to attracting potential buyers. 
                        Follow our simple guidelines to prepare both the interior and exterior of your home effectively.
                    </p>
                </div>

                {/* Interior Preparation Tips */}
                <div className="interior-preparation-div">
                    <div ref={divRef} className={`prep-card ${isInView ? 'in-view' : ''}`}>
                        <h2 className="h2-title interiorPrepTitle"> INTERIOR PREPARATION</h2>
                        <p className="prep-card-para">Get your home photo-ready from the inside with these steps: </p>
                        <ul className="prep-points">
                            {interiorPrepTips.map((tips, index) => (
                                <li key={index}>
                                    <h3>{tips.title}</h3>
                                    <ul>
                                        {tips.content.map((item, i) => (
                                            <li key={i}>
                                                <label>
                                                    <input type="checkbox" /> {/* Checkbox for each task */}
                                                    <span className="checkbox-content">{item}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Exterior Preparation Tips */}
                <div className="exterior-preparation-div">
                    <div className={`prep-card ${isInView ? 'in-view' : ''}`}>
                        <h2 className="h2-title exteriorPrepTitle"> EXTERIOR PREPARATION</h2>
                        <p className="prep-card-para">Make a great first impression with a well-prepared exterior:</p>
                        <ul className="prep-points">
                            {exteriorPrepTips.map((tips, index) => (
                                <li key={index}>
                                    <h3>{tips.title}</h3>
                                    <ul>
                                        {tips.content.map((item, i) => (
                                            <li key={i}>
                                                <label>
                                                    <input type="checkbox" /> {/* Checkbox for each task */}
                                                    <span className="checkbox-content">{item}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Final Tips */}
                <div className="final-points-grid">
                    {finalTips.map((tips, index) => (
                        <div key={index} className={`final-prep-card ${isInView ? 'in-view' : ''}`}>
                            <h3>{tips.title}</h3>
                            <ul>
                                {tips.content.map((item, i) => (
                                    <li key={i}>
                                        <label>
                                            <input type="checkbox" /> {/* Checkbox for each task */}
                                            <span className="checkbox-content">{item}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <FooterSection />
        </main>
    );
}

export default PreparationTips;

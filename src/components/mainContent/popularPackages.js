import React from "react";
import '../../styles/mainContent/packages.css';
import cameraIcon from "../../images/packagesIcon/cameraIcon.png";
// import videoIcon from "../../images/packagesIcon/video-icon.png";
import photovideoIcon from "../../images/packagesIcon/photo&video.png";
// import droneIcon from "../../images/packagesIcon/Drone.png";

const packagesList = [
  {
    title: "BASE PHOTOGRAPHY",
    iconImg: cameraIcon,
    type: "Photography",
    accessories: ["Interior & Exterior Photography", "2D Floor Plan with Measurements (Included For Free)", "Interactive Floor Plan", "Feature Sheet PDF"],
    paraheight: "150px",
    smallPrice: "$160",
    bigPrice: "$240"
  },
  {
    title: "ESSENTIAL PHOTOGRAPHY",
    iconImg: cameraIcon,
    type: "Photography",
    accessories: ["Interior & Exterior Photography", "2D Floor Plan with Measurements (Included For Free)", "Interactive Floor Plan", "Feature Sheet PDF", "Drone Photos"],
    paraheight: "150px",
    smallPrice: "$200",
    bigPrice: "$280"
  },
  // {
  //   title: "STANDARD VIDEO",
  //   iconImg: videoIcon,
  //   type: "Video",
  //   accessories: ["Drone Video", "Social Media Video (Portrait)", "Realtor Intro"],
  //   paraheight: "80px",
  //   smallPrice: "$240",
  //   bigPrice: "$280"
  // },
  // {
  //   title: "PREMIUM VIDEO",
  //   iconImg: videoIcon,
  //   type: "Video",
  //   accessories: ["Drone Video", "Cinematic Video (Portrait Or Landscape)", "Realtor Intro"],
  //   paraheight: "80px",
  //   smallPrice: "$400",
  //   bigPrice: "$440"
  // },
  // {
  //   title: "LUXURY VIDEO",
  //   iconImg: videoIcon,
  //   type: "Video",
  //   accessories: ["Drone Video", "Staged Video (Portrait Or Landscape)", "Realtor Intro"],
  //   paraheight: "80px",
  //   smallPrice: "$400",
  //   bigPrice: "$440"
  // },
  {
    title: "LUXURY PHOTOGRAPHY & VIDEO",
    iconImg: cameraIcon,
    type: "PhotographyVideo",
    accessories: ["Interior & Exterior Photography", "Drone Aerial Photography", "Drone Video", "Social Media Video (Portrait)", "Staged Video (Portrait or Landscape)", "2D Floor Plan with Measurements (Included For Free)", "Interactive Floor Plan", "3D Floor Plan", "Feature Sheet PDF"],
    paraheight: "280px",
    smallPrice: "$499",
    bigPrice: "$699"
  },
  // {
  //   title: "AERIAL  ONLY",
  //   iconImg: droneIcon,
  //   type: "Aerial",
  //   accessories: ["Drone Aerial Photography", "Drone Video"],
  //   paraheight: "40px",
  //   smallPrice: "$190",
  //   bigPrice: "$190"
  // },
  {
    title: "PREMIUM PHOTOGRAPHY & VIDEO ",
    iconImg: photovideoIcon,
    type: "PhotographyVideo",
    accessories: ["Interior & Exterior Photography", "Drone Aerial Photography", "Drone Video", "Social Media Video (Portrait)", "2D Floor Plan with Measurements (Included For Free)", "Interactive Floor Plan", "Feature Sheet PDF"],
    paraheight: "280px",
    smallPrice: "$399",
    bigPrice: "$499"
  },
  {
    title: "ESSENTIAL PHOTOGRAPHY & VIDEO",
    iconImg: photovideoIcon,
    type: "PhotographyVideo",
    accessories: ["Interior & Exterior Photography", "Drone Aerial Photography", "Social Media Video (Portrait)", "2D Floor Plan with Measurements (Included For Free)", "Interactive Floor Plan", "Feature Sheet PDF"],
    paraheight: "280px",
    smallPrice: "$299",
    bigPrice: "$399"
  }
]

function PopularPackages () {

  const renderPackages = (type) =>{
    return packagesList
    .filter(pkg => pkg.type === type)
    .sort((a, b) => parseFloat(a.smallPrice.replace('$', '')) - parseFloat(b.smallPrice.replace('$', '')))
    .map((package_detail, index) => (
      <div key={index} className="package-details">
        <div className="icon-div">
          <span className="icon-border">
            <img alt="icon" src={package_detail.iconImg} className="icon-img"></img>
          </span>
        </div>
        <h3 className="package-title">{package_detail.title}</h3>

        <div className="package-info">
        <ul className="package-accessories"  style={{ height: `${package_detail.paraheight}` }}>
            {package_detail.accessories.map((item, index) =>(
                  <li className="checkmark-item">{item}</li>
            ))}  
         </ul>
                {package_detail.type === "Aerial" ? (
                  <div className="package-price">
                      <div className="same-price">
                        <h3>{package_detail.smallPrice}</h3>
                      </div>
                  </div>
                ) : (
                  <div className="package-price">
                    <div className="small-price">
                      <h3 className="price-text">{package_detail.smallPrice}</h3>
                      <p className="area-text">Up to 3000sqft</p>
                    </div>
                    <div className="big-price">
                      <h3 className="price-text">{package_detail.bigPrice}</h3>
                      <p className="area-text">Over 3000sqft</p>
                    </div>
                  </div>
                )}
          </div>
      </div>
    ))
  };
  return (
        <section id="packages" className="popular-packages">
          <h1 className="h1-title"> PACKAGES</h1>
          <div className="border-line-div-packages">
              <span className="border-line-packages" />
          </div>
          <small>Note: The Floor Plan is included at no extra cost with any package that includes Interior and Exterior photography</small>
              <div className="package-section">
                <h2 className="h2-title">PHOTOGRAPHY PACKAGES</h2>
                <div className="package-details-grid">
                  {renderPackages("Photography")}
                </div>
              </div>
              <div className="package-section">
                <h2 className="h2-title">PHOTOGRAPHY & VIDEO PACKAGES</h2>
                <div className="package-details-grid">
                  {renderPackages("PhotographyVideo")}
                </div>
              </div>
              {/* <div className="package-section">
                <h2 className="h2-title">VIDEO PACKAGES</h2>
                <div className="package-details-grid">
                  {renderPackages("Video")}
                </div>
              </div> */}
              {/* <div className="package-section">
                <h2 className="h2-title">AERIAL PACKAGE</h2>
                <div className="package-details-grid">
                  {renderPackages("Aerial")}
                </div>
              </div> */}
        </section>
  );
};

export default PopularPackages;
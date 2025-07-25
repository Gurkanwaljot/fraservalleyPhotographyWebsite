import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom"; // useNavigate for routing
import "../../styles/mainContent/services.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from "react-lazyload";

// Page background image
import backgroundImg from "../../images/service-background.jpg";

// Services images
import StandardImage1 from "../../images/standardImages/StandardPhotography1.jpg";
// import StandardImage2 from "../../images/standardImages/StandardPhotography2.jpg";
import DroneImage1 from "../../images/droneImages/DronePhotography1.jpg";
// import DroneImage2 from '../../images/droneImages/DronePhotography2.jpg';
// import DroneImage3 from '../../images/droneImages/DronePhotography3.jpg';
import TwoDImage1 from "../../images/2dImages/2dPhotography1.jpg";
// import TwoDImage2 from '../../images/2dImages/2dPhotography2.jpg';
import ThreeDImage1 from "../../images/3dImages/3dphotography1.jpg";
// import ThreeDImage2 from '../../images/3dImages/3dPhotography2.jpg';
import DroneVideo from "../../images/droneImages/drone-shot-website-1.mp4";
import stageVideo2 from "../../images/stagedVid/real-vs-staged-website-1.mp4";
import stageVideo1 from "../../images/landscape-video/mls-video-website.mp4";
import walkthrough1 from "../../images/socialMediaWalkthroughVid/social-media-website-1.mp4";
import staged from "../../images/Staged-Images/living-room.mp4";
import staged2 from "../../images/re-staging/re-staging-1.mp4";
import featureSheet from "../../images/Feature-Sheet-Design-Template-1.jpg";
import interactiveFloorPlan from "../../images/interactive-floor-plan/Interactive-Floor-Plan.webp";

// Updated services array with URL-friendly names
// const services = [
//     { serviceName: 'STANDARD PHOTOGRAPHY (INTERIOR & EXTERIOR)', urlName: 'standard-photography', src: [StandardImage1], height: "250px", type: "video", height: "250px", type: "image/gifs" },
//     { serviceName: 'DRONE AERIAL PHOTOGRAPHY', urlName: 'drone-aerial-photography', src: [DroneImage1], height: "250px", type: "video", height: "250px", type: "image/gifs" },
//     { serviceName: '2D FLOOR PLAN', urlName: '2d-floor-plan', src: [TwoDImage2], height: "250px", type: "video", height: "250px", type: "image/gifs" },
//     { serviceName: '3D FLOOR PLAN', urlName: '3d-floor-plan', src: [ThreeDImage2], height: "250px", type: "video", height: "250px", type: "image/gifs" },
//     { serviceName: 'SOCIAL MEDIA VIDEO WALKTHROUGH (PORTRAIT)', urlName: 'social-media-video', src: [walkthrough1], height: "250px", type: "video", height: "250px", type: "video" },
//     { serviceName: 'MLS VIDEO WALKTHROUGH (LANDSCAPE)', urlName: 'mls-video', src: [stageVideo1], height: "250px", type: "video", height: "250px", type: "video" },
//     { serviceName: 'DRONE VIDEO', urlName: 'drone-video', src: [DroneImgVideo], height: "250px", type: "video", height: "250px", type: "video" },
//     { serviceName: 'STAGED VIDEO (LANDSCAPE OR PORTRAIT)', urlName: 'staged-video', src: [stageVideo2], height: "250px", type: "video", height: "250px", type: "video" }
// ], height: "250px", type: "video";

const services = [
  {
    serviceName: "STANDARD (INTERIOR & EXTERIOR) PHOTOGRAPHY",
    urlName: "standard-photography",
    description: (
      <>
        <p>
          Our standard photography service is designed to provide high-quality
          images that capture every detail of your property. Using HDR (High
          Dynamic Range) blending, we ensure that both interior and exterior
          shots are crisp, well-lit, and visually compelling. This service helps
          potential buyers fully appreciate the beauty of your property, both
          inside and out.
        </p>
        <ul>
          <li>HDR blending for high-quality, vibrant images.</li>
          <li>Fast turnaround time for timely listings.</li>
          <li>
            Optional sky replacement for exterior shots to enhance presentation.
          </li>
          <li>
            Perfectly lit interior shots to highlight room details and features.
          </li>
        </ul>
      </>
    ),
    src: [StandardImage1],
    height: "250px",
    type: "image/gifs",
  },
  {
    serviceName: "DRONE AERIAL PHOTOGRAPHY",
    urlName: "drone-aerial-photography",
    description: (
      <>
        <p>
          Our drone aerial photography service provides a stunning bird’s-eye
          view of your property and surrounding areas. This service is ideal for
          showcasing large lots, capturing the landscape, and offering potential
          buyers a full perspective of the property's location within the
          neighborhood.
        </p>
        <ul>
          <li>
            Captures the entire property, including outdoor spaces and
            surroundings.
          </li>
          <li>
            Helps potential buyers visualize the property’s lot size and
            neighborhood context.
          </li>
          <li>
            Offers unique angles and perspectives that traditional photography
            can’t provide.
          </li>
          <li>
            Perfect for large estates, commercial properties, and homes with
            significant outdoor areas.
          </li>
        </ul>
      </>
    ),
    src: [DroneImage1],
    height: "250px",
    type: "image/gifs",
  },
  {
    serviceName: "2D FLOOR PLAN",
    urlName: "2d-floor-plan",
    description: (
      <>
        <p>
          Our 2D floor plans are designed to give potential buyers a clear
          understanding of your property’s layout. These detailed plans provide
          room dimensions, flow, and layout, making it easier for buyers to
          visualize how they can use the space.
        </p>
        <ul>
          <li>Clear, professional layouts with room dimensions.</li>
          <li>
            Easy-to-understand designs that help buyers imagine how they’ll use
            the space.
          </li>
          <li>
            An essential tool for marketing homes to buyers who value precise
            details.
          </li>
          <li>
            Ideal for properties of all sizes, from small apartments to large
            estates.
          </li>
        </ul>
      </>
    ),
    src: [TwoDImage1],
    height: "250px",
    type: "image/gifs",
  },
  {
    serviceName: "3D FLOOR PLAN",
    urlName: "3d-floor-plan",
    description: (
      <>
        <p>
          Our 3D floor plans offer a highly visual, interactive way for buyers
          to explore your property. By adding textures, furniture, and other
          elements, we bring the layout to life, allowing potential buyers to
          immerse themselves in the space and better understand its flow and
          possibilities.
        </p>
        <ul>
          <li>
            Realistic representation of the space with added textures and
            furniture.
          </li>
          <li>
            Helps buyers visualize how the property could be furnished and used.
          </li>
          <li>
            Interactive and engaging for online listings and marketing
            materials.
          </li>
          <li>
            Perfect for larger properties or complex layouts that benefit from a
            3D view.
          </li>
        </ul>
      </>
    ),
    src: [ThreeDImage1],
    height: "250px",
    type: "image/gifs",
  },
  {
    serviceName: "Interactive Floor Plan",
    urlName: "interactive-floor-plan",
    description: (
      <>
        <p>
          Our Interactive Floor Plan service enhances your property listing by
          offering an engaging, clickable experience for potential buyers. With
          this tool, buyers can explore the property layout in detail, interact
          with rooms, and visualize the flow of the space. This modern approach
          adds an extra layer of engagement, making your property more memorable
          and easier to explore.
        </p>
        <ul>
          <li>
            Buyers can click on different rooms to view images directly
            associated with each area.
          </li>
          <li>
            Helps buyers visualize the flow of the space in a more engaging and
            intuitive way.
          </li>
          <li>
            Ideal for both residential and commercial properties, offering
            detailed insights into the layout and usability of the space.
          </li>
          <li>
            Available for desktop and mobile, ensuring buyers can explore the
            floor plan from anywhere.
          </li>
        </ul>
      </>
    ),
    src: [interactiveFloorPlan], // Placeholder images
    height: "250px",
    type: "image/gifs",
  },
  {
    serviceName: "SOCIAL MEDIA VIDEO WALKTHROUGH (PORTRAIT)",
    urlName: "social-media-video",
    description: (
      <>
        <p>
          Our social media video walkthrough service is tailored to create
          engaging, short-form video content for platforms like Instagram,
          Facebook, and TikTok. These vertical videos are perfect for showcasing
          properties in a way that grabs attention and holds interest.
        </p>
        <ul>
          <li>
            Professionally recorded videos with smooth, gimbal stabilization.
          </li>
          <li>
            Introduction videos with high-quality audio using a microphone.
          </li>
          <li>
            Quick, engaging walkthroughs optimized for social media platforms.
          </li>
          <li>
            Vertical format (portrait) designed to maximize screen space on
            mobile devices.
          </li>
        </ul>
      </>
    ),
    src: [walkthrough1],
    height: "250px",
    type: "video",
  },
  {
    serviceName: "MLS VIDEO WALKTHROUGH (LANDSCAPE)",
    urlName: "mls-video",
    description: (
      <>
        <p>
          Our MLS video walkthroughs provide a professional, high-definition
          tour of your property, presented in a landscape format. These videos
          are ideal for online real estate listings, offering a dynamic way to
          present the property.
        </p>
        <ul>
          <li>
            High-definition, landscape-oriented videos perfect for MLS and real
            estate websites.
          </li>
          <li>
            Professionally captured footage with smooth gimbal stabilization.
          </li>
          <li>
            Optional voiceovers or text overlays to highlight property features.
          </li>
          <li>
            Immersive, engaging tours that attract more views and potential
            buyers.
          </li>
        </ul>
      </>
    ),
    src: [stageVideo1],
    height: "250px",
    type: "video",
  },
  {
    serviceName: "DRONE VIDEO",
    urlName: "drone-video",
    description: (
      <>
        <p>
          Our drone video service offers stunning aerial footage that captures
          the full scope of your property and its surroundings. This service is
          particularly beneficial for large properties, estates, or homes in
          scenic locations.
        </p>
        <ul>
          <li>
            Sweeping aerial shots that showcase the entire property and
            surrounding landscape.
          </li>
          <li>
            Highlights outdoor features like gardens, pools, and nearby
            amenities.
          </li>
          <li>
            Perfect for large properties or those with significant outdoor
            areas.
          </li>
          <li>
            Provides a unique, cinematic view that attracts attention and makes
            your listing stand out.
          </li>
        </ul>
      </>
    ),
    src: [DroneVideo],
    height: "250px",
    type: "video",
  },
  {
    serviceName: "STAGED VIDEO (LANDSCAPE OR PORTRAIT)",
    urlName: "staged-video",
    description: (
      <>
        <p>
          Our staged video service brings empty or cluttered spaces to life
          through virtual staging. Using realistic 3D models and textures, we
          add furniture and decor to enhance the property’s appeal.
        </p>
        <ul>
          <li>
            Virtual staging with realistic textures and furniture to enhance
            property appeal.
          </li>
          <li>
            Available in both landscape (for MLS) and portrait (for social
            media) formats.
          </li>
          <li>
            Helps buyers visualize how the property could be furnished and
            utilized.
          </li>
          <li>
            Ideal for vacant properties, homes that need a refresh, or marketing
            luxury listings.
          </li>
        </ul>
      </>
    ),
    src: [stageVideo2],
    height: "250px",
    type: "video",
  },
  {
    serviceName: "STAGED PHOTOS",
    urlName: "staged-photos",
    description: (
      <>
        <p>
          Our staged photo service allows you to showcase the full potential of
          your property by virtually adding furniture and decor. Instead of
          physically staging the home, which can be time-consuming and
          expensive, we digitally furnish the space with stylish, modern
          furniture.
        </p>
        <ul>
          <li>
            Virtual staging that adds stylish, modern furniture to empty spaces.
          </li>
          <li>
            Cost-effective alternative to physical staging, saving time and
            money.
          </li>
          <li>
            Helps potential buyers visualize how the property could be
            furnished.
          </li>
          <li>
            Ideal for vacant homes or properties where traditional staging isn't
            feasible.
          </li>
        </ul>
      </>
    ),
    src: [staged],
    height: "250px",
    type: "video", // Placeholder images
  },
  {
    serviceName: "RESTAGED PHOTOS",
    urlName: "restaged-photos",
    description: (
      <>
        <p>
          Our restaged photo service takes your property to the next level by
          digitally removing clutter and outdated furniture, and replacing it
          with modern, stylish decor. This service is perfect for properties
          that need a refresh or for owners who want to present the home in its
          best light.
        </p>
        <ul>
          <li>
            Digital decluttering and restaging with modern furniture and decor.
          </li>
          <li>
            Ideal for refreshing older listings or properties that need a clean,
            updated look.
          </li>
          <li>
            Allows potential buyers to better visualize the space without
            distractions.
          </li>
          <li>
            Saves time and effort compared to physical staging and decluttering.
          </li>
        </ul>
      </>
    ),
    src: [staged2], // Placeholder images
    height: "250px",
    type: "video",
  },
  {
    serviceName: "FEATURE SHEETS PDF",
    urlName: "feature-sheets-pdf",
    description: (
      <>
        <p>
          Our Feature Sheets PDF service provides professionally designed
          feature sheets that highlight the key aspects of your property. These
          sheets are great for open houses, brochures, and digital marketing.
        </p>
        <ul>
          <li>Professionally designed feature sheet PDFs.</li>
          <li>
            Clear and concise property information, including photos and key
            details.
          </li>
          <li>Ready for print or digital distribution.</li>
        </ul>
      </>
    ),
    src: [featureSheet], // Placeholder images
    height: "250px",
    type: "image/gifs",
  },
];

const CustomArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="custom-arrow custom-arrow-prev"
    >
      &lt;
    </button>
  );
const CustomArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="custom-arrow custom-arrow-next"
    >
      &gt;
    </button>
  );

function Services() {
  const navigate = useNavigate(); // Using useNavigate for routing

  const handleLearnMore = (urlName) => {
    // Fix: Ensure we use a template string for correct URL construction
    navigate(`/service-details/${urlName}`);
  };

  return (
    <section id="services" className="services">
      <img
        src={backgroundImg}
        className="services-background-img"
        alt="backgroundImg"
      />
      <h1 className="h1-title">OUR SERVICES</h1>
      <div className="border-line-div-services">
        <span className="border-line-services" />
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <Carousel
              infiniteLoop
              showThumbs={false}
              renderArrowPrev={CustomArrowPrev}
              renderArrowNext={CustomArrowNext}
              showStatus={true}
              showIndicators={false}
              className="carouselImgs"
            >
              {service.src.map((fileSrc, imgIndex) => (
                <LazyLoad
                  key={imgIndex}
                  height={250}
                  offset={100}
                  once
                  placeholder={
                    <div
                      style={{
                        height: service.height,
                        backgroundColor: "#ccc",
                      }}
                    />
                  }
                >
                  {service.type === "image/gifs" ? (
                    <div className="image-div">
                      <img
                        src={fileSrc}
                        alt={`${imgIndex + 1} of ${service.serviceName}`}
                        className="service-img"
                        style={{ height: service.height }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="video-div">
                      <ReactPlayer
                        className="video"
                        url={fileSrc}
                        playing
                        muted
                        loop
                        height={service.height}
                        width="100%"
                        controls={false}
                        loading="lazy"
                      />
                    </div>
                  )}
                </LazyLoad>
              ))}
            </Carousel>
            <div className="details-cont">
              <h2 className="service-heading">{service.serviceName}</h2>
              <button
                className="lrn-more-btn"
                onClick={() => handleLearnMore(service.urlName)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Services);

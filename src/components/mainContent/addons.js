import React from "react";
import '../../styles/mainContent/addons.css'

const newTableList = [
    {
      serviceName: '2D Floor Plans',
      smallPrice: '$100',
      bigPrice: '$130',
    },
    {
      serviceName: '3D Floor Plans',
      smallPrice: '$150',
      bigPrice: '$180',
    },
    {
      serviceName: 'Drone Aerial Photography',
      smallPrice: '$70',
      bigPrice: '$70',
    },
    {
      serviceName: 'Drone Video',
      smallPrice: '$100',
      bigPrice: '$100',
    },
    {
      serviceName: 'Social Media Video (Portrait)',
      smallPrice: '$100',
      bigPrice: '$140',
    },
    {
      serviceName: 'MLS Video (Landscape)',
      smallPrice: '$100',
      bigPrice: '$160',
    },
    {
      serviceName: 'Interior & Exterior Photography',
      smallPrice: '$160',
      bigPrice: '$240',
    },
    {
      serviceName: 'Realtor Intro',
      smallPrice: '$40',
      bigPrice: '$40',
    },
    {
      serviceName: 'Staged Video (Portrait & Landscape)',
      smallPrice: '$250',
      bigPrice: '$300',
    },
    {
      serviceName: 'Staged Photos',
      smallPrice: '$25/photo'
    },
    {
      serviceName: 'Re-staged Photos',
      smallPrice: '$40/photo'
    },
  ]

function Addons (){
    return (
        <section className="addons-container">
            <div>
                <h1 className="h1-title">ADD ONS</h1>
            </div>
            <div className="border-line-div-addons">
                <span className="border-line-addons" />
            </div>
            <div className="services-div">
                <div className="service-info">
                <h3 className="add-on-service-title">Service Name</h3>
                <h3 className="add-on-service-title">Cost Up To 3000sqft</h3>
                <h3 className="add-on-service-title">Cost Over 3000sqft</h3>
                </div>
                {newTableList.map((service, index) => (
                <div className="service-info">
                    <h4 className="add-on-service">{service.serviceName}</h4>
                    <p className="add-on-small-price">{service.smallPrice}</p>
                    <p className="add-on-big-price">{service.bigPrice}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Addons;
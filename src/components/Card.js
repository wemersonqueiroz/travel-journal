import React from "react"
import ImageComponent from "./Images"
import "../index.css"

export default function Card(props) {
  return (
    <>
      <div className="place--card">
        <img
          src={props.place.imageUrl}
          className="place--img"
          alt={props.place.location}
        />
        <div clasName="place--text--box">
          <div className="place--location-box">
            <ImageComponent
              source={"pin.png"}
              alt="Location Pin"
              className="place--pin"
            />
            <h6 className="location">{props.place.location}</h6>
            <a href={props.place.googleMapsUrl} className="google--maps">
              View on Google Maps
            </a>
          </div>
          <h2 className="title">{props.place.title}</h2>
          <h6 className="period">
            {props.place.startDate} - {props.place.endDate}
          </h6>
          <text className="description">{props.place.description}</text>
        </div>
      </div>
      <hr />
    </>
  )
}

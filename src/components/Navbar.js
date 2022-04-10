import React from "react"

import ImageComponent from "./Images"
import "../index.css"

export default function Navbar() {
  return (
    <div>
      <navbar>
        <ImageComponent
          source={"globe.png"}
          alt="Globe Icon"
          className="globe"
        />{" "}
        Wemerson's Travel Journal
      </navbar>
    </div>
  )
}

import React from "react"

function ImageComponent(props) {
  const { source, alt } = props

  const logo = require(`../images/${source}`)
  return <img src={logo} alt={alt}></img>
}

export default ImageComponent

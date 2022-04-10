import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./components/data"
import "./index.css"

function App() {
  const places = data.map(place => {
    return <Card key={place.title} place={place} />
  })
  return (
    <div className="App">
      <Navbar />
      {places}
    </div>
  )
}

export default App

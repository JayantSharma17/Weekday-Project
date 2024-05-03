import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
      <div className="card-grid">
      {/* Render multiple Card components */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      {/* Add more Card components as needed */}
    </div>
    </>
  )
}

export default App
import React from 'react'

export default function Header({title = 'FeedBack UI', bgColor = 'rgba(0,0,0,0.4)', color = '#ff6a95'}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

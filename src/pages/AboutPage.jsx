import Card from '../components/shared/Card'
import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>This is a Feedback App for rating your products</p>
            <p>This is the first version of this app</p>
            <p><Link to={'/'}>Back to Home</Link></p>
        </div>
    </Card>
  )
}

export default AboutPage

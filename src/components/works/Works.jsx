import React from 'react'
import Work from './Work'
import "./Works.css"


const Works = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Work/>
        
    </section>
  )
}

export default Works
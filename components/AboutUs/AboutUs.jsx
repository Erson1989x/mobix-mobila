import React from 'react'
import { aboutUsDataSections } from './aboutUsDataSections'

const AboutUs = () => {


  return (
    <section id="about-us" className="w-full h-auto flex flex-col items-center justify-center">
    <h2 className="mt-8 text-3xl"> Despre noi </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:gap-12">
    {aboutUsDataSections.map(({ title, description, content }, index) => (
          <div key={index} className="card">
            <h4 className="text-lg font-bold text-center">{title}</h4>
            {description ? (
              <p className="mt-2 text-md text-center">{description}</p>
            ) : (
              <p className="mt-2 text-md text-center">{content}</p>
            )}
          </div>
        ))}
    </div>
  </section>
  )
}

export default AboutUs
import React from 'react'
import { aboutUsDataSections } from './aboutUsDataSections'

const AboutUs = () => {


  return (
    <section id="about-us" className="w-full h-auto flex flex-col items-center justify-center">
    <h2 className="mt-8 text-3xl lg:text-4xl dark:text-black"> Despre noi </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:gap-12">
    {aboutUsDataSections.map(({ title, description, content }, index) => (
          <div key={index} className="card">
            <h4 className="text-lg font-bold text-center lg:text-xl dark:text-black">{title}</h4>
            {description ? (
              <p className="mt-2 text-md text-center lg:text-lg dark:text-black">{description}</p>
            ) : (
              <p className="mt-2 text-md text-center lg:text-lg dark:text-black">{content}</p>
            )}
          </div>
        ))}
    </div>
  </section>
  )
}

export default AboutUs
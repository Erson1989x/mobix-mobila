import React from 'react'

const AboutUs = () => {

    const aboutUsDataSections = [
        {
          title: 'Preturi competitive',
          description: 'Valoarea este importantă pentru noi, prin urmare, prețurile serviciilor noastre nu sunt doar cele mai ieftine, ci oferim și reduceri la comenzile mai mari.',
        },
        {
          title: 'Livrare locală & natională',
          description: 'Poți plasa o comandă pentru oricare dintre serviciile noastre din confortul de acasă sau de la birou și să fii sigur să vei obține produsele solicitate.',
        },
        {
            title: 'Materiale calitative',
            content: 'Suntem foarte pasionați de mobiliere, dar cea mai importantă este calitatea lor. Avem parteneriate strategice cu furnizori, producători, fabrici locale si internaționale de mobila.'
        },
        {
            title: 'Design unic',
            content: 'Convingerea noastră este că atunci când locul în care te afli arata bine, fie acasă sau la job, te vei simți bine și vei face bine, ca atare oferim clienților noștri modele alese care nu sacrifică niciodată stilul in defavoarea confortului și designului.'
        },
      ];

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
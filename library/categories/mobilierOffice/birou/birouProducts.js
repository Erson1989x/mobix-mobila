import birouGeneva from "../../../../app/assets/mobilieroffice/Birou/BirouGeneva/Birou Geneva.jpg"
import birouGeneva_1 from "../../../../app/assets/mobilieroffice/Birou/BirouGeneva/Birou Geneva2.jpg"
import birouGeneva_2 from "../../../../app/assets/mobilieroffice/Birou/BirouGeneva/Birou Geneva3.webp"
import birouGeneva_3 from "../../../../app/assets/mobilieroffice/Birou/BirouGeneva/Birou Geneva5.jpg"
import birouNepo from "../../../../app/assets/mobilieroffice/Birou/Nepo120/Birou Nepo120.webp"
import birouNepo_1 from "../../../../app/assets/mobilieroffice/Birou/Nepo120/Birou Nepo120-2.webp.jpg"
import birouNepo150 from "../../../../app/assets/mobilieroffice/Birou/Nepo150/Birou Nepo150.jpg"


export const birouProducts = [

    {
        id: 1,
        name: "Birou Geneva",
        images: [birouGeneva, birouGeneva_1, birouGeneva_2, birouGeneva_3],
        description: "Biroul Geneva este un birou perfect atât pentru adulți, cât și pentru elevi si studenti \n  Biroul este compact, are un sertar și două rafturi în spatele ușii.",
        price: 350.00,
        dimensiuni: {
            adancime: 60,
            inaltime: 75.5,
            latime: 120,
        },
        corpColor: "-", 
        category: "mese-birou",
        slug: "birou-" + "geneva".toLowerCase(),
    },
    {
        id: 2,
        name: "Birou Nepo 120",
        images: [birouNepo, birouNepo_1],
        description: "Masa de birou Nepo BIU120 este o alegere excelentă pentru cei care apreciază stilul și funcționalitatea \n Masa este echipată cu un sertar și există o ușă convenabilă pentru depozitarea diverselor articole \n Material PAL de inalta calitate",
        price: 560.00,
        dimensiuni: {
            adancime: 59,
            inaltime: 76,
            lungime: 120,
        },
        corpColor: "Stejar Sonoma, Nimfeia Alba", 
        category: "mese-birou",
        slug: "birou-" + "nepo-120".toLowerCase(),
    },
    {
        id: 3,
        name: "Birou Nepo 150",
        images: [birouNepo150],
        description: "Masa de birou Nepo BIU150 este ideal pentru lucru sau studiu \n Are un design elegant cu un stil modern \n Masa are doua sertare si este prevazuta cu doua usi in care poti depozita lucruri suplimentare \n Material PAL de inalta calitate \n Accesorii role si balamale de marca",
        price: 810.00,
        dimensiuni: {
            adancime: 59,
            inaltime: 76,
            lungime: 150,
        },
        corpColor: "Stejar Sonoma, Nimfeia Alba", 
        category: "mese-birou",
        slug: "birou-" + "nepo-150".toLowerCase(),
    },
]
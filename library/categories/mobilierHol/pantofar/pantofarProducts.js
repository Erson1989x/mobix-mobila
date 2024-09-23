import pantofarAlma from '../../../../app/assets/mobilierhol/Pantofar/Alma/Pantofar Alma.webp'
import pantofarAlma1 from '../../../../app/assets/mobilierhol/Pantofar/Alma/Pantofar Alma2.webp'
import pantofarAlma2 from '../../../../app/assets/mobilierhol/Pantofar/Alma/Pantofar Alma3.webp'
import pantofarAlma3 from '../../../../app/assets/mobilierhol/Pantofar/Alma/Pantofar Alma4.webp'
import pantfarAlma4 from '../../../../app/assets/mobilierhol/Pantofar/Alma/Pantofar Alma+5.webp'

import pantofarNepo from '../../../../app/assets/mobilierhol/Pantofar/Nepo/Pantofa Nepo.webp'
import pantofarNepo1 from '../../../../app/assets/mobilierhol/Pantofar/Nepo/Pantofa Nepo2.webp'
import pantofarNepo2 from '../../../../app/assets/mobilierhol/Pantofar/Nepo/Pantofa Nepo3.webp'

export const pantofarProducts = [
    {
        id: 1,
        name: "Pantofar ALMA 2U",
        images: [pantofarAlma, pantofarAlma1, pantofarAlma2, pantofarAlma3, pantfarAlma4],
        description: "Materiale: \n PAL Melaminat \n Cant ABS \n Picioare PVC \n Manere satinate",
        price: 470.00,
        dimensiuni: {
            lungime: 80,
            inaltime: 103,
            adancime: 40,
        },
        corpColor: "Pin Antichizat, Sonoma Deschis + Inchis, Stejar Sonoma Deschis",
        category: "pantofar",
        slug: "pantofar-" + "alma".toLowerCase(),
    },
    {
        id: 2,
        name: "Pantofar Nepo",
        images: [pantofarNepo, pantofarNepo1, pantofarNepo2],
        description: "Nepo este o colectie modulara complexa, destinata celor care vor sa amenajeze la un pret avantajos mai multe tipuri de incaperi.",
        price: 400.00,
        dimensiuni: {
            lungime: 70,
            inaltime: 121,
            adancime: 18,
        },  
        corpColor: "Stejar Sonoma",
        category: "pantofar",
        slug: "pantofar-" + "nepo".toLowerCase(),
    },
]
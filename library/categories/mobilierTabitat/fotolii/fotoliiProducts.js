import fotoliuCafeneaStofa from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA.webp"
import fotoliuCafeneaStofa_1 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA2.webp"
import fotoliuCafeneaStofa_2 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA3.webp"
import fotoliuCafeneaStofa_3 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA4.webp"
import fotoliuCafeneaStofa_4 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA5.jpg"
import fotoliuCafeneaStofa_5 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaStofa/FOTOLIU CAFENEA6.jpg"
import fotoliuCafeneaPiele from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaPiele/fotoliu piele.webp"
import fotoliuCafeneaPiele_1 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaPiele/fotoliu piele2.webp"
import fotoliuCafeneaPiele_2 from "../../../../app/assets/mobiliertapitat/Fotolii/CafeneaPiele/fotoliu piele3.webp"
import fotoliuMilady from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/Recliner.jpg"
import fotoliuMilady_1 from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/recliner milady.jpeg"
import fotoliuMilady_2 from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/recliner milady.jpg"
import fotoliuMilady_3 from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/recliner milady2.jpeg"
import fotoliuMilady_4 from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/recliner milady3.jpeg"
import fotoliuMilady_5 from "../../../../app/assets/mobiliertapitat/Fotolii/Milady/Recliner milady4.jpg"
import fotoliuDumas from "../../../../app/assets/mobiliertapitat/Fotolii/Dumas/DUMAS.jpg"
import fotoliuDumas_1 from "../../../../app/assets/mobiliertapitat/Fotolii/Dumas/DUMAS2.jpg"
import fotoliuDumas_2 from "../../../../app/assets/mobiliertapitat/Fotolii/Dumas/DUMAS3.jpg"
import fotoliuDumas_3 from "../../../../app/assets/mobiliertapitat/Fotolii/Dumas/DUMAS4.jpg"
import fotoliuDumas_4 from "../../../../app/assets/mobiliertapitat/Fotolii/Dumas/DUMAS5.jpg"


export const fotoliiProducts = [
    {
        id: 1,
        name: "Fotoliu Cafenea stofa",
        images:[fotoliuCafeneaStofa, fotoliuCafeneaStofa_1, fotoliuCafeneaStofa_2, fotoliuCafeneaStofa_3, fotoliuCafeneaStofa_4, fotoliuCafeneaStofa_5],
        description: "Fotoliu Cafenea stofa are picioare PVC; Cusaturi decorative la spatar; Inaltime sezut: 43 cm;",
        price: 470.00,
        dimensiuni: {
            lungime: 73,
            inaltime: 78,
            adancime: 64,
        },
        category: 'fotolii',
        slug: 'fotolii-' + 'cafenea-stofa'.toLowerCase(),
    },
    {
        id: 2,
        name: "Fotoliu Cafenea piele",
        images:[fotoliuCafeneaPiele, fotoliuCafeneaPiele_1, fotoliuCafeneaPiele_2],
        description: "Fotoliu Cafenea piele are picioare PVC; Cusaturi decorative la spatar; Inaltime sezut: 43 cm;",
        price: 470.00,
        dimensiuni: {
            lungime: 73,
            inaltime: 78,
            adancime: 64,
        },
        category: 'fotolii',
        slug: 'fotolii-' + 'cafenea-piele'.toLowerCase(),
    },
    {
        id: 3,
        name: "Recliner push back Milady HQ-8204",
        images:[fotoliuMilady, fotoliuMilady_1, fotoliuMilady_2, fotoliuMilady_3, fotoliuMilady_4, fotoliuMilady_5],
        description: "Recliner Milady este cu spătar care se înclina spre spate și un suport pentru picioare care se ridică. MAterial: catifea; Extinsa: Lungime: 156.5 cm ; Inaltime: 83 cm;",
        price: 1080.00,
        dimensiuni: {
            lungime: 86,
            latime: 75,
            inaltime: 102,
        },
        corpColor: "Gri Deschis, Crem",
        faceColor: "-",
        category: 'fotolii',
        slug: 'fotolii-' + 'milady-hq-8204'.toLowerCase(),
    },
    {
        id: 4,
        name: "Recliner manual Dumas",
        images:[fotoliuDumas, fotoliuDumas_1, fotoliuDumas_2, fotoliuDumas_3, fotoliuDumas_4],
        description: "Fotoliu Recliner Dumas - este un reclainer manual. Material: material tehnic; Extinsa: Lungime: 98.5 cm ; Inaltime: 79.5 cm;",
        price: 1240.00,
        dimensiuni: {
            lungime: 86,
            latime: 93.5,
            inaltime: 157.5,
    },
    corpColor: "Gri",
    faceColor: "-",
    category: 'fotolii',
    slug: 'fotolii-' + 'domas'.toLowerCase(),
    },

]
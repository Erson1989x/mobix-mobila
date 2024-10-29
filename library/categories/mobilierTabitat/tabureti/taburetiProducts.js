import taburetKJP261 from '../../../../app/assets/mobiliertapitat/Tabureti/KJP/Taburet KJP 261.png';
import taburetKJP261_1 from '../../../../app/assets/mobiliertapitat/Tabureti/KJP/Taburet KJP 261-2.png';
import taburetKJP261_2 from '../../../../app/assets/mobiliertapitat/Tabureti/KJP/Taburet KJP 261-3.png';
import taburetKJP261_3 from '../../../../app/assets/mobiliertapitat/Tabureti/KJP/Taburet KJP 261-4.png';
import taburetCUBIX from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix.webp';
import taburetCUBIX_1 from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix2.webp';
import taburetCUBIX_2 from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix3.webp';
import taburetCUBIX_3 from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix4.webp';
import taburetCUBIX_4 from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix5.webp';
import taburetCUBIX_5 from '../../../../app/assets/mobiliertapitat/Tabureti/Cubix/Taburet cubix6.webp';
import taburetLiving from '../../../../app/assets/mobiliertapitat/Tabureti/Living/Taburet.jpg';
import taburetLiving_1 from '../../../../app/assets/mobiliertapitat/Tabureti/Living/Taburet Living.jpg';
import taburetLiving_2 from '../../../../app/assets/mobiliertapitat/Tabureti/Living/Taburet Living2.jpg';

export const taburetiProducts = [
    {
        id: 1,
        name: "Taburet KJP 261",
        images: [taburetKJP261, taburetKJP261_1, taburetKJP261_2, taburetKJP261_3],
        description: "Taburet KJP 261",
        price: 220.00,
        dimensiuni: {
            adancime: 0,
            inaltime: 45,
            lungime: 41,
        },
        corpColor: "Gri Bej",
        category: "tabureti",
        slug: "taburet-" + "kjp261".toLowerCase(),
    },
    {
        id: 2,
        name: "Taburet CUBIX cu rotile",
        images: [taburetCUBIX, taburetCUBIX_1, taburetCUBIX_2, taburetCUBIX_3, taburetCUBIX_4, taburetCUBIX_5],
        description: "Role rolative care permit miscarea acestuia cu usurinta \n Sezut realizat din spuma poliuretanica cu densitate ridicata",
        price: 150.00,
        dimensiuni: {
            adancime: 35,
            inaltime: 45,
            lungime: 35,
        },
        corpColor: "-",
        category: "tabureti",
        slug: "taburet-" + "cubix-rotile".toLowerCase(),
    },
    {
        id: 3,
        name: "Taburet Living",
        images: [taburetLiving, taburetLiving_1, taburetLiving_2],
        description: "Taburet Living",
        price: 140.00,
        dimensiuni: {
            adancime: 0,
            inaltime: 38,
            lungime: 37,
        },
        corpColor: "-",
        category: "tabureti",
        slug: "taburet-" + "living".toLowerCase(),
    },

]
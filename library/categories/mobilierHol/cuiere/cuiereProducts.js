import cuierGeneva from "../../../../app/assets/mobilierhol/Cuiere/Geneva/Cuier Geneva.jpg";
import cuierGeneva1 from "../../../../app/assets/mobilierhol/Cuiere/Geneva/Cuier Geneva Maro.jpg";
import cuierGeneva2 from "../../../../app/assets/mobilierhol/Cuiere/Geneva/Cuier Geneva-2.jpg";
import cuierGeneva3 from "../../../../app/assets/mobilierhol/Cuiere/Geneva/Cuier Geneva-3.webp";
import cuierMilana from "../../../../app/assets/mobilierhol/Cuiere/Milana/Cuier Milana.jpg";
import cuierMilana1 from "../../../../app/assets/mobilierhol/Cuiere/Milana/Cuier Milana+2.jpg";
import cuierMilana2 from "../../../../app/assets/mobilierhol/Cuiere/Milana/Cuier Milana-3.jpg";
import cuierMilana3 from "../../../../app/assets/mobilierhol/Cuiere/Milana/Cuier Milana+4.jpg";
import cuierRuta from "../../../../app/assets/mobilierhol/Cuiere/Ruta/Cuier Ruta.jpg";
import cuierRuta1 from "../../../../app/assets/mobilierhol/Cuiere/Ruta/Cuier Ruta2.jpg";
import cuierRuta2 from "../../../../app/assets/mobilierhol/Cuiere/Ruta/Cuier Ruta-3.jpg";
import cuierMara from "../../../../app/assets/mobilierhol/Cuiere/Mara/Cuier Mara.webp";
import cuierMara1 from "../../../../app/assets/mobilierhol/Cuiere/Mara/Cuier Mara2.webp";
import cuierMara2 from "../../../../app/assets/mobilierhol/Cuiere/Mara/Cuier Mara3.webp";


export const cuiereProducts = [
    {
        id: 1,
        name: "Cuier Geneva",
        images: [cuierGeneva, cuierGeneva1, cuierGeneva2, cuierGeneva3],
        description: "Material caroserie și fațadă: PAL ecologic cu strat laminat; Feronerie: ghidaje în sertare - rolă; Mânere - un sistem de deschidere 'fără mânere' - o soluție modernă - în loc de mânere, adâncituri pe fațadă pentru deschiderea convenabilă a ușii.",
        price: 760.00,
        dimensiuni: {
            latime: 90,
            inaltime: 207,
            adancime: 40,
        },
        corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar Craft Alb",
        faceColor: "-",
        category: "cuiere",
        slug: "cuier-" + "geneva".toLowerCase(),
    },
    {
        id: 2,
        name: "Cuier Milana",
        images: [cuierMilana, cuierMilana1, cuierMilana2, cuierMilana3],
        description: "Cuier Milana Alb Craft este foarte util pentru organizarea articolelor de îmbrăcăminte şi încălţăminte, încadrat la mobila pentru hol.",
        price: 590.00,
        dimensiuni: {
            latime: 80,
            inaltime: 195,
            adancime: 35,
        },
        corpColor: "Stejar Craft Alb, Wenge Lusiana",
        faceColor: "-",
        category: "cuiere",
        slug: "cuier-" + "milana".toLowerCase(),
    },
    {
        id: 3,
        name: "Cuier Ruta",
        images: [cuierRuta, cuierRuta1, cuierRuta2],
        description: "Holul de la intrarea unei case este acel spaţiu pe care îl vedem în prim plan atunci când intrăm sau plecăm de acasă, tot în hol întâlnim şi petrecem oaspeţii.Tocmai din acest motiv acest spaţiu trebuie gândit şi decorat pe măsură, acesta fiind cartea de vizită a intregii locuinţe. Fiind considerat zona de tranzit, piesele de mobilier trebuie alese în aşa fel încât acesta să nu fie aglomerat, să fie funcţional şi modern.",
        price: 870.00,
        dimensiuni: {
            latime: 101,
            inaltime: 205,
            adancime: 34,
        },
        corpColor: "Wenge Magia + Stejar Sonoma, Wenge Magia + Stejar Sonoma Trufa",
        faceColor: "-",
        category: "cuiere",
        slug: "cuier-" + "ruta".toLowerCase(),
    },
    {
        id: 4,
        name: "Cuier Mara de perete",
        images: [cuierMara, cuierMara1, cuierMara2],
        description: "Materiale: PAL Melaminat; Cant ABS; Palarier; Agatatori haine;",
        price: 150.00,
        dimensiuni: {
            latime: 70,
            inaltime: 100,
            adancime: 22,
        },
        corpColor: "Wenge, Nuc Adria, Sonoma Deschis",
        faceColor: "-",
        category: "cuiere",
        slug: "cuier-" + "mara-de-perete".toLowerCase(),
    },
]
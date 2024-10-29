import patGeneva from "../../../../app/assets/dormitor/paturi/Geneva1/Pat Geneva140x200.jpg";
import patGeneva1 from "../../../../app/assets/dormitor/paturi/Geneva1/Pat Geneva140x200-2.jpg";
import patGeneva2 from "../../../../app/assets/dormitor/paturi/Geneva2/Pat Geneva 160x200 .jpg";
import patGeneva3 from "../../../../app/assets/dormitor/paturi/Geneva2/Pat Geneva 160x200-2.jpg";
import patDenver from "../../../../app/assets/dormitor/paturi/Denver1/Pat Denver 90x200.webp";
import patDenver1 from "../../../../app/assets/dormitor/paturi/Denver2/Pat Denver 140x200.webp";
import patDenver2 from "../../../../app/assets/dormitor/paturi/Denver3/Pat Denver 160x200.webp";
import patDenver3 from "../../../../app/assets/dormitor/paturi/Denver3/Pat Denver 160x200-2.webp";
import patPliant from "../../../../app/assets/dormitor/paturi/Pliant/Pat Pliant.webp";
import patPliant1 from "../../../../app/assets/dormitor/paturi/Pliant/Pat Pliant-2.webp";
import patPliant2 from "../../../../app/assets/dormitor/paturi/Pliant/Pat Pliant-3.webp";
import patKentuki from "../../../../app/assets/dormitor/paturi/Kentuki1/Pat Kentuki 90x200.jpg";
import patKentuki1 from "../../../../app/assets/dormitor/paturi/Kentuki2/Pat Kentuki 160x200.jpg";
import patKentuki2 from "../../../../app/assets/dormitor/paturi/Kentuki3/Pat Kentuki 180x200.jpg";
import patAlma from "../../../../app/assets/dormitor/paturi/Alma1/Pat Alma 90x200.webp";
import patAlma1 from "../../../../app/assets/dormitor/paturi/Alma1/Pat Alma 90x200-2.webp";
import patAlma1_1 from "../../../../app/assets/dormitor/paturi/Alma1/Pat Alma 90x200-3.webp";
import patAlma1_2 from "../../../../app/assets/dormitor/paturi/Alma1/Pat Alma 90x200-4.webp";
import patAlma2 from "../../../../app/assets/dormitor/paturi/Alma2/Pat Alma 120x200.webp";
import patAlma2_1 from "../../../../app/assets/dormitor/paturi/Alma2/Pat Alma 120x200-2.webp";
import patAlma2_2 from "../../../../app/assets/dormitor/paturi/Alma2/Pat Alma 120x200-3.webp";
import patAlma3 from "../../../../app/assets/dormitor/paturi/Alma3/Pat Alma 140x200.webp";
import patAlma3_1 from "../../../../app/assets/dormitor/paturi/Alma3/Pat Alma 140x200-2.webp";
import patAlma3_2 from "../../../../app/assets/dormitor/paturi/Alma3/Pat Alma 140x200-3.webp";
import patAlma4 from "../../../../app/assets/dormitor/paturi/Alma4/Pat Alma 160x200.webp";
import patAlma4_1 from "../../../../app/assets/dormitor/paturi/Alma4/Pat Alma 160x200-2.webp";
import patAlma4_2 from "../../../../app/assets/dormitor/paturi/Alma4/Pat Alma 160x200-3.webp";
import patAlma4_3 from "../../../../app/assets/dormitor/paturi/Alma4/Pat Alma 160x200-4.webp";
import almaCuSertar from "../../../../app/assets/dormitor/paturi/Alma-sertar/Pat Alma cu sertar 90x200.webp";
import almaCuSertar1 from "../../../../app/assets/dormitor/paturi/Alma-sertar/Pat Alma cu sertar 90x200-2.webp";
import almaCuSertar2 from "../../../../app/assets/dormitor/paturi/Alma-sertar/Pat Alma cu sertar 90x200-3.webp";
import almaCuSertar3 from "../../../../app/assets/dormitor/paturi/Alma-sertar/Pat Alma cu sertar 90x200-4.webp";
import almaCuSertar4 from "../../../../app/assets/dormitor/paturi/Alma-sertar/Pat Alma cu sertar 90x200-5.webp";
import patClaudiaS from "../../../../app/assets/dormitor/paturi/Claudia1/Pat Tapitat Claudia140x200.jpeg";
import patClaudiaM from "../../../../app/assets/dormitor/paturi/Claudia2/Pat Tapitat Claudia160x200-2.jpg";
import patClaudiaL from "../../../../app/assets/dormitor/paturi/Claudia3/Pat Claudia 180x200.jpeg";
import patKlausS from "../../../../app/assets/dormitor/paturi/Klaus1/Pat Klaus140X200.jpg";
import patKlausM from "../../../../app/assets/dormitor/paturi/Klaus2/Pat Klaus 160x200 .jpg";
import patKlausL from "../../../../app/assets/dormitor/paturi/Klaus3/Pat Klaus 180x200-2.avif";

export const paturiProducts = [
  {
    id: 1,
    name: "Pat Geneva 140x200",
    images: [patGeneva, patGeneva1],
    description:
      "Patul Geneva creează o atmosferă de ergonomie și confort în dormitor. \n Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
    price: 760.0,
    dimensiuni: {
      lungime: 206,
      inaltime: 90,
      latime: 147,
    },
    corpColor:
      "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
    category: "paturi",
    slug: "paturi-" + "geneva1".toLowerCase(),
  },
  {
    id: 2,
    name: "Pat Geneva 160x200",
    images: [patGeneva2, patGeneva3],
    description:
      "Patul Geneva cree o atmosferă de ergonomie și confort în dormitor. \n Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
    price: 820.0,
    dimensiuni: {
      lungime: 206,
      inaltime: 90,
      latime: 167,
    },
    corpColor:
      "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
    category: "paturi",
    slug: "paturi-" + "geneva2".toLowerCase(),
  },
  {
    id: 3,
    name: "Pat Denver 90x200",
    images: [patDenver],
    description:
      "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. \n Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
    price: 590.0,
    dimensiuni: {
      lungime: 207,
      inaltime: 90,
      latime: 98,
    },
    corpColor: "Craft Stejar auriu + Alb",
    category: "paturi",
    slug: "paturi-" + "denver1".toLowerCase(),
  },
  {
    id: 4,
    name: "Pat Denver 140x200",
    images: [patDenver1],
    description:
      "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. \n Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
    price: 770.0,
    dimensiuni: {
      lungime: 207,
      inaltime: 90,
      latime: 148,
    },
    corpColor: "Craft Stejar auriu + Alb",
    category: "paturi",
    slug: "paturi-" + "denver2".toLowerCase(),
  },
  {
    id: 5,
    name: "Pat Denver 160x200",
    images: [patDenver2, patDenver3],
    description:
      "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. \n Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
    price: 830.0,
    dimensiuni: {
      lungime: 207,
      inaltime: 90,
      latime: 168,
    },
    corpColor: "Craft Stejar auriu + Alb",
    category: "paturi",
    slug: "paturi-" + "denver3".toLowerCase(),
  },
  {
    id: 6,
    name: "Pat pliant 80x190",
    images: [patPliant, patPliant1, patPliant2],
    description:
      "Saltea inclusă, cu densitate de 16 kg/m3 şi înălţime de 7 cm. \n Greutate de susţinere 80 kg. \n Ambalaj termoretractabil. \n Material: \n Lamele din lemn de mesteacăn \n Picioare pliabile manual \n Roti din plastic",
    price: 590.0,
    dimensiuni: {
      lungime: "",
      inaltime: "",
      latime: "",
    },
    corpColor: "-",
    category: "paturi",
    slug: "paturi-" + "pliant".toLowerCase(),
  },
  {
    id: 7,
    name: "Pat Kentuki 90x200",
    images: [patKentuki],
    description:
      "Patul LOZ / 90 (cadru) KENTUKI BRW (VMK) este un pat simplu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. \n Este completat suplimentar cu o bază (90x200x28 cm). \n Salteaua se achizitionează separat.",
    price: 920.0,
    dimensiuni: {
      lungime: 209,
      inaltime: 101,
      latime: 99,
    },
    corpColor: "Alb",
    category: "paturi",
    slug: "paturi-" + "kentuki1".toLowerCase(),
  },
  {
    id: 8,
    name: "Pat Kentuki 160x200",
    images: [patKentuki1],
    description:
      "Patul LOZ /160 (cadru) KENTUKI BRW (VMK) este un pat dublu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. \n Este completat suplimentar cu o bază (160x200x28 cm). \n Salteaua se achizitionează separat.",
    price: 1180.0,
    dimensiuni: {
      lungime: 209,
      inaltime: 101,
      latime: 169,
    },
    corpColor: "Alb",
    category: "paturi",
    slug: "paturi-" + "kentuki2".toLowerCase(),
  },
  {
    id: 9,
    name: "Pat Kentuki 180x200",
    images: [patKentuki2],
    description:
      "Patul LOZ / 180 (cadru) KENTUKI BRW (VMK) este un pat dublu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. \n Este completat suplimentar cu o bază (180x200x28 cm). \n Salteaua se achizitionează separat",
    price: 1240.0,
    dimensiuni: {
      lungime: 209,
      inaltime: 101,
      latime: 189,
    },
    corpColor: "Alb",
    category: "paturi",
    slug: "paturi-" + "kentuki3".toLowerCase(),
  },
  {
    id: 10,
    name: "Pat Alma cu picior 90x200",
    images: [patAlma, patAlma1, patAlma1_1, patAlma1_2],
    description:
      "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. \n Este completat suplimentar cu o bază (90x200x28 cm). \n Salteaua se achizitione separat.",
    price: 470.0,
    dimensiuni: {
      lungime: 203,
      inaltime: 80,
      latime: 93,
    },
    corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
    category: "paturi",
    slug: "paturi-" + "alma".toLowerCase(),
  },
  {
    id: 11,
    name: "Pat Alma cu sertar 90x200",
    images: [
      almaCuSertar,
      almaCuSertar1,
      almaCuSertar2,
      almaCuSertar3,
      almaCuSertar4,
    ],
    description:
      "Pat pentru o persoana \n Sertar lateral \n Maner satinat \n Picoare PVC. \n Certificate: ISO 9001, 14001. \n Accesorii incluse: \n Feronerie",
    price: 570.0,
    dimensiuni: {
      lungime: 203,
      inaltime: 80,
      latime: 93,
    },
    corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
    category: "paturi",
    slug: "paturi-" + "alma1".toLowerCase(),
  },
  {
    id: 12,
    name: "Pat Alma cu picior 120x200",
    images: [patAlma2, patAlma2_1, patAlma2_2],
    description:
      "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. \n Este completat suplimentar cu o bază (90x200x28 cm). \n Salteaua se achizitione separat.",
    price: 610.0,
    dimensiuni: {
      lungime: 203,
      inaltime: 80,
      latime: 123,
    },
    corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
    category: "paturi",
    slug: "paturi-" + "alma2".toLowerCase(),
  },
  {
    id: 13,
    name: "Pat Alma cu picior 140x200",
    images: [patAlma3, patAlma3_1, patAlma3_2],
    description:
      "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. \n Este completat suplimentar cu o bază (90x200x28 cm). \n Salteaua se achizitione separat.",
    price: 670.0,
    dimensiuni: {
      lungime: 203,
      inaltime: 80,
      latime: 143,
    },
    corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
    category: "paturi",
    slug: "paturi-" + "alma3".toLowerCase(),
  },
  {
    id: 14,
    name: "Pat Alma cu picior 160x200",
    images: [patAlma4, patAlma4_1, patAlma4_2, patAlma4_3],
    description:
      "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. \n Este completat suplimentar cu o bază (90x200x28 cm). \n Salteaua se achizitione separat.",
    price: 730.0,
    dimensiuni: {
      lungime: 203,
      inaltime: 80,
      latime: 163,
    },
    corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
    category: "paturi",
    slug: "paturi-" + "alma4".toLowerCase(),
  },
  {
    id: 15,
    name: "Pat Claudia fara somiera 140x200",
    images: [patClaudiaS],
    description:
      "",
    prices: {
      cuSomiera: 1260.0,
      somieraRabatabila: 1810.0,
    },
    price: 1020.0,
    dimensiuni: {
      lungime: 200,
      inaltime: 80,
      latime: 140,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "claudia".toLowerCase(),
  },
  {
    id: 16,
    name: "Pat Claudia fara somiera 160x200",
    images: [patClaudiaM],
    description:
      "",
    prices: {
      cuSomiera: 1430.0,
      somieraRabatabila: 1950.0,
    },
    price: 1160.0,
    dimensiuni: {
      lungime: 200,
      inaltime: 80,
      latime: 160,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "claudia3".toLowerCase(),
  },
  {
    id: 17,
    name: "Pat Claudia fara somiera 180x200",
    images: [patClaudiaL],
    description:
      "",
    prices: {
      cuSomiera: 1630.0,
      somieraRabatabila: 2200.0,
    },
    price: 1320.0,
    dimensiuni: {
      lungime: 200,
      inaltime: 80,
      latime: 180,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "claudia6".toLowerCase(),
  },
  {
    id: 18,
    name: "Pat Klaus fara somiera 140x200",
    images: [patKlausS],
    description:
      "",
    prices: {
      cuSomiera: 1610.0,
      somieraRabatabila: 2170.0,
    },
    price: 1380.0,
    dimensiuni: {
      lungime: 211,
      inaltime: 125,
      latime: 153,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "klaus".toLowerCase(),
  },
  {
    id: 19,
    name: "Pat Klaus fara somiera 160x200",
    images: [patKlausM],
    description:
      "",
    prices: {
      cuSomiera: 1790.0,
      somieraRabatabila: 2300.0,
    },
    price: 1520.0,
    dimensiuni: {
      lungime: 211,
      inaltime: 125,
      latime: 173,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "klaus3".toLowerCase(),
  },
  {
    id: 20,
    name: "Pat Klaus fara somiera 180x200",
    images: [patKlausL],
    description:
      "",
    prices: {
      cuSomiera: 1990.0,
      somieraRabatabila: 2550.0,
    },
    price: 1680.0,
    dimensiuni: {
      lungime: 211,
      inaltime: 125,
      latime: 193,
    },
    corpColor: "disponibil in diverse culori",
    category: "paturi",
    slug: "paturi-" + "klaus6".toLowerCase(),
  },
];

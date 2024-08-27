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
      name: "Pat Geneva 1",
      images:[patGeneva, patGeneva1],
      description: "Patul Geneva creează o atmosferă de ergonomie și confort în dormitor. Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
      price: 760.00,
      dimensiuni: {
        lungime: 206,
        inaltime: 90,
        latime: 147,
      },
      corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "geneva1".toLowerCase(),
    },
    {
      id: 2,
      name: "Pat Geneva 2",
      images:[patGeneva2, patGeneva3],
      description: "Patul Geneva cree o atmosferă de ergonomie și confort în dormitor. Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
      price: 820.00,
      dimensiuni: {
        lungime: 206,
        inaltime: 90,
        latime: 167,
      },
      corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "geneva2".toLowerCase(),
    },
    {
      id: 3,
      name: "Pat Denver 1",
      images:[patDenver],
      description: "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
      price: 590.00,
      dimensiuni: {
        lungime: 207,
        inaltime: 90,
        latime: 98,
      },
      corpColor: "Craft Stejar auriu + Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "denver1".toLowerCase(),
    },
    {
      id: 4,
      name: "Pat Denver 2",
      images:[patDenver1],
      description: "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
      price: 770.00,
      dimensiuni: {
        lungime: 207,
        inaltime: 90,
        latime: 148,
      },
      corpColor: "Craft Stejar auriu + Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "denver2".toLowerCase(),
    },
    {
      id: 5,
      name: "Pat Denver 3",
      images:[patDenver2, patDenver3],
      description: "Patul Denver cree o atmosferă de ergonomie și confort în dormitor. Carcasa solidă, spătarul comod și formele fine fac din acest pat o achiziție convenabilă și cu stil.",
      price: 830.00,
      dimensiuni: {
        lungime: 207,
        inaltime: 90,
        latime: 168,
      },
      corpColor: "Craft Stejar auriu + Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "denver3".toLowerCase(),
    },
    {
      id: 6,
      name: "Pat pliant",
      images:[patPliant, patPliant1, patPliant2],
      description: "Saltea inclusă, cu densitate de 16 kg/m3 şi înălţime de 7 cm. Greutate de susţinere 80 kg. Ambalaj termoretractabil. lamele din lemn de mesteacăn, picioare pliabile manual, roti din plastic",
      price: 590.00,
      dimensiuni: {
        lungime: "",
        inaltime: "",
        latime: "",
      },
      corpColor: "-",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "pliant".toLowerCase(),
    },
       {
      id: 7,
      name: "Pat Kentuki 1",
      images:[patKentuki],
      description: "Patul LOZ / 90 (cadru) KENTUKI BRW (VMK) este un pat simplu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitionează separat.",
      price: 920.00,
      dimensiuni: {
        lungime: 209,
        inaltime: 101,
        latime: 99,
      },
      corpColor: "Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "kentuki1".toLowerCase(),
    },
    {
      id: 8,
      name: "Pat Kentuki 2",
      images:[patKentuki1],
      description:"Patul LOZ /160 (cadru) KENTUKI BRW (VMK) este un pat dublu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. Este completat suplimentar cu o bază (160x200x28 cm). Salteaua se achizitionează separat.",
      price: 1180.00,
      dimensiuni: {
        lungime: 209,
        inaltime: 101,
        latime: 169,
      },
      corpColor: "Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "kentuki2".toLowerCase(),
    },
    {
      id: 9,
      name: "Pat Kentuki 3",
      images:[patKentuki2],
      description: "Patul LOZ / 180 (cadru) KENTUKI BRW (VMK) este un pat dublu confortabil al sistemului modular clasic Kentuki BRW din fabrica VMK-Ucraina. Este completat suplimentar cu o bază (180x200x28 cm). Salteaua se achizitionează separat",
      price: 1240.00,
      dimensiuni: {
        lungime: 209,
        inaltime: 101,
        latime: 189,
      },
      corpColor: "Alb",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "kentuki3".toLowerCase(),
    },
    {
      id: 10,
      name: "Pat Alma cu picior",
      images:[patAlma, patAlma1, patAlma1_1, patAlma1_2],
      description: "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 470.00,
      dimensiuni: {
        lungime: 203,
        inaltime: 80,
        latime: 93,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "alma".toLowerCase(),
    },
    {
      id: 11,
      name: "Pat Alma cu sertar",
      images:[almaCuSertar, almaCuSertar1, almaCuSertar2, almaCuSertar3, almaCuSertar4],
      description: "Pat pentru o persoana, sertar lateral, maner satinat, picoare PVC. Certificate: ISO 9001, 14001. Accesorii incluse: feronerie",
      price: 570.00,
      dimensiuni: {
        lungime: 203,
        inaltime: 80,
        latime: 93,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "alma1".toLowerCase(),
    },
    {
      id: 12,
      name: "Pat Alma cu picior 1",
      images:[patAlma2, patAlma2_1, patAlma2_2],
      description: "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 610.00,
      dimensiuni: {
        lungime: 203,
        inaltime: 80,
        latime: 123,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "alma2".toLowerCase(),
    },
    {
      id: 13,
      name: "Pat Alma cu picior 2",
      images:[patAlma3, patAlma3_1, patAlma3_2],
      description: "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 670.00,
      dimensiuni: {
        lungime: 203,
        inaltime: 80,
        latime: 143,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "alma3".toLowerCase(),
    },
    {
      id: 14,
      name: "Pat Alma cu picior 3",
      images:[patAlma4, patAlma4_1, patAlma4_2, patAlma4_3],
      description: "Patul Alma cu picior este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 730.00,
      dimensiuni: {
        lungime: 203,
        inaltime: 80,
        latime: 163,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "alma4".toLowerCase(),
    },
    {
      id: 15,
      name: "Pat Claudia fara somiera",
      images:[patClaudiaS],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1020.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 140,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia".toLowerCase(),
    },
    {
      id: 16,
      name: "Pat Claudia somiera pal",
      images:[patClaudiaS],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1260.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 140,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia1".toLowerCase(),
    },
    {
      id: 17,
      name: "Pat Claudia somiera rabatabila",
      images:[patClaudiaS],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1810.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 140,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia2".toLowerCase(),
    },
        {
      id: 18,
      name: "Pat Claudia fara somiera M",
      images:[patClaudiaM],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1160.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 160,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia3".toLowerCase(),
    },
    {
      id: 19,
      name: "Pat Claudia somiera pal M",
      images:[patClaudiaM],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1430.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 160,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia4".toLowerCase(),
    },
    {
      id: 20,
      name: "Pat Claudia somiera rabatabila M",
      images:[patClaudiaM],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1950.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 160,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia5".toLowerCase(),
    },
        {
      id: 21,
      name: "Pat Claudia fara somiera L",
      images:[patClaudiaL],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1320.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 180,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia6".toLowerCase(),
    },
    {
      id: 22,
      name: "Pat Claudia somiera pal L",
      images:[patClaudiaL],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1630.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 180,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia7".toLowerCase(),
    },
    {
      id: 23,
      name: "Pat Claudia somiera rabatabila L",
      images:[patClaudiaL],
      description: "Patul Claudia este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 2200.00,
      dimensiuni: {
        lungime: 200,
        inaltime: 80,
        latime: 180,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "claudia8".toLowerCase(),
    },
     {
      id: 24,
      name: "Pat Klaus fara somiera",
      images:[patKlausS],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1380.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 153,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus".toLowerCase(),
    },
    {
      id: 25,
      name: "Pat Claudia somiera pal",
      images:[patKlausS],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1610.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 153,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus1".toLowerCase(),
    },
    {
      id: 26,
      name: "Pat Klaus somiera rabatabila",
      images:[patKlausS],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 2170.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 153,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus2".toLowerCase(),
    },
        {
      id: 27,
      name: "Pat Klaus fara somiera M",
      images:[patKlausM],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1520.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 173,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus3".toLowerCase(),
    },
    {
      id: 28,
      name: "Pat Klaus somiera pal M",
      images:[patKlausM],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1790.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 173,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus4".toLowerCase(),
    },
    {
      id: 28,
      name: "Pat Klaus somiera rabatabila M",
      images:[patKlausM],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 2300.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 173,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus5".toLowerCase(),
    },
        {
      id: 29,
      name: "Pat Klaus fara somiera L",
      images:[patKlausL],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1680.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 193,
      },
      corpColor: "Alb, Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus6".toLowerCase(),
    },
    {
      id: 30,
      name: "Pat Klaus somiera pal L",
      images:[patKlausL],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 1990.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 193,
      },
      corpColor: "Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus7".toLowerCase(),
    },
    {
      id: 24,
      name: "Pat Klaus somiera rabatabila L",
      images:[patKlausL],
      description: "Patul Klaus este un pat simplu confortabil al sistemului modular. Este completat suplimentar cu o bază (90x200x28 cm). Salteaua se achizitione separat.",
      price: 2550.00,
      dimensiuni: {
        lungime: 211,
        inaltime: 125,
        latime: 193,
      },
      corpColor: "Pin Antichizat, Sonoma, Sonoma Inchis, Sonoma Deschis",
      faceColor: "-",
      category: "paturi",
      slug: "paturi-" + "klaus8".toLowerCase(),
    },

]
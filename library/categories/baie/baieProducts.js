import dulapBaieAdino4U from "../../../app/assets/baie/Adino4U/Dulap 4 usi.webp";
import dulapBaieAdino4U_1 from "../../../app/assets/baie/Adino4U/Dulap 4 usi2.webp";
import dulapMasinaSpalat from "../../../app/assets/baie/DulapMS/Dulap masina de spalat.webp";
import dulapMasinaSpalat_1 from "../../../app/assets/baie/DulapMS/Dulap masina de spalat2.webp";
import dulapMasinaSpalat_2 from "../../../app/assets/baie/DulapMS/Dulap masina de spalat3.webp";
import etajeraBaieAdino from "../../../app/assets/baie/Etajera/Etajera.webp";
import etajeraBaieAdino_1 from "../../../app/assets/baie/Etajera/Etajera2.webp";
import etajeraBaieAdino_2 from "../../../app/assets/baie/Etajera/Etajera3.webp";

export const baieProducts = [
  {
    id: 1,
    name: "Dulap Baie Adino 4U",
    images: [dulapBaieAdino4U, dulapBaieAdino4U_1],
    description:
      "Dulapul Baie Adino este realizat din PAL melaminat.\nFeroneria folosită la glisarea ușilor aduce un plus de rezistență și o glisare mai ușoară",
    price: 470.0,
    dimensiuni: {
      lungime: 60,
      inaltime: 174,
      adancime: 30,
    },
    corpColor: "Alb, Sonoma",
    category: "baie",
    slug: "dulap-" + "baie-adino-4u".toLowerCase(),
  },

  {
    id: 2,
    name: "Dulap masina de spalat",
    images: [dulapMasinaSpalat, dulapMasinaSpalat_1, dulapMasinaSpalat_2],
    description:
      "Balamale Hafele cu arc pentru inchidere automata.\nSpatiu disponibil interior: inaltime: 96cm,\nLungime: 61.5cm,\nAdancime: 27.7cm.\nSpatiu in partea inferioara(loc pentru masina de spalat):\nInaltime: 90.7cm,\nLungime: 61.5cm,\nAdancime: 26.2cm.",
    price: 340.0,
    dimensiuni: {
      lungime: 65,
      inaltime: 191,
      adancime: 30,
    },
    corpColor: "Alb",
    category: "baie",
    slug: "dulap-" + "masina-de-spalat".toLowerCase(),
  },
  {
    id: 3,
    name: "Etajera baie Adino",
    images: [etajeraBaieAdino, etajeraBaieAdino_1, etajeraBaieAdino_2],
    description: "",
    price: 130.0,
    dimensiuni: {
      lungime: 60,
      inaltime: 50,
      adancime: 14,
    },
    corpColor: "Alb, Sonoma",
    category: "baie",
    slug: "etajera-" + "baie-adino".toLowerCase(),
  },
];

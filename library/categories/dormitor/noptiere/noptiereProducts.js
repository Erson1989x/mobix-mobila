import venera01 from "../../../../app/assets/dormitor/noptiere/Venera/Noptiera Venera.jpg"
import noptierVenera from "../../../../app/assets/dormitor/noptiere/Venera/Noptiera Venera-2.jpg"
import noptierGeneva from "../../../../app/assets/dormitor/noptiere/Geneva/Noptiera Geneva.jpg"
import noptierGeneva1 from "../../../../app/assets/dormitor/noptiere/Geneva/Noptiera Geneva -2.jpg"
import noptierDenver from "../../../../app/assets/dormitor/noptiere/Denver/Noptiera Denver.webp"
import noptierKentuki from "../../../../app/assets/dormitor/noptiere/Kentuki/Noptiera Kentuki.jpeg"

export const noptiereProducts = [
  {
    id: 1,
    name: "Noptiera Venera",
    images:[venera01, noptierVenera],
    description: "Noptiera Venera din material MDF. \n Tip de deschidere: cu balamale",
    price: 170.00,
    dimensiuni: {
      lungime: 46,
      inaltime: 39,
      adancime: 38,
    },
    corpColor: "Stejar kraft gri, alb",
    category: "noptiere",
    slug: "noptier-" + "venera".toLowerCase(),
  },
  {
    id: 2,
    name: "Noptiera Geneva",
    images:[noptierGeneva, noptierGeneva1],
    description: "Noptiera Geneva din material MDF. \n Tip de deschidere: cu balamale",
    price: 160.00,
    dimensiuni: {
      lungime: 52,
      inaltime: 50,
      adancime: 45,
    },
    corpColor: "Gri Grafit + stejar craft alb, Stejar Sonoma Trufa + Wenge Magia",
    category: "noptiere",
    slug: "noptier-" + "geneva".toLowerCase(),
  },
  {
    id: 3,
    name: "Noptiera Denver",
    images:[noptierDenver],
    description: "Noptiera Denver din material MDF. \n Tip de deschidere: cu balamale",
    price: 290.00,
    dimensiuni: {
      lungime: 44,
      inaltime: 35,
      adancime: 59,
    },
    corpColor: "Stejar kraft aur, alb",
    category: "noptiere",
    slug: "noptier-" + "denver".toLowerCase(),
  },
  {
    id: 4,
    name: "Noptiera Kentuki",
    images:[noptierKentuki],
    description: "Noptiera Kentuki din material MDF. \n Tip de deschidere: cu balamale",
    price: 540.00,
    dimensiuni: {
      lungime: 55,
      inaltime: 47,
      adancime: 41,
    },
    corpColor: "Alb",
    category: "noptiere",
    slug: "noptier-" + "kentuki".toLowerCase(),
  }
 

];
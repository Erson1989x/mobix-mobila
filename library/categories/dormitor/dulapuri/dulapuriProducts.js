import dulapDisney2d from "../../../../app/assets/dormitor/dulapuri/Dulap-disney/dulapDisney2d.jpg";
import penarGeneva from "../../../../app/assets/dormitor/dulapuri/Penar-geneva/PenarGeneva1.webp";
import penarGeneva2 from "../../../../app/assets/dormitor/dulapuri/Penar-geneva/PenarGeneva2.jpg";
import penarGeneva3 from "../../../../app/assets/dormitor/dulapuri/Penar-geneva/PenarGeneva3.webp";
import penarGeneva4 from "../../../../app/assets/dormitor/dulapuri/Penar-geneva/PenarGeneva4.webp";


export const dulapuriProducts = [
  {
    id: 1,
    name: "Dulap Disney 2D",
    image: dulapDisney2d,
    description: "Dulapul Disney cu sertar in jos are depozitare şi este realizat după un design modern. Nu există manere. Pentru ușurința deschiderii, în fațade sunt prevăzute adâncituri.",
    price: 650.00,
    dimensiuni: {
      latime: 80,
      inaltime: 200,
      adacime: 50,
    },
    corpColor: "Stejar alb kraft, gri grafit",
    faceColor: "Stejar kraft alb",
    category: "dulapuri",
    slug: "dulap-" + "disney".toLowerCase(),
  },
  {
    id: 2,
    name: "Penar Geneva",
    image: {
      penarGeneva1: penarGeneva,
      penarGeneva2: penarGeneva2,
      penarGeneva3: penarGeneva3,
      penarGeneva4: penarGeneva4
    },
    description: "Materialul caroseriei și al fațadei: PAL ecologic cu un strat laminat \n Feronerie: ghidaje în sertare - rolă\n mânere - un sistem de deschidere (fără mânere) - o soluție modernă - în loc de mânere, \n adâncituri pe fațadă pentru deschiderea convenabilă a ușii.",
    price: 410.00,
    dimensiuni: {
      latime: 45,
      inaltime: 40,
      adacime: 206,
    },
    corpColor: "Stejar Sonoma Trufa+Wenge Magia, Gri Grafit +Stejar Craft Alb",
    faceColor: "-",
    category: "dulapuri",
    slug: "dulap-" + "geneva".toLowerCase(),
  }
];
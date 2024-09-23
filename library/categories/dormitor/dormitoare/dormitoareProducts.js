import dormitorGeneva1 from "../../../../app/assets/dormitor/dormitoare/Geneva/Dormitor Geneva.jpg"
import dormitorGeneva2 from "../../../../app/assets/dormitor/dormitoare/Geneva/Dormitor Geneva-2.jpg"
import dormitorGeneva3 from "../../../../app/assets/dormitor/dormitoare/Geneva/Dormitor Geneva-3.jpg"
import dormitorDenver from "../../../../app/assets/dormitor/dormitoare/Denver/Dormitor Denver.webp"
import dormitorKentuki from "../../../../app/assets/dormitor/dormitoare/Kentuki/Dormitor Kentuki.webp"
import dormitorKentuki1 from "../../../../app/assets/dormitor/dormitoare/Kentuki/Dormitor Kentuki2.webp"
import dormitorKentuki2 from "../../../../app/assets/dormitor/dormitoare/Kentuki/Dormitor Knetuki.webp"


export const dormitoareProducts = [
       {
         id: 1,
         name: "Dormitor Geneva 140x200",
         images:[dormitorGeneva1, dormitorGeneva2, dormitorGeneva3],
         description: "Compozitia setului (LxAxA): \n Dulap Geneva 3D cu 3 usi | 118x50x206cm. \n Pat Geneva 140 | 147x205x90cm. \n 2 Noptiere Geneva 1S | 45x40x40cm",
         price: 2170.00,
         dimensiuni: {
           lungime: 140,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
         category: "dormitoare-set",
         slug: "dormitor-" + "geneva".toLowerCase(),
       },
       {
         id: 2,
         name: "Dormitor Geneva 160x200",
         images:[dormitorGeneva2, dormitorGeneva1, dormitorGeneva3],
         description: "Compozitia setului (LxAxA): \n Dulap Geneva 3D cu 3 usi | 118x50x206cm. \n Pat Geneva 160 | 167x205x90cm. \n 2 Noptiere Geneva 1S | 45x40x40cm",
         price: 2230.00,
         dimensiuni: {
           lungime: 160,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft alb",
         category: "dormitoare-set",
         slug: "dormitor-" + "geneva".toLowerCase(),
       },
       {
         id: 3,
         name: "Dormitor Denver 140x200",
         images:[dormitorDenver],
         description: "Compozitia setului (LxAxA): \n Dulap 3D2Sh | 140x200x50cm. \n Pat (baza lamela) | 148x91x208cm. - Noptiera | 59x44x35cm. \n Comoda 4S | 95x88x43cm",
         price: 3040.00,
         dimensiuni: {
           lungime: 140,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "Craft Stejar auriu + Alb",
         category: "dormitoare-set",
         slug: "dormitor-" + "denver".toLowerCase(),
       },
       {
         id: 4,
         name: "Dormitor Denver 160x200",
         images:[dormitorDenver],
         description: "Compozitia setului (LxAxA): \n Dulap 3D2Sh | 140x200x50cm. \n Pat (baza lamela) | 168x91x208cm. \n Noptiera | 59x44x35cm. \n Comoda 4S | 95x88x43cm",
         price: 3100.00,
         dimensiuni: {
           lungime: 160,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "Craft Stejar auriu + Alb",
         category: "dormitoare-set",
         slug: "dormitor-" + "denver".toLowerCase(),
       },
       {
         id: 5,
         name: "Dormitor Kentuki A",
         images: [ dormitorKentuki1, dormitorKentuki],
         description: "Compozitia setului (LxAxA): \n Dulap 3 usi | 160x61x217cm. \n Pat 160 | 169x209x81cm. \n 2 Noptiere | 55x41x47cm. \n Comoda 4S | 94.5x44.5x90cm",
         price: 6230.00,
         dimensiuni: {
           lungime: 160,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "-",
         category: "dormitoare-set",
         slug: "dormitor-" + "kentuki".toLowerCase(),
       },
       {
         id: 6,
         name: "Dormitor Kentuki B",
         images:[dormitorKentuki1, dormitorKentuki, dormitorKentuki2],
         description: "Compozitia setului (LxAxA): \n Dulap 4 usi | 227.5x61x225cm. \n Pat 160 | 169x209x81cm. \n 2 Noptiere | 55x41x47cm. \n Comoda 2D4S | 154.5x44.5x90cm",
         price: 7320.00,
         dimensiuni: {
           lungime: 160,
           inaltime: 200,
           adancime: 0,
         },
         corpColor: "-",
         category: "dormitoare-set",
         slug: "dormitor-" + "kentukiB".toLowerCase(),
        }

]
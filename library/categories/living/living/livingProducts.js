import livingRoyal1 from "../../../../app/assets/living/Living/Royal/Livig Royal.jpg"
import livingRoyal2 from "../../../../app/assets/living/Living/Royal/Livig Royal-2.jpg"
import livingRoyal3 from "../../../../app/assets/living/Living/Royal/Living Royal.webp"
import livingVenera1 from "../../../../app/assets/living/Living/Venera/Living Venera.png"
import livingVenera2 from "../../../../app/assets/living/Living/Venera/Living Venera.jpg"
import livingVeronika1 from "../../../../app/assets/living/Living/Veronika/Living Veronica.jpeg"
import livingDimas from "../../../../app/assets/living/Living/Dimas/Living Dimas.jpeg"
import livingDimas2 from "../../../../app/assets/living/Living/Dimas/Living Dimas-2.webp"
import livingDimas3 from "../../../../app/assets/living/Living/Dimas/Living Dimas.webp"
import livingDimas4 from "../../../../app/assets/living/Living/Dimas/Living Dimas3.jpeg"
import livingGeneva from "../../../../app/assets/living/Living/Geneva/Living Geneva.jpg"
import livingGeneva2 from "../../../../app/assets/living/Living/Geneva/Living Geneva-2.jpg"
import livingGeneva3 from "../../../../app/assets/living/Living/Geneva/Living Geneva-3.jpg"
import livingGeneva4 from "../../../../app/assets/living/Living/Geneva/Living Geneva 4.jpg"



export const livingProducts = [
    {
      id: 1,
      name: "Living Royal",
      images: [livingRoyal1, livingRoyal2, livingRoyal3],
      description: "Un living elegant și modern va deveni principalul decor al casei tale \n Datorita solutiei moderne de culoare, se incadreaza bine in orice interior, iar compartimentarea il face extrem de practic \n Feronerie: \n ghidaj telescopic cu bila \n lift pe gaz 60N \n limitator de usa 'foarfeca'(in fatada inferioara) \n maner din plastic",
      price: 2200.00,
      dimensiuni: {
        latime: 310,
        inaltime: 200,
        adancime: 50,
      },
      corpColor: "Gri Grafit",
      category: "living",
      slug: "living-" + "royal".toLowerCase(),
    },
    {
      id: 2,
      name: "Living Venera",
      images: [livingVenera1, livingVenera2],
      description: "Livingul Venera va va cuceri inimile cu un frumos design in cele mai reusite combinatii de culori \n Penar: L - 41cm / D - 41cm / H - 207cm \n Raft: L - 120cm / D - 27cm / H - 36cm \n Tumbla TV: L - 120cm / D - 41cm / H - 45cm \n Penar vitrina 2D2DS: L - 80cm / D - 41cm / H - 207cm",
      price: 1630.00,
      dimensiuni: {
        latime: 0,
        inaltime: 0,
        adancime: 0,
      },
      corpColor: "Stejar Kraft Gri + Alb",
      category: "living",
      slug: "living-" + "venera".toLowerCase(),
    },
    {
      id: 3,
      name: "Living Veronika",
      images: [livingVeronika1],
      description: "Livingul Veronica are un dulap, o trusă cu rafturi, o secțiune TV și un număr mare de rafturi închise pentru lucrurile tale. \n Sectiunea TV (LxH): 120x77.5cm",
      price: 2450.00,
      dimensiuni: {
        latime: 302.5,
        inaltime: 195,
        adancime: 50.5,
      },
      corpColor: "Trufa de stejar somona + Alb",
      category: "living",
      slug: "living-" + "veronika".toLowerCase(),
    },
    {
      id: 4,
      name: "Living Dimas",
      images: [livingDimas, livingDimas2, livingDimas3, livingDimas4],
      description: "Livingul Dimas reprezinta o alegere eleganta pentru casa ta!",
      price: 700.00,
      dimensiuni: {
        latime: 200,
        inaltime: 230,
        adancime: 40,
      },
      corpColor: "Stejar Sonoma",
      category: "living",
      slug: "living-" + "dimas".toLowerCase(),
    },
    {
      id: 5,
      name: "Living Geneva",
      images: [livingGeneva, livingGeneva2, livingGeneva3, livingGeneva4],
      description: "Design modern al livingului va forma loc suficient pentru depozitarea, economisind spațiul util al camerei dvs \n Inclus: \n Dulap 2D \n Raft cu balamale \n Comoda TV \n Vitrina Penar",
      price: 2160.00,
      dimensiuni: {
        latime: 245,
        inaltime: 207,
        adancime: 50,
      },
      corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft Alb",
      category: "living",
      slug: "living-" + "geneva".toLowerCase(),
    }
]
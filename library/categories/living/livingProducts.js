import livingRoyal1 from "../../../app/assets/living/Royal/Living Royal.webp"
import livingRoyal2 from "../../../app/assets/living/Royal/Livig Royal-2.jpg"
import livingRoyal3 from "../../../app/assets/living/Royal/Livig Royal.jpg"
import livingVenera1 from "../../../app/assets/living/Venera/Living Venera.jpg"
import livingVenera2 from "../../../app/assets/living/Venera/Living Venera.jpg"
import livingVeronika1 from "../../../app/assets/living/Veronika/Living Veronica.jpeg"
import livingDimas from "../../../app/assets/living/Dimas/Living Dimas.jpeg"
import livingDimas2 from "../../../app/assets/living/Dimas/Living Dimas-2.webp"
import livingDimas3 from "../../../app/assets/living/Dimas/Living Dimas3.jpeg"
import livingDimas4 from "../../../app/assets/living/Dimas/Living Dimas.webp"
import livingGeneva from "../../../app/assets/living/Geneva/Living Geneva.jpg"
import livingGeneva2 from "../../../app/assets/living/Geneva/Living Geneva-2.jpg"
import livingGeneva3 from "../../../app/assets/living/Geneva/Living Geneva-3.jpg"
import livingGeneva4 from "../../../app/assets/living/Geneva/Living Geneva 4.jpg"



export const livingProducts = [
    {
      id: 1,
      name: "Living Royal",
      images: [livingRoyal1, livingRoyal2, livingRoyal3],
      description: "Un living elegant și modern va deveni principalul decor al casei tale. Datorita solutiei moderne de culoare, se incadreaza bine in orice interior, iar compartimentarea il face extrem de practic. Feronerie: ghidaj telescopic cu bila, lift pe gaz 60N, limitator de usa 'foarfeca'(in fatada inferioara), maner din plastic",
      price: 2200.00,
      dimensiuni: {
        latime: 310,
        inaltime: 200,
        adancime: 50,
      },
      corpColor: "Gri Grafit",
      faceColor: "",
      category: "living",
      slug: "living-" + "royal".toLowerCase(),
    },
    {
      id: 2,
      name: "Living Venera",
      images: [livingVenera1, livingVenera2],
      description: "Livingul Venera va va cuceri inimile cu un frumos design in cele mai reusite combinatii de culori. Penar: L - 41cm / D - 41cm / H - 207cm, Raft: L - 120cm / D - 27cm / H - 36cm, Tumbla TV: L - 120cm / D - 41cm / H - 45cm, Penar vitrina 2D2DS: L - 80cm / D - 41cm / H - 207cm",
      price: 1630.00,
      dimensiuni: {
        latime: 0,
        inaltime: 0,
        adancime: 0,
      },
      corpColor: "Stejar Kraft Gri + Alb",
      faceColor: "",
      category: "living",
      slug: "living-" + "venera".toLowerCase(),
    },
    {
      id: 3,
      name: "Living Veronika",
      images: [livingVeronika1],
      description: "Livingul Veronica are un dulap, o trusă cu rafturi, o secțiune TV și un număr mare de rafturi închise pentru lucrurile tale. Sectiunea TV (LxH): 120x77.5cm",
      price: 2450.00,
      dimensiuni: {
        latime: 302.5,
        inaltime: 195,
        adancime: 50.5,
      },
      corpColor: "Trufa de stejar somona + Alb",
      faceColor: "",
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
      faceColor: "",
      category: "living",
      slug: "living-" + "dimas".toLowerCase(),
    },
    {
      id: 5,
      name: "Living Geneva",
      images: [livingGeneva, livingGeneva2, livingGeneva3, livingGeneva4],
      description: "Design modern al livingului va forma loc suficient pentru depozitarea, economisind spațiul util al camerei dvs. Inclus: Dulap 2D, Raft cu balamale, Comoda TV, Vitrina Penar",
      price: 2160.00,
      dimensiuni: {
        latime: 245,
        inaltime: 207,
        adancime: 50,
      },
      corpColor: "Stejar Sonoma Trufa + Wenge Magia, Gri Grafit + Stejar kraft Alb",
      faceColor: "",
      category: "living",
      slug: "living-" + "geneva".toLowerCase(),
    }
]
import salteaLux22CM from "../../../../app/assets/dormitor/saltele/LuxConfort22CM/Saltea Ortopedica 22 cm.jpeg"
import salteaLux22CM_1 from "../../../../app/assets/dormitor/saltele/LuxConfort22CM/Saltea Ortopedica 22 cm+2.jpeg"
import salteaLux25CM from "../../../../app/assets/dormitor/saltele/LuxConfortPlus25.5CM/Saltea Ortopedica Lux 25 cm.jpeg"
import salteaLux25CM_1 from "../../../../app/assets/dormitor/saltele/LuxConfortPlus25.5CM/Saltea Ortopedica Lux 25 cm-2.jpeg"
import salteaSpuma from "../../../../app/assets/dormitor/saltele/Spuma/Saltea Spuma.jpeg"
import salteaSpuma_1 from "../../../../app/assets/dormitor/saltele/Spuma/Saltea Spuma-2.jpeg"
import salteaPoketSpirali from "../../../../app/assets/dormitor/saltele/PoketSpirali/Saltea Pocket Spirali.jpeg"
import salteaPoketSpirali_1 from "../../../../app/assets/dormitor/saltele/PoketSpirali/Saltea Pocket Spirali-2.jpeg"
import salteaPoketSpirali_2 from "../../../../app/assets/dormitor/saltele/PoketSpirali/Saltea Pocket Spirali-3.jpeg"
import salteaPoketSpiraliMemory from "../../../../app/assets/dormitor/saltele/PoketSpiraliMemory/Saltea Pocket Spirali Memory.jpeg"
import salteaPoketSpiraliMemory_1 from "../../../../app/assets/dormitor/saltele/PoketSpiraliMemory/Saltea Pocket Spirali Memory-2.jpeg"
import salteaPoketSpiraliMemory_2 from "../../../../app/assets/dormitor/saltele/PoketSpiraliMemory/Saltea Pocket Spirali Memory-3.jpeg"
import salteaDrSleep from "../../../../app/assets/dormitor/saltele/MemoryDRSLEEP/Saltea Memory DR. Sleep.jpg"
import salteaDrSleep_1 from "../../../../app/assets/dormitor/saltele/MemoryDRSLEEP/Saltea Memory DR. Sleep-2.jpg"
import salteaDrSleep_2 from "../../../../app/assets/dormitor/saltele/MemoryDRSLEEP/Saltea Memory DR. Sleep-3.jpg"
import salteaVerona from "../../../../app/assets/dormitor/saltele/MemoryVerona/Saltea Memory Verona.jpeg"
import salteaVerona_1 from "../../../../app/assets/dormitor/saltele/MemoryVerona/Saltea Memory Verona-2.jpeg"

export const salteleProducts = [
    {
      id: 1,
      name: "Saltea Ortopedica Lux Confort 22CM",
      images: [salteaLux22CM, salteaLux22CM_1],
      description:
        "Miez elastic din arcuri bitronconice tip Bonnell SF 131/2005, h = 148 mm  diametru ext. 86 mm , calite prin procedee electronice din sarma 2.2 mm standard EN 10270- 01 - 2011 \n Tesute intre ele prin conectare elicoidala cu sarma 1.4 mm, sarma  2.2 mm si 1.4mm  produsa in UE\n Incasetare cu fasii spuma poliuretanica N 23/35  - grosime 50 mm \n Pasla adezivata si rigidizata 1000 gr/mp din fibra virgina\n Beneficii: \nSustine o greutatede pana in 75 kg \n Este o saltea economica. \n Este o saltea pretabila pentru camerele de tineret fiind o saltea economica. \n Asigura o aerisire optima la interior datorita miezului elastic din arcuri \n Asigura o fermitate medie. \n GARANTIE 2 ANI",
      price: 450.00,
      prices: {
          variantaOne: 450.00,
          variantaTwo: 550.00,
          variantaThree: 650.00
      },
      category: "saltele",
      slug: "saltele-" + "lux".toLowerCase(),
    },
    {
      id: 2,
      name: "Saltea Super Ortopedica Lux Confort Plus 25.5CM",
      images: [salteaLux25CM, salteaLux25CM_1],
      description: "Miez elastic din arcuri bitronconice tip Bonnell SF 131/2005, h = 148 mm  diametru ext 86 mm , calite prin procedee electronice din sarma 2,2 mm standard EN 10270- 01 - 2011 \n Tesute intre ele prin conectare elicoidala cu sarma 1.4 mm, sarma  2.2 mm si 1.4mm  produsa in UE \n Incasetare cu fasii spuma poliuretanica N 23/35 - grosime 50 mm \n Pasla adezivata si rigidizata 1000 gr/mp din fibra virgina cate 2 pe ambele parti \n Beneficii: \n Saltea  ferma datorita celor cate doua straturi de feltru \n Sustine o greutate mare a persoanelor 115 kg/persoana \n Este o saltea fiabila \n Este o saltea confortabila datorita stratului de 30 mm de spuma \n Raportul Calitate Pret foarte bun \n Este o saltea fara miros deci nu necesita perioada de aerisire la desfacere. \n Spre deosebire de saltelele pana in 20-21 cm inaltime la aceasta nu se simt arcurile. \n Se adreseaza mai multor tipuri de clase sociale. \n GARANTIE 2 ANI",
      price: 600.00,
      prices: {
          variantaOne: 600.00,
          variantaTwo: 790.00,
          variantaThree: 870.00,
      },
      category: "saltele",
      slug: "saltele-" + "lux-plus".toLowerCase(),
    },
    {
      id: 3,
      name: "Saltea Spuma",
      images: [salteaSpuma, salteaSpuma_1],
      description: "Constructia monobloc din spuma poliuretanica cu densitate medie 23 kg/mc asigura confortul necesar acolo unde nu se pot estima/intui nevoile de odihna ale fiecarui utilizator. \n Spumele poliuretanice preiau tensiunea la contactul cu masa corporala si o distribuie uniform pe toata suprafata amprentata. \n GARANTIE 2 ANI",
      price: 600.00,
      prices: {
        variantaOne: 600.00,
        variantaTwo: 770.00,
        variantaThree: 840.00,
      },
      category: "saltele",
      slug: "saltele-" + "spuma".toLowerCase(),
    },
    {
      id: 4,
      name: "Saltea Poket Spirali",
      images: [salteaPoketSpirali, salteaPoketSpirali_1, salteaPoketSpirali_2],
      description: "Miez elastic din arcuri individuale \n Inaltime de 150 mm 7 zone \n Confectionate din sarma de 1.8 si 2 mm grosime invelite in TNT \n Legate perimetral cu rama de incasetare in numar de 250 buc/mp. \n Incasetare cu fasii spuma poliuretanica N 23/35  - grosime 100 mm \n Pasla adezivata nerigidizata 1500 gr/mp din fibra virgina \n Placi confort din spuma poliuretanica N 21/40 - grosime 30 mm \n Matlasaj din stofa saltele tip tricot Silver Care ( densitate 300 gr/mp ,standard OEKO-TEX 100) si vatelina neutra dpdv termic 300 gr/mp, TNT\n Lipire cu adeziv tip Hotmelt, fara miros. \n Husa detasabila cu fermoar pe trei laturi \n Aerisire asigurata de doua benzi din material 3D Mesh \n Salteaua este ambalata in saci de polietilena LDPE - H = 25 cm \n  Garantie 60 luni \n Greutate maxima recomandata de persoana 110 kg. \n GARANTIE 5 ANI",
      price: 1340.00,
      prices: {
        variantaTwo: 1340.00,
        variantaThree: 1460.00,
      },
      category: "saltele",
      slug: "saltele-" + "poket-spirali".toLowerCase(),
    },
    {
      id: 5,
      name: "Saltea Poket Spirali Memory",
      images: [salteaPoketSpiraliMemory, salteaPoketSpiraliMemory_1, salteaPoketSpiraliMemory_2],
      description: "Beneficiaza de un confort sporit datoritamiezului elastic din arcuri independente \n Sustine o greutate mare a persoanelor 110 kg/persoana \n Este o saltea fiabila \n Se adreseaza celor ce doresc un produs de calitate si cu doua tipuri de fermitati, respective medie si moale \n Este o saltea ce se adreseaza celor ce doresc saltele cu design special, husa detasabila Silver Care \n Este o saltea inalta, 25 cm \n Se adreseaza si celor ce nu detin pat cu margine de incasetare, stratul gros spuma 100 mm permite o lipire dubla ca suprafata \n GARANTIE 5 ANI",
      price: 1590.00,
      prices: {
        variantaTwo: 1590.00,
        variantaThree: 1740.00,
      },
      category: "saltele",
      slug: "saltele-" + "poket-spirali-memory".toLowerCase(),
    },
    {
      id: 6,
      name: "Saltea Memory DR.SLEEP",
      images: [salteaDrSleep, salteaDrSleep_1, salteaDrSleep_2],
      description: "Greutate maxima recomandata/persoana 140 Kg \n Această saltea Memory 5+16 reprezintă o cale de mijloc: \n nici prea dură \n nici prea moale \n Poate fi alegerea perfectă pentru orice familie \n La interior, salteaua este formată dintr-un bloc de spumă poliuretanică de densitate mare,de 28kg/m3 , cu grosimea de 16 cm și un strat de 5 cm de spumă memory cu densitate de 50 kg/m3 \n Spuma cu memorie este termosensibilă, reacționând la temperatura corpului.",
      price: 710.00,
      prices: {
        variantaOne: 710.00,
        variantaTwo: 1080.00,
        variantaThree: 1200.00,
      },
      category: "saltele",
      slug: "saltele-" + "memory-dr-sleep".toLowerCase(),
    },
    {
      id: 7,
      name: "Saltea Ortopedica Memory Verona 26CM",
      images: [salteaVerona, salteaVerona_1],
      description: "Greutate maxima recomandata/persoana 120 Kg \n Este o saltea din gama memory foam, saltele vasco-elastice sau “cu memorie”, fiind realizata din spuma poliuretanica HiTech \n Vascozitatea inalta a spumei confera saltelei proprietatea speciala de a lua forma corpului, revenind la starea initiala in momentul detensionarii si permitandu-i in acelasi timp sa elimine 80% din punctele de presiune ale corpului ce se cufunda in burete \n Aceasta saltea ofera echilibrul optim intre gradul de elasticitate si cel de rigiditate, asigurand o pozitie corecta a corpului in timpul somnului si o imbunatatire a circulatiei sangelui.",
      price: 890.00,
      prices: {
        variantaOne: 890.00,
        variantaOneTwo: 980.00,
        variantaTwo: 1160.00,
        variantaThree: 1340.00,
      },
      category: "saltele",
      slug: "saltele-" + "ortopedica-memory-verona-26cm".toLowerCase(),
    }

];

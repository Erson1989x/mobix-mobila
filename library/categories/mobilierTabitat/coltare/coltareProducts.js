import coltareBucatarieDomino from "../../../../app/assets/mobiliertapitat/Coltare/Coltar Domino.jpg";
import coltareBucatarieDomino_1 from "../../../../app/assets/mobiliertapitat/Coltare/Coltar Bucatarie Domino.jpg";
import coltareBucatarieDomino_2 from "../../../../app/assets/mobiliertapitat/Coltare/Coltar Bucatarie Domino.png";
import coltareBucatarieDomino_3 from "../../../../app/assets/mobiliertapitat/Coltare/Coltar Bucatarie Domino2.png";

export const coltareProducts = [
     {
         id: 1,
         name: "Coltar Bucatarie Domino",
         images: [coltareBucatarieDomino, coltareBucatarieDomino_1, coltareBucatarieDomino_2, coltareBucatarieDomino_3],
         description: "Coltar Bucatarie Domino contine: Coltar, Masa, 2 Taburet",
         price: 960.00,
         dimensiuni: {
             adancime: 0,
             inaltime: 0,
             lungime: 0,
         },
         corpColor: "Carcasa: Nuc negru; Tapiterie: Nuc bej",
         faceColor: "-",
         category: "coltare",
         slug: "coltar-" + "bucatarie-domino".toLowerCase(),
     }
]
import PDFDoc from "pdfkit";
import { Point } from "./Point";
import fs from "fs";
import { createRecibo } from "./recibosUtils";

//dimensiones de la hoja A$ : 600x 843

const document = new PDFDoc({
  layout: "portrait",
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  size: "A4",
});
document.pipe(fs.createWriteStream("recibo.pdf"));

//linea vertical
document
  .moveTo(245, 0)

  .lineTo(245, 900)
  .dash(6, { space: 5 })
  .stroke("black");

const ININTIAL_POINT = new Point(0, 0);
createRecibo(document, ININTIAL_POINT);
//HORIZONTAL LINE
document.moveTo(0, 281).lineTo(600, 281).stroke("black");

const ININTIAL_POINT2 = new Point(0, 281);
createRecibo(document, ININTIAL_POINT2);

//HORIZONTAL LINE
document.moveTo(0, 562).lineTo(600, 562).stroke("black");

const ININTIAL_POINT3 = new Point(0, 562);
createRecibo(document, ININTIAL_POINT3);

//HORIZONTAL LINE
document.moveTo(0, 843).lineTo(600, 843).stroke("black");
document.end();

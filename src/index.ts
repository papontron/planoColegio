import PDFDoc from "pdfkit";
import * as fs from "fs";
import {
  CODIGO_LOCAL,
  CODIGO_UGEL,
  EDIFICIO1_HEIGHT,
  EDIFICIO2_HEIGHT,
  EDIFICIO2_WIDTH,
  FIRST_LINE_HEIGHT,
  INNER_MARGIN,
  LINE_HEIGHT,
  MARGIN_LEFT,
  NOMBRE_COLEGIO,
  SECOND_BUILDING_LINE_START,
  SECOND_LINE_HEIGHT,
  TOP_WIDTH,
  TOP_WIDTH2,
  VERTICAL_START,
} from "./var";
import {
  ARCO1,
  ARCO2,
  AULA1,
  AULA2,
  AULA3,
  AULA4,
  AULA5,
  AULA6,
  AULA7,
  DIRECCION_LINE,
  EDIFICIO1_DIVISION,
  EDIFICIO2,
  EDIFICIO2_DIVISION,
  ESCALERA,
  Edificio1,
  KIOSKO,
  LOZA_DEPORTIVA,
  OuterPlane,
  PASADIZO1,
  PASADIZO2,
  PATIO1,
  PATIO2,
} from "./points";
import { Point } from "./Point";
import { CalculateCenterOfRect, DrawEscalera, DrawShape } from "./utils";
const document = new PDFDoc({
  layout: "landscape",
  size: "A4",
  margins: { top: 0, left: 0, right: 0, bottom: 0 },
});
document.pipe(fs.createWriteStream("./esquema.pdf"));

document.text(NOMBRE_COLEGIO, MARGIN_LEFT, VERTICAL_START, { align: "center" });
document.text(
  "CÓDIGO UGEL: " + CODIGO_UGEL,
  MARGIN_LEFT,
  VERTICAL_START + LINE_HEIGHT
);
document.text(
  "CÓDIGO LOCAL: " + CODIGO_LOCAL,
  MARGIN_LEFT,
  VERTICAL_START + 2 * LINE_HEIGHT
);
//draw plane

DrawShape(document, OuterPlane, { color: "red" });
//edificio1
DrawShape(document, Edificio1, { color: "blue" });
//divison primer y segundo piso del edificio1
Point.drawLine(document, {
  startPoint: EDIFICIO1_DIVISION.point1,
  endPoint: EDIFICIO1_DIVISION.point2,
  color: "blue",
});
document
  .rect(
    EDIFICIO1_DIVISION.point1.x + 1,
    EDIFICIO1_DIVISION.point1.y + 1,
    TOP_WIDTH + TOP_WIDTH2 - INNER_MARGIN * 2 - 1,
    EDIFICIO1_HEIGHT / 2 - 2
  )
  .fill("gray");
//direccion
Point.drawLine(document, {
  startPoint: DIRECCION_LINE.point1,
  endPoint: DIRECCION_LINE.point2,
  color: "blue",
});
//aulas
Point.drawLine(document, {
  startPoint: AULA1.point1,
  endPoint: AULA1.point2,
  color: "blue",
});
Point.drawLine(document, {
  startPoint: AULA2.point1,
  endPoint: AULA2.point2,
  color: "blue",
});
Point.drawLine(document, {
  startPoint: AULA3.point1,
  endPoint: AULA3.point2,
  color: "blue",
});
Point.drawLine(document, {
  startPoint: ESCALERA.point1,
  endPoint: ESCALERA.point2,
  color: "blue",
});
document
  .fillColor("black")
  .text("Escalera", ESCALERA.point1.x - 40, ESCALERA.point1.y - 12);
Point.drawLine(document, {
  startPoint: AULA4.point1,
  endPoint: AULA4.point2,
  color: "blue",
});
Point.drawLine(document, {
  startPoint: AULA5.point1,
  endPoint: AULA5.point2,
  color: "blue",
});
//edificio02
DrawShape(document, EDIFICIO2, { color: "blue" });
//edificio2 division
Point.drawLine(document, {
  startPoint: EDIFICIO2_DIVISION.point1,
  endPoint: EDIFICIO2_DIVISION.point2,
  color: "blue",
});
//fill edificio2 segundo piso
document
  .rect(
    EDIFICIO2_DIVISION.point1.x + 1,
    EDIFICIO2_DIVISION.point1.y + 1,
    EDIFICIO2_WIDTH / 2 - 1,
    EDIFICIO2_HEIGHT - 1
  )
  .fill("gray");
Point.drawLine(document, {
  startPoint: AULA6.point1,
  endPoint: AULA6.point2,
  color: "blue",
});
Point.drawLine(document, {
  startPoint: AULA7.point1,
  endPoint: AULA7.point2,
  color: "blue",
});

//pasadizo1
DrawShape(document, PASADIZO1, { color: "black" });
//patio1
DrawShape(document, PATIO1, { color: "black" });
// document.rotate(90,{origin:[0,0]})
// document.fillColor("red").text("hello world")
DrawShape(document, PATIO2, { color: "black" });
//kiosko
DrawShape(document, KIOSKO, { color: "blue" });
//pasadizo direccion
DrawShape(document, PASADIZO2);
//escalera
DrawEscalera(document);
//loza deportiva
DrawShape(document, LOZA_DEPORTIVA);
//calculate center of circle
const center = CalculateCenterOfRect({
  p1: LOZA_DEPORTIVA.point1,
  p2: LOZA_DEPORTIVA.point3,
});
//draw circle
document.circle(center.x, center.y, 22).stroke("black");
//partir loza deportiva en 2
const LOZA_DEPORTIVA_MEDIO_LATERAL_IZQUIERDO = CalculateCenterOfRect({
  p1: LOZA_DEPORTIVA.point1,
  p2: LOZA_DEPORTIVA.point4,
});
const LOZA_DEPORTIVA_MEDIO_LATERAL_DERECHO = CalculateCenterOfRect({
  p1: LOZA_DEPORTIVA.point2,
  p2: LOZA_DEPORTIVA.point3,
});
Point.drawLine(document, {
  startPoint: LOZA_DEPORTIVA_MEDIO_LATERAL_IZQUIERDO,
  endPoint: LOZA_DEPORTIVA_MEDIO_LATERAL_DERECHO,
});
//ARCOS loza deportiva
DrawShape(document, ARCO1);
DrawShape(document, ARCO2);

//nombre de edificios
document.fillColor("black");

document.text("Kiosko", 145, FIRST_LINE_HEIGHT - 90);
document.text("CORREDOR", 240, FIRST_LINE_HEIGHT - 42);
document.text("Dirección", 105, FIRST_LINE_HEIGHT);
document.text("A01", 200, FIRST_LINE_HEIGHT);
document.text("A02", 305, FIRST_LINE_HEIGHT);
document.text("A03", 405, FIRST_LINE_HEIGHT);
document.text("A04", 535, FIRST_LINE_HEIGHT);
document.text("A05", 660, FIRST_LINE_HEIGHT);
document.text("Sala de", 105, SECOND_LINE_HEIGHT);
document.text("Profesores", 105, SECOND_LINE_HEIGHT + 12);
document.text("A08", 200, SECOND_LINE_HEIGHT);
document.text("A09", 305, SECOND_LINE_HEIGHT);
document.text("A10", 405, SECOND_LINE_HEIGHT);
document.text("A11", 535, SECOND_LINE_HEIGHT);
document.text("A12", 660, SECOND_LINE_HEIGHT);
//nombres de segundo edificio

document.text("SSHH", 654, SECOND_BUILDING_LINE_START);
document.text("A07", 654, SECOND_BUILDING_LINE_START + 65);
document.text("A06", 654, SECOND_BUILDING_LINE_START + 135);
document.text("SSHH", 704, SECOND_BUILDING_LINE_START);
document.text("A14", 704, SECOND_BUILDING_LINE_START + 65);
document.text("A13", 704, SECOND_BUILDING_LINE_START + 135);
//patio1
const PATIO1_CENTER = CalculateCenterOfRect({
  p1: PATIO1.point1,
  p2: PATIO1.point3,
});
document.text("PATIO 01", PATIO1_CENTER.x - 20, PATIO1_CENTER.y);
//PATIO2
document.text("PATIO 02", center.x - 30, center.y + 45);
//corredor
const PASADIZO1_CENTER = CalculateCenterOfRect({
  p1: PASADIZO1.point1,
  p2: PASADIZO1.point3,
});
document.text("COREDOR", PASADIZO1_CENTER.x - 45, PASADIZO1_CENTER.y - 5);
document
  .fillColor("red")
  .text("TE01", OuterPlane.point1.x, OuterPlane.point1.y - 15);
document
  .rect(Edificio1.point4.x - 30, Edificio1.point4.y - 25, 30, 25)
  .fillAndStroke("white", "black");
document
  .fillColor("blue")
  .text("E01", Edificio1.point4.x - 25, Edificio1.point4.y - 15);
//E02
document
  .rect(KIOSKO.point4.x, KIOSKO.point4.y - 25, 30, 25)
  .fillAndStroke("white", "black");
document
  .fillColor("blue")
  .text("E02", KIOSKO.point4.x + 5, KIOSKO.point4.y - 15);
// T01,T02
const T01_CENTER = CalculateCenterOfRect({
  p1: OuterPlane.point1,
  p2: OuterPlane.point6,
});
document.fillColor("red").text("T01", T01_CENTER.x - 25, T01_CENTER.y);
const T02_CENTER = CalculateCenterOfRect({
  p1: OuterPlane.point5,
  p2: OuterPlane.point4,
});
document.text("T02", T02_CENTER.x + 5, T02_CENTER.y);
//puertas
//01
document.rect(T01_CENTER.x - 5, T01_CENTER.y + 92, 10, 30).stroke("blue");
document
  .fillColor("black")
  .text("Ingreso", T01_CENTER.x - 53, T01_CENTER.y + 102);
//02
document.rect(T01_CENTER.x - 5, T01_CENTER.y - 105, 10, 30).stroke("blue");
document
  .fillColor("black")
  .text("Ingreso", T01_CENTER.x - 53, T01_CENTER.y - 94);
//03
document
  .rect(OuterPlane.point4.x - 5, OuterPlane.point4.y + 10, 10, 30)
  .stroke("blue");
document
  .fillColor("black")
  .text("Ingreso", OuterPlane.point4.x + 10, OuterPlane.point4.y + 22);
//leyenda
const LEYENDA_ORIGIN = new Point(OuterPlane.point2.x + 10, OuterPlane.point2.y);
document
  .rect(LEYENDA_ORIGIN.x, LEYENDA_ORIGIN.y, 120, 75)
  .fillAndStroke("white", "black");
document
  .fillColor("black")
  .text("Leyenda", LEYENDA_ORIGIN.x + 5, LEYENDA_ORIGIN.y + 8);
document.text("Primer piso", LEYENDA_ORIGIN.x + 5, LEYENDA_ORIGIN.y + 37);
document.text("Segundo piso", LEYENDA_ORIGIN.x + 5, LEYENDA_ORIGIN.y + 55);
document
  .rect(LEYENDA_ORIGIN.x + 90, LEYENDA_ORIGIN.y + 37, 20, 10)
  .fillAndStroke("white", "black");
document
  .rect(LEYENDA_ORIGIN.x + 90, LEYENDA_ORIGIN.y + 55, 20, 10)
  .fillAndStroke("gray", "black");

//nombres de avenidas

const doTransform = function (x: number, y: number, rotation: number) {
  const rads = (rotation / 180) * Math.PI;
  const newX = x * Math.cos(rads);
  const newY = y * Math.sin(rads);
  return { x: newX, y: newY, rads: rads, rotation: rotation };
};
const drawText = function (
  doc: PDFKit.PDFDocument,
  texts: { text: string; x: number; y: number; rotation: number }[]
) {
  texts.forEach((element) => {
    const loc = doTransform(element.x, element.y, element.rotation);
    doc.save();
    doc.rotate(loc.rotation);
    doc.text(element.text, loc.x, loc.y);
    doc.restore();
  });
};
drawText(document, [{ text: "hello world", x: 100, y: 100, rotation: 90 }]);
document.end();

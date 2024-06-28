import PDFDoc from "pdfkit"
import * as fs from "fs"
import { CODIGO_LOCAL, CODIGO_UGEL, EDIFICIO1_HEIGHT, EDIFICIO2_HEIGHT, EDIFICIO2_WIDTH, FIRST_LINE_HEIGHT, INNER_MARGIN, LINE_HEIGHT, MARGIN_LEFT, NOMBRE_COLEGIO, SECOND_LINE_HEIGHT, TOP_WIDTH, TOP_WIDTH2, VERTICAL_START } from "./var";
import { ARCO1, ARCO2, AULA1, AULA2, AULA3, AULA4, AULA5, AULA6, AULA7, DIRECCION_LINE, EDIFICIO1_DIVISION,
     EDIFICIO2, EDIFICIO2_DIVISION, ESCALERA, Edificio1, KIOSKO, LOZA_DEPORTIVA, OuterPlane, PASADIZO1, 
     PASADIZO2, PATIO1, PATIO2 } from "./points";
import { Point } from "./Point";
import { CalculateCenterOfRect, DrawEscalera, DrawShape } from "./utils";
const document = new PDFDoc({layout:"landscape",size:"A4",margins:{top:0,left:0,right:0,bottom:0}});
document.pipe(fs.createWriteStream("./esquema.pdf"))


document.text(NOMBRE_COLEGIO,MARGIN_LEFT, VERTICAL_START,{align:"center"})
document.text("CÓDIGO UGEL: "+CODIGO_UGEL, MARGIN_LEFT, VERTICAL_START+LINE_HEIGHT )
document.text("CÓDIGO LOCAL: "+CODIGO_LOCAL, MARGIN_LEFT, VERTICAL_START+2*LINE_HEIGHT)
//draw plane
DrawShape(document,OuterPlane);
//edificio1
DrawShape(document,Edificio1,{color:"blue"})
//divison primer y segundo piso del edificio1
Point.drawLine(document,{startPoint:EDIFICIO1_DIVISION.point1,endPoint:EDIFICIO1_DIVISION.point2,color:"blue"})
document.rect(EDIFICIO1_DIVISION.point1.x+1,
    EDIFICIO1_DIVISION.point1.y+1,
    TOP_WIDTH+TOP_WIDTH2-INNER_MARGIN*2-1, EDIFICIO1_HEIGHT/2-2).fill("gray")
//direccion
Point.drawLine(document,{startPoint:DIRECCION_LINE.point1,endPoint:DIRECCION_LINE.point2,color:"blue"})
//aulas
Point.drawLine(document,{startPoint:AULA1.point1,endPoint:AULA1.point2,color:"blue"})
Point.drawLine(document,{startPoint:AULA2.point1,endPoint:AULA2.point2,color:"blue"})
Point.drawLine(document,{startPoint:AULA3.point1,endPoint:AULA3.point2,color:"blue"})
Point.drawLine(document,{startPoint:ESCALERA.point1,endPoint:ESCALERA.point2,color:"blue"})
Point.drawLine(document,{startPoint:AULA4.point1,endPoint:AULA4.point2,color:"blue"})
Point.drawLine(document,{startPoint:AULA5.point1,endPoint:AULA5.point2,color:"blue"})
//edificio02
DrawShape(document,EDIFICIO2,{color:"blue"})
//edificio2 division
Point.drawLine(document,{startPoint:EDIFICIO2_DIVISION.point1,endPoint:EDIFICIO2_DIVISION.point2,color:"blue"})
//fill edificio2 segundo piso
document.rect(EDIFICIO2_DIVISION.point1.x+1,EDIFICIO2_DIVISION.point1.y+1,EDIFICIO2_WIDTH/2-1,EDIFICIO2_HEIGHT-1).fill("gray");
Point.drawLine(document,{startPoint:AULA6.point1, endPoint:AULA6.point2,color:"blue"})
Point.drawLine(document,{startPoint:AULA7.point1, endPoint:AULA7.point2,color:"blue"})

//pasadizo1
DrawShape(document,PASADIZO1,{color:"black"})
//patio1
DrawShape(document,PATIO1,{color:"black"})
// document.rotate(90,{origin:[0,0]})
// document.fillColor("red").text("hello world")
DrawShape(document,PATIO2,{color:"black"})
//kiosko
DrawShape(document,KIOSKO,{color:"blue"})
//pasadizo direccion
DrawShape(document,PASADIZO2);
//escalera
DrawEscalera(document);
//loza deportiva
DrawShape(document,LOZA_DEPORTIVA)
//calculate center of circle
const center = CalculateCenterOfRect({p1:LOZA_DEPORTIVA.point1,p2:LOZA_DEPORTIVA.point3});
//draw circle
document.circle(center.x,center.y,22).stroke("black");
//partir loza deportiva en 2
const LOZA_DEPORTIVA_MEDIO_LATERAL_IZQUIERDO = CalculateCenterOfRect({p1:LOZA_DEPORTIVA.point1,p2:LOZA_DEPORTIVA.point4})
const LOZA_DEPORTIVA_MEDIO_LATERAL_DERECHO = CalculateCenterOfRect({p1:LOZA_DEPORTIVA.point2,p2:LOZA_DEPORTIVA.point3})
Point.drawLine(document,{startPoint:LOZA_DEPORTIVA_MEDIO_LATERAL_IZQUIERDO,endPoint:LOZA_DEPORTIVA_MEDIO_LATERAL_DERECHO})
//ARCOS loza deportiva
DrawShape(document,ARCO1);
DrawShape(document,ARCO2);

//nombre de edificios
document.fillColor("black")

document.text("Dirección",105,FIRST_LINE_HEIGHT);
document.text("A01",200,FIRST_LINE_HEIGHT)
document.text("A02",305,FIRST_LINE_HEIGHT)
document.text("A03",405,FIRST_LINE_HEIGHT)
document.text("A04",535,FIRST_LINE_HEIGHT)
document.text("A05",660,FIRST_LINE_HEIGHT)
document.text("Sala de",105,SECOND_LINE_HEIGHT);
document.text("Profesores",105,SECOND_LINE_HEIGHT+12);
document.text("A01",200,SECOND_LINE_HEIGHT)
document.text("A02",305,SECOND_LINE_HEIGHT)
document.text("A03",405,SECOND_LINE_HEIGHT)
document.text("A04",535,SECOND_LINE_HEIGHT)
document.text("A05",660,SECOND_LINE_HEIGHT)
document.end();

import { Point } from "./Point"
import { AULA3, ESCALERA } from "./points";

export type Shape ={
    [key:string]:Point
}

export function DrawShape(document:PDFKit.PDFDocument,shape:Shape,options?:{color?:string,lineWidth?:number}){
    const points = Object.values(shape);
    if(points.length<2) return;
    for(let i=0;i<points.length-1;i++){
        Point.drawLine(document,{startPoint:points[i],endPoint:points[i+1],color:options&&options.color,lineWidth:options&&options.lineWidth});
    }
    Point.drawLine(document,{startPoint:points[0],endPoint:points[points.length-1],color:options&&options.color,lineWidth:options&&options.lineWidth})
}

export function DrawEscalera(document:PDFKit.PDFDocument){
    const distance = 5;
    for(let i=1;i<16;i++){
        Point.drawLine(document,{startPoint:AULA3.point1.sumar({x:0,y:distance*i}),endPoint:ESCALERA.point1.sumar({x:0,y:distance*i})})
    }
}

export function CalculateCenterOfRect({p1,p2}:{p1:Point,p2:Point}){
    return new Point((p1.x+p2.x)/2,(p1.y+p2.y)/2);
}
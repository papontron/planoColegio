import PDFKit from "pdfkit";

export class Point {
    constructor(public x:number, public y:number){

    }
    static moveTo(document:PDFKit.PDFDocument, point:Point){
        document.moveTo(point.x,point.y);
    }
    static drawLine(document:PDFKit.PDFDocument, {startPoint,endPoint,color,lineWidth}:{startPoint:Point,endPoint:Point,color?:string,lineWidth?:number}){
        if(lineWidth){
            document.lineWidth(lineWidth)
        }
        document.moveTo(startPoint.x,startPoint.y);
        document.lineTo(endPoint.x,endPoint.y).stroke(color?color:"black");
    }
    sumar({x,y}:{x:number,y:number}):Point{
        return new Point(this.x+x,this.y+y);
    }
}


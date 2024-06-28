import { Point } from "./Point";
import { MARGIN_LEFT, VERTICAL_START, LINE_HEIGHT, TOP_WIDTH, SMALL_RIGHT_HEIGTH, TOP_WIDTH2, 
    RIGHT_HEIGTH, INNER_MARGIN, EDIFICIO1_HEIGHT, DIRECCION_WIDTH, SALON_WIDTH_1, SALON_WIDTH_2,
     ESCALERA_WIDTH, SALON_WIDTH_3, EDIFICIO2_WIDTH, EDIFICIO2_HEIGHT, EDIFICIO2_AULA_HEIGHT, PASADIZO_HEIGHT1, 
     PATIO2_HEIGHT,
     KIOSKO_WIDTH,
     KIOSKO_HEIGHT,
     LOZA_DEPORTIVA_MARGIN,
     LOZA_DEPORTIVA_ARCO_MARGIN,
     LOZA_DEPORTIVA_ARCO_HEIGHT} from "./var";


//plano general
const point1 = new Point(MARGIN_LEFT,VERTICAL_START+4*LINE_HEIGHT);
const point2 = new Point(MARGIN_LEFT+TOP_WIDTH, point1.y);
const point3 = new Point(MARGIN_LEFT + TOP_WIDTH, point1.y+ SMALL_RIGHT_HEIGTH);
const point4 = new Point(point3.x+TOP_WIDTH2, point3.y);
const point5 = new Point(point4.x, point4.y+RIGHT_HEIGTH)
const point6 = new Point(point1.x,point5.y);
export const OuterPlane = {
    point1,point2,point3,point4,point5,point6
}
//edificio 1
const point7 = new Point(point6.x+INNER_MARGIN,point6.y-INNER_MARGIN)
const point8 = new Point(point7.x, point7.y-EDIFICIO1_HEIGHT);
const point9 = new Point(point5.x-INNER_MARGIN,point8.y);
const point10 = new Point(point9.x,point9.y+EDIFICIO1_HEIGHT)
export const Edificio1 = {
    point1:point7,
    point2:point8,
    point3:point9,
    point4:point10
}
export const EDIFICIO1_DIVISION = {
    point1:new Point(Edificio1.point1.x,Edificio1.point1.y-EDIFICIO1_HEIGHT/2),
    point2:new Point(Edificio1.point3.x,Edificio1.point3.y+EDIFICIO1_HEIGHT/2)
}
export const DIRECCION_LINE = {
    point1:new Point(Edificio1.point2.x+DIRECCION_WIDTH,Edificio1.point2.y),
    point2:new Point(Edificio1.point2.x+DIRECCION_WIDTH,Edificio1.point2.y+EDIFICIO1_HEIGHT)
}
export const AULA1 = {
    point1: new Point(DIRECCION_LINE.point1.x+SALON_WIDTH_1,DIRECCION_LINE.point1.y),
    point2: new Point(DIRECCION_LINE.point2.x+SALON_WIDTH_1,DIRECCION_LINE.point2.y)
}
export const AULA2 = {
    point1: new Point(AULA1.point1.x+SALON_WIDTH_1,AULA1.point1.y),
    point2: new Point(AULA1.point2.x+SALON_WIDTH_1,AULA1.point2.y)
}
export const AULA3 = {
    point1: new Point(AULA2.point1.x+SALON_WIDTH_2,AULA2.point1.y),
    point2:new Point(AULA2.point2.x+SALON_WIDTH_2,AULA2.point2.y)
}

export const ESCALERA = {
    point1: new Point(AULA3.point1.x+ESCALERA_WIDTH,AULA3.point1.y),
    point2: new Point(AULA3.point2.x+ ESCALERA_WIDTH, AULA3.point2.y)
}
export const AULA4 = {
    point1:new Point(ESCALERA.point1.x+SALON_WIDTH_1,ESCALERA.point1.y),
    point2:new Point(ESCALERA.point1.x+SALON_WIDTH_1,ESCALERA.point2.y)
}
export const AULA5={
    point1: new Point(AULA4.point1.x+SALON_WIDTH_3,AULA4.point1.y),
    point2:new Point(AULA4.point2.x+SALON_WIDTH_3,AULA4.point2.y)
}
//edificio 2
export const EDIFICIO2 = {
    point1: new Point(AULA5.point2.x-EDIFICIO2_WIDTH,AULA5.point1.y),
    point2: new Point (AULA5.point2.x-EDIFICIO2_WIDTH,AULA5.point1.y-EDIFICIO2_HEIGHT),
    point3: new Point(AULA5.point2.x,AULA5.point1.y-EDIFICIO2_HEIGHT),
    point4: new Point(AULA5.point2.x, AULA5.point1.y)
}
export const EDIFICIO2_DIVISION = {
    point1: new Point(EDIFICIO2.point2.x+EDIFICIO2_WIDTH/2,EDIFICIO2.point2.y),
    point2: new Point(EDIFICIO2.point1.x+EDIFICIO2_WIDTH/2,EDIFICIO2.point1.y)
}

export const AULA6 = {
    point1: new Point(EDIFICIO2.point1.x,EDIFICIO2.point1.y-EDIFICIO2_AULA_HEIGHT),
    point2: new Point(EDIFICIO2.point1.x+EDIFICIO2_WIDTH, EDIFICIO2.point1.y-EDIFICIO2_AULA_HEIGHT)
}
export const AULA7 = {
    point1: new Point(AULA6.point1.x,AULA6.point1.y-EDIFICIO2_AULA_HEIGHT),
    point2: new Point(AULA6.point2.x, AULA6.point2.y-EDIFICIO2_AULA_HEIGHT)
}

export const PASADIZO1 = {
    point1: new Point(OuterPlane.point3.x,OuterPlane.point3.y+INNER_MARGIN),
    point2: new Point(OuterPlane.point4.x-INNER_MARGIN,OuterPlane.point4.y+INNER_MARGIN),
    point3: new Point(OuterPlane.point4.x-INNER_MARGIN, OuterPlane.point4.y+INNER_MARGIN+PASADIZO_HEIGHT1),
    point4: new Point(OuterPlane.point3.x, OuterPlane.point3.y+INNER_MARGIN+PASADIZO_HEIGHT1)
}

export const PATIO1 = {
    point1: new Point(PASADIZO1.point4.x,PASADIZO1.point4.y+INNER_MARGIN),
    point2: new Point(EDIFICIO2.point2.x-INNER_MARGIN,EDIFICIO2.point2.y),
    point3: new Point(EDIFICIO2.point1.x-INNER_MARGIN, EDIFICIO2.point1.y-INNER_MARGIN),
    point4: new Point(PASADIZO1.point4.x, EDIFICIO2.point1.y-INNER_MARGIN)
}

export const PATIO2 = {
    point1: new Point(OuterPlane.point1.x+INNER_MARGIN,OuterPlane.point1.y+INNER_MARGIN),
    point2:new Point(OuterPlane.point2.x-INNER_MARGIN,OuterPlane.point2.y+INNER_MARGIN),
    point3: new Point(OuterPlane.point2.x-INNER_MARGIN, OuterPlane.point2.y +INNER_MARGIN+ PATIO2_HEIGHT ),
    point4: new Point(OuterPlane.point1.x+INNER_MARGIN, OuterPlane.point1.y +INNER_MARGIN+ PATIO2_HEIGHT)
}

export const KIOSKO = {
    point1: new Point(PATIO2.point4.x, PATIO2.point4.y+INNER_MARGIN),
    point2: new Point(PATIO2.point4.x+KIOSKO_WIDTH, PATIO2.point3.y+INNER_MARGIN),
    point3: new Point(PATIO2.point4.x+KIOSKO_WIDTH, PATIO2.point3.y+INNER_MARGIN+KIOSKO_HEIGHT),
    point4: new Point(PATIO2.point4.x,PATIO2.point4.y+ INNER_MARGIN+KIOSKO_HEIGHT)
}

export const PASADIZO2 = {
    point1: new Point(KIOSKO.point4.x, KIOSKO.point4.y+ INNER_MARGIN),
    point2: new Point(KIOSKO.point3.x+INNER_MARGIN, KIOSKO.point3.y +INNER_MARGIN),
    point3: new Point(KIOSKO.point2.x+ INNER_MARGIN, KIOSKO.point2.y),
    point4: new Point(PATIO2.point3.x, PATIO2.point3.y+INNER_MARGIN),
    point5: new Point(PATIO2.point3.x,PATIO1.point4.y),
    point6: new Point(PATIO2.point4.x, Edificio1.point2.y-INNER_MARGIN)
}

export const LOZA_DEPORTIVA = {
    point1: new Point(PATIO2.point1.x+LOZA_DEPORTIVA_MARGIN,PATIO2.point1.y+INNER_MARGIN),
    point2: new Point(PATIO2.point2.x-LOZA_DEPORTIVA_MARGIN, PATIO2.point2.y+INNER_MARGIN),
    point3: new Point(PATIO2.point3.x -LOZA_DEPORTIVA_MARGIN, PATIO2.point3.y-INNER_MARGIN),
    point4: new Point(PATIO2.point4.x+LOZA_DEPORTIVA_MARGIN,PATIO2.point4.y-INNER_MARGIN)
}

export const ARCO1 = {
    point1: new Point(LOZA_DEPORTIVA.point4.x+LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point4.y),
    point2: new Point(LOZA_DEPORTIVA.point4.x+LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point4.y-LOZA_DEPORTIVA_ARCO_HEIGHT),
    point3: new Point(LOZA_DEPORTIVA.point3.x-LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point3.y-LOZA_DEPORTIVA_ARCO_HEIGHT),
    point4: new Point(LOZA_DEPORTIVA.point3.x-LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point3.y)
}

export const ARCO2 = {
    point1: new Point(LOZA_DEPORTIVA.point1.x+LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point1.y),
    point2: new Point(LOZA_DEPORTIVA.point2.x-LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point2.y),
    point3: new Point(LOZA_DEPORTIVA.point2.x-LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point2.y+LOZA_DEPORTIVA_ARCO_HEIGHT),
    point4: new Point(LOZA_DEPORTIVA.point1.x+LOZA_DEPORTIVA_ARCO_MARGIN,LOZA_DEPORTIVA.point1.y+LOZA_DEPORTIVA_ARCO_HEIGHT)
}
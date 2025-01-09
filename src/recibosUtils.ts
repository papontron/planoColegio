import { Point } from "./Point";
export function createRecibo(
  document: PDFKit.PDFDocument,
  REFERENCE_POINT: Point
) {
  const rightMargin = 60;
  const topMargin = 40;
  //numero de recibo
  const INITIAL_POINT = new Point(
    REFERENCE_POINT.x + rightMargin,
    REFERENCE_POINT.y + topMargin
  );
  document
    .dash(1, { space: 1 })
    .fontSize(14)
    .text("N°", INITIAL_POINT.x, INITIAL_POINT.y + 1);
  document
    .rect(INITIAL_POINT.x + 25, INITIAL_POINT.y - 3, 60, 20)
    .stroke("black");
  document
    .rect(INITIAL_POINT.x + 25 + 75, INITIAL_POINT.y - 3, 60, 20)
    .stroke("black");

  //parte izquierda
  document
    .lineGap(12)
    .fontSize(12)
    .text(
      "Recibí de: .......................................................................................",
      INITIAL_POINT.x,
      INITIAL_POINT.y + 35,
      {
        width: 175,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "La cantidad de: ...........................",
      INITIAL_POINT.x,
      INITIAL_POINT.y + 35 + 50,
      {
        width: 175,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "Por: .....................................................................................................................................................",
      INITIAL_POINT.x,
      INITIAL_POINT.y + 35 + 50 + 30,
      {
        width: 175,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "Fecha: ......../......../.........",
      INITIAL_POINT.x,
      INITIAL_POINT.y + 35 + 50 + 30 + 85,
      {
        width: 175,
        align: "justify",
      }
    );

  //parte de la derecha:
  document
    .fontSize(14)
    .text(
      "I.E.P.    JESÚS EL NAZARENO",
      INITIAL_POINT.x + 200,
      INITIAL_POINT.y - 27,
      { width: 340, align: "center", underline: true }
    );
  document.fontSize(12).text("N°", INITIAL_POINT.x + 200, INITIAL_POINT.y + 2);
  document
    .dash(1, { space: 1 })
    .rect(INITIAL_POINT.x + 220, INITIAL_POINT.y - 3, 60, 20)
    .stroke("black");
  document.text("RECIBO", INITIAL_POINT.x + 300, INITIAL_POINT.y + 2);
  document
    .dash(1, { space: 1 })
    .rect(INITIAL_POINT.x + 310 + 55, INITIAL_POINT.y - 3, 100, 20)
    .stroke("black");
  //contenido
  document
    .lineGap(12)
    .fontSize(12)
    .text(
      "Recibí de: ...............................................................................................................................................................................................",
      INITIAL_POINT.x + 200,
      INITIAL_POINT.y + 35,
      {
        width: 350,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "La cantidad de: ..............................................................................",
      INITIAL_POINT.x + 200,
      INITIAL_POINT.y + 35 + 50,
      {
        width: 350,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "Por: ..................................................................................................................................................................................................................................................................................................................",
      INITIAL_POINT.x + 200,
      INITIAL_POINT.y + 35 + 50 + 30,
      {
        width: 350,
        align: "justify",
      }
    );
  document
    .fontSize(12)
    .text(
      "Fecha: ......../......../.........",
      INITIAL_POINT.x + 200,
      INITIAL_POINT.y + 35 + 50 + 30 + 85,
      {
        width: 350,
        align: "justify",
      }
    );
}

### Tarea 1: La Tabla de Predicciones ###

| Identificador | ¿Qué imprimirá la consola? <br> (Predicción) | Justificación Teórica (Usa términos como: Hoisting, Ámbito de bloque, Ámbito de función, Undefined,...) |
| :--- | :--- | :--- |
| *Log A* | Nada (Undefinded) | Por el **Hoisting**, la declaración de " var producto " se eleva pero su valor todavía no está asignado, por eso vale undefinded. |
| *Log B* | " Teclado mecánico " | En este momento ya se ha ejecutado **producto = "Teclado Mecánico"**, por lo que muestra ese valor. |
| *Log C* | "25" | El **let desceunto = 25** está dentro del "if", que crea un ámbito de bloque. Por eso dentro de ese bloque se utiliza el valor 25. |
| *Log D* | "10" | Fuer adel "if", el **let descuento** ya no existe por que su ámbito es el bloque. Se utiliza el **var descuento = 10**, que tiene ámbito de función. |
| *Log E* | "¡ERROR CATASTRÓFICO!" | "impuesto" fue declarado como "const" dentro del "if", así que solo existe dentro de ese bloque. Al intentar usarlo fuera, provoca un **ReferenceError**, que captura el "catch" |
| *Log F* | "¡ERROR CATASTRÓFICO!" | "precio" usa "let" y se intenta utilizar antes de su declaración. Está en la **Temporal Dead Zone (TDZ)**, por lo que provoca un "ReferenceError" y el "catch" muestra el mensaje de error. |

# 2.7. Actividad Broken Code

## Ejercicio 1: Variable inexistente.

<img width="1165" height="410" alt="Captura de pantalla 2026-10-19 110540" src="https://github.com/user-attachments/assets/a351e377-9794-4f76-8fe9-93b533b624f0" />

Como se ve en la imagen, sale un error de referencia, es decir, "reslt" no esta definido ya que hay una falta de ortografía, sería "result" para que no diera error.

## Ejercicio 2: Comparaciones sospechosas.

En la línea 2 se ve lo siguiente: 
if (edad => 18) {
Para que no de error (lógico), habría que invertir los símbolos, es decir: if (edad >= 18) {

## Ejercicio 3: Return of the Jedi.

Nos encontramos de nuevo con un error lógico, ya que en la línea 3 (// return ofthejedi;) está comentado el return y ese es el error, no devuelve el resultado.

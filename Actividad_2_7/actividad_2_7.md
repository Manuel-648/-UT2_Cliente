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

## Ejercicio 4: Names, names...

De nuevo nos encontramos con un error de referencia, ya que se ha se ha declarado la función "nombre" y la hemos llamado "name" de forma que sale error por que no ha sido declarada anteriormente.

## Ejercicio 5: Out of control.

Nos encontramos de nuevo con un error lógico, ya que el array tiene 4 elementos (0-3) pero la condición (let i = 0; i <= numeros.length; i++) hace que "i" llegue a 4.

## Ejercicio 6: Usando expresiones.

El error se encuentra en la línea 2 (if (num % 2 = 0) {) de forma que nos encontramos un error de sintaxis ya que debería de haber 3 iguales (===) en vez de 1.

## Ejercicio 7: Callback defectuoso.

El error lo encontramos en la línea 2 (callback(dat);), de nuevo un error de referencia ya que "dat" no ha sido declarado, para solucionarlo deberíamos de poner "datos".

## Ejercicio 8: Evento click sospechoso (HTML + JS).

Nos encontramos en este caso con 2 errores:

* Nombre de archivo: Se debería de llamar "(nombre).html" en vez de "(nombre).js" como tenia anteriormente en mi caso.
* Error de referencia: La variable se delcara como "msg" y luego es llamada como "msj" en la línea 10.

## Ejercicio 9: Cálculo misterioso.

Nos encontramos con un error lógico, ya que en la línea 10 (console.log(calcularPrecio(100, 60));) el 60 debería ser 0.6, ya que se le está aplicando un descuento  y la función no valida el valor.

**Opinión personal**

Personalmente, los ejercicios donde más me han costado encontrar el/los errores son el 6 y el 8, ya que en el 6, personalmente no llevo bien lo =/==/===. En el ejercicio 8 había visto el error de referencia, pero el 2 error seguía sin verlo ya que inconscientemente cuando pegué el código de los ejercicios los pegué todos en archivos .js, pero en ese ejercicio me di cuenta tarde de que era .html

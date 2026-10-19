function procesarDatos(datos, callback) {
    callback(dat);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});
$(document).ready(function() {

  
  function actualizarContadores() {
    
    var texto = $('#texto').val();

    // totales de caracteres
    // .length se una para contar el número de caracteres.
    var totalCaracteres = texto.length;

    // sin los espacios
    var sinEspacios = texto.replace(/\s+/g, '').length;

    // contar las palabras
    // .trim() quita los espacios al principio y final.
    var textoLimpio = texto.trim();
    var totalPalabras = 0;

    if (textoLimpio !== '') {
      var palabrasArray = textoLimpio.split(/\s+/);
      totalPalabras = palabrasArray.length;
    }

    // parrafos
    var totalParrafos = 0;
    if (textoLimpio !== '') {
      var lineas = texto.split(/\r\n|\r|\n/);
      var parrafosValidos = lineas.filter(function(linea) {
        return linea.trim().length > 0;
      });
      
      totalParrafos = parrafosValidos.length;
    }

    $('#numCaracteres').text(totalCaracteres);
    $('#numSinEspacios').text(sinEspacios);
    $('#numPalabras').text(totalPalabras);
    $('#numParrafos').text(totalParrafos);
  }

  $('#texto').on('input', function() {
    actualizarContadores();
  });

});
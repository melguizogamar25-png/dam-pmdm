$(document).ready(function() {

    function cifrarCesar(texto, desplazamiento) {
        
        var listaCaracteres = texto.split('');


        var listaCifrada = listaCaracteres.map(function(caracter) {
            
            var esMayuscula = (caracter >= 'A' && caracter <= 'Z');
            var esMinuscula = (caracter >= 'a' && caracter <= 'z');

            if (esMayuscula || esMinuscula) {
                var codigoBase = esMayuscula ? 65 : 97;
                var codigoOriginal = caracter.charCodeAt(0);

                //fórmula matemática del desplazamiento
                var nuevoCodigo = ((codigoOriginal - codigoBase + desplazamiento) % 26 + 26) % 26 + codigoBase;
                
                return String.fromCharCode(nuevoCodigo);
            }

            return caracter;
        });

        var resultadoFinal = "";
        for (var i = 0; i < listaCifrada.length; i++) {
            resultadoFinal += listaCifrada[i];
        }

        return resultadoFinal;
    }

    // Evento cifrar
    $('#btnCifrar').click(function() {
        var textoOriginal = $('#textoEntrada').val();
        var resultado = cifrarCesar(textoOriginal, 3);
        $('#textoResultado').val(resultado);
    });

    // Evento descifrar
    $('#btnDescifrar').click(function() {
        var textoCifrado = $('#textoEntrada').val();
        var resultado = cifrarCesar(textoCifrado, -3);
        $('#textoResultado').val(resultado);
    });

});
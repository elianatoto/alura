function encriptarTexto() {
  var textoOriginal = document.getElementById('inputText').value;
  if (!validarTexto(textoOriginal)) {
    document.getElementById('mensajeValidacion').textContent =
      'El texto solo puede contener letras minúsculas y espacios.';
    return;
  }
  document.getElementById('mensajeValidacion').textContent = '';
  var textoEncriptado = cifrarCesar(textoOriginal, 3);
  var textoEncriptadoElemento = document.getElementById('textoEncriptado');
  textoEncriptadoElemento.textContent = textoEncriptado;
  textoEncriptadoElemento.style.display = 'block';
}

function cifrarCesar(texto, desplazamiento) {
  var textoCifrado = '';
  for (var i = 0; i < texto.length; i++) {
    var charCode = texto.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      textoCifrado += String.fromCharCode(
        ((charCode - 97 + desplazamiento) % 26) + 97
      );
    } else {
      textoCifrado += texto.charAt(i);
    }
  }
  return textoCifrado;
}

function descifrarTexto() {
    var textoEncriptado = document.getElementById("textoEncriptado").textContent;
    var desplazamiento = 3; // El mismo desplazamiento utilizado para cifrar el texto
    var textoDescifrado = descifrarCesar(textoEncriptado, desplazamiento);
    document.getElementById("textoDesencriptado").textContent = textoDescifrado;
    document.getElementById("textoDesencriptado").style.display = "block"; // Mostrar el texto descifrado
}

function descifrarCesar(texto, desplazamiento) {
    var textoDescifrado = "";
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            textoDescifrado += String.fromCharCode((charCode - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            textoDescifrado += texto.charAt(i);
        }
    }
    return textoDescifrado;
}

function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
  }
  
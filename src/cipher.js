const cipher = {encode, decode}

function encode(offset, texto) {
  
  if (typeof offset != 'number' || typeof texto != 'string') {
    throw new TypeError();
  }

  let resultadoCifra = "";
  for (let i = 0; i < texto.length; i++) {
    let textToCode = ((texto.charCodeAt(i) -65 +offset) %26) +65;
    let codeToText = String.fromCharCode(textToCode);
    resultadoCifra = resultadoCifra + codeToText;
  }
  return resultadoCifra;

}

function decode(offset, texto) {
  
  if (typeof offset != 'number' || typeof texto != 'string') {
    throw new TypeError();
  }

  let resultadoDecifra = "";
  for (let i = 0; i < texto.length; i++) {
    let textToCode = ((texto.charCodeAt(i) -90 -offset) %26) +90;
    let codeToText = String.fromCharCode(textToCode);
    resultadoDecifra = resultadoDecifra + codeToText;
  }
  return resultadoDecifra;

}

  export default cipher;
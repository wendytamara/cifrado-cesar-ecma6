$(document).ready(function(){

const btnCipher = $('#cipher');
const btnDecipher = $('#decipher');
const regex = /^[a-zA-Z]*$/;



// funcion para cifrar
btnCipher.on('click', () => {

  const wordsToEncrypt = $('#input-cesar').val();
  const container = $('#content-cipher');

  if (wordsToEncrypt && regex.test(wordsToEncrypt) ) {
    let chartValue = 0;
    let cipherWord ='';

       for (var i=0; i<wordsToEncrypt.length; i++){
         chartValue = wordsToEncrypt.charCodeAt(i);
         if (chartValue>=65 && chartValue<=90){
             chartValue = (chartValue - 65 + 33)%26+65;
             chartValue = String.fromCharCode(chartValue);
             cipherWord = cipherWord + chartValue
         }
         else if(chartValue>=97 && chartValue<=122){
             chartValue = (chartValue - 97 + 33)%26+97;
             chartValue = String.fromCharCode(chartValue);
             cipherWord = cipherWord + chartValue
         }
         else if(chartValue === 32) {
           let space = ' ';
           cipherWord += space;
         }
       }

        container.text(cipherWord);
  }
  else {
    alert('ingrese solo letras')
  }
});


// funcion para descifrar

btnDecipher.on('click', () => {

  const wordsToEncryptDecipher = $('#input-cesar').val();
  const container = $('#content-cipher');

  if (wordsToEncryptDecipher && regex.test(wordsToEncryptDecipher)) {
    let chartValue2 = 0;
    let deCipherWord ='';

       for (var i=0; i<wordsToEncryptDecipher.length ; i++){
         chartValue2 = wordsToEncryptDecipher.charCodeAt(i);
         if (chartValue2>=65 && chartValue2<=90){
             chartValue2 = (chartValue2 + 65 - 33)%26+65;
             chartValue2 = String.fromCharCode(chartValue2);
             deCipherWord = deCipherWord+ chartValue2
         }
         else if(chartValue2>=97 && chartValue2<=122){
             chartValue2 = (chartValue2 + 97 - 45)%26+97;
             chartValue2 = String.fromCharCode(chartValue2);
             deCipherWord = deCipherWord+ chartValue2
         }
          else if(chartValue2 === 32) {
            let space = ' ';
            deCipherWord += space;

          }
       }
       container.text(deCipherWord);
  }
  else {
    alert('ingrese solo letras')
  }
});




})

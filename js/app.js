$(document).ready(function(){

var btnCipher = $('#cipher');
var btnDecipher = $('#decipher');

btnCipher.on('click', cipher);
btnDecipher.on('click', decipher);

function cipher(){
  var wordsToEncrypt = $('#input-cesar').val();
  var container = $('#content-cipher');
  if (wordsToEncrypt) {
    var chartValue = 0;
    var cipherWord ='';

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
       }

        container.text(cipherWord);
  }
};


function decipher() {
  var wordsToEncryptDecipher = $('#input-cesar').val();
  var container = $('#content-cipher');
  if (wordsToEncryptDecipher) {
    var chartValue2 = 0;
    var deCipherWord ='';

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
       }
       container.text(deCipherWord);
  }
}




})

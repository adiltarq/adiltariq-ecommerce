function Clipboard(value){
    var teks = document.getElementById('copy-product-code');
    teks.select();
    if (value == 'copy'){
        document.execCommand('copy');
    } else {
        document.execCommand('cut')
    }
 }
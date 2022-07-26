import encode from './cipher.js';

const answer = document.getElementById('encode');
const button = document.getElementById('encodeButton');
button.addEventListener("click",function(){

    alert(answer.value);
})





var Swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });



let read_more_768 = document.getElementById("read_more_768");
let read_more_1120 = document.getElementById("read_more_1120");
const logos_768 = document.querySelectorAll(".hidden_logo_768");
const logos_1120 = document.querySelectorAll(".hidden_logo_1120");
const hidden_logo_768 = document.querySelector(".hidden_logo_768");
const hidden_logo_1120 = document.querySelector(".hidden_logo_1120"); 
const next_mnemonic_symbol_768 = document.querySelector(".next_mnemonic_symbol_768");
const next_mnemonic_symbol_1120 = document.querySelector(".next_mnemonic_symbol_1120");
const next_text_hidden = document.querySelector(".next_text_hidden"); 
const next_text_read_768 = document.querySelector(".next_text_read_768");   
const next_text_read_1120 = document.querySelector(".next_text_read_1120");  
const a = "Скрыть"; 
const b = "Читать далее"; 
const hidden_text = document.querySelector(".hidden_text");   
let brand = document.querySelectorAll(".brand");

console.log(logos_768);

if (window.screen.width < 1120 ) {
    for (let i = 0; i < logos_768.length; i++) { logos_768[i].classList.add("unshow"); }
    console.log("условие 1 " + window.screen.width);
}


else if (window.screen.width >= 1120) {
   
    for (let i = 0; i < logos_1120.length; i++) { logos_1120[i].classList.add("unshow"); }
  console.log("условие 2 " + window.screen.width);
}


read_more_768.addEventListener ("click", function () {
  for (let hidden_logo_768 of logos_768) {
    if (hidden_logo_768.style.display === "none") {hidden_logo_768.style.display = "flex"; next_text_read_768.innerHTML = a; next_mnemonic_symbol_768.style.transform = 'rotate(270deg)'}
    else {hidden_logo_768.style.display = "none"; next_text_read_768.innerHTML = b; next_mnemonic_symbol_768.innerHTML = "&gg;"; next_mnemonic_symbol_768.style.transform = 'rotate(90deg)'}
} })

read_more_1120.addEventListener("click", function () {

  
  for (let hidden_logo_1120 of logos_1120) { 
    
      if (hidden_logo_1120.style.display === "none") { hidden_logo_1120.style.display = "flex"; next_text_read_1120.innerHTML = a; next_mnemonic_symbol_1120.style.transform = 'rotate(270deg)'}
      else { hidden_logo_1120.style.display = "none"; next_text_read_1120.innerHTML = b; next_mnemonic_symbol_1120.innerHTML = "&gg;"; next_mnemonic_symbol_1120.style.transform = 'rotate(90deg)'}
        
} })



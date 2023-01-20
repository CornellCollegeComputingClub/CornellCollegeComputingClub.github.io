/* NavBar Responsive ------------------------------------------------------------------- */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo  = document.querySelector('#navbar__logo')

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// closes mobile menu when clicking menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1000 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/* Email Form Submit ------------------------------------------------------------------- */
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqM16c8PIIzfct6--VJazNG7WISJHfrLlfwOg-1FTi5L0UNdcw1pxhtW7cPsA32WpS/exec'
const form = document.forms['google-sheet-email']
const msg = document.getElementById('msg')
      
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
                console.log('Success!', response)
                msg.innerHTML = "Thank you for sub"
                setTimeout(function(){
                msg.innerHTML = ""},
                5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
          })

/* Home Typing Text ------------------------------------------------------------------- */
// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Welcome!"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });
         
/* Blog Type Sort ------------------------------------------------------------------- */
function myFunction() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myItems");
  cards = cardContainer.getElementsByClassName("post");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".post h3.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

/* Blog Theme Button Sort ------------------------------------------------------------------- */
// function sortTheme('filter'){
//   var filter = (filter) => {
//     const cards = document.getElementsByClassName("post");
//     for (let i = 0; i < cards.length; i++) {
//         let title = cards[i].querySelector(".post .theme");
//         if (title.innerText.indexOf(filter) > -1) {
//             cards[i].classList.remove("d-none")
//         } else {
//             cards[i].classList.add("d-none")
//         }
//     }
//   }
// }

// function reset(a){
//    var clearAll = () => {
//     cards = document.getElementsByClassName("post")
//     for (i = 0; i < cards.length; i++) {
//         cards[i].classList.remove("d-none")
//     }
//   }
// }
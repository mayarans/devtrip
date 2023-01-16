/* Alterando a cor da borda do input na barra de pesquisa*/
const getInputSearch = document.querySelector(".input-search")
const getDivSearch = document.querySelector(".search")

getInputSearch.addEventListener("focus", function () {
  getDivSearch.classList.add("search-clicked")
})

getInputSearch.addEventListener("blur", function () {
  getDivSearch.classList.remove("search-clicked")
})

/*Movimentação para direita e esquerda da lista de categorias de eventos */

const arrowRight = document.querySelector(".arrow-right")
const arrowLeft = document.querySelector(".arrow-left")
const container = document.querySelector(".container-card-and-text")
container.scrollLeft = 0
const movimento = 150

function click () {
  console.log(container.scrollLeft)
  if (container.scrollLeft >= 200) {
    container.scrollLeft = 300
    arrowRight.classList.remove("icon-clicked")
  } else {
    arrowRight.classList.add("icon-clicked")
  }
  if (container.scrollLeft <=70) {
    container.scrollLeft = 0
    arrowLeft.classList.remove("icon-clicked")
  } else {
    arrowLeft.classList.add("icon-clicked")
  }
}

/* Alternando entre os slides */

const getInputRadio = document.querySelectorAll(".radio-btn")
const getManualBtn = document.querySelectorAll(".manual-btn")
const getSlides = document.querySelector(".slides")

let count = 0

setInterval( function(){
  nextImage();
}, 5000)

getSlides.scrollLeft = 0
function nextImage () {
  getSlides.scrollLeft += 800
  count++
  getManualBtn[count-1].classList.remove("manual-btn-clicked")
  if (count >= getInputRadio.length){
     count = 0
     getSlides.scrollLeft = 0
   }
   getManualBtn[count].classList.add("manual-btn-clicked") 
}

arrowRight.addEventListener("click", () => {
  container.scrollLeft+=movimento
  setTimeout(click, 300)
})

arrowLeft.addEventListener("click", () => {
  container.scrollLeft -= movimento
  setTimeout(click, 300)
})

/* Abrindo modal de cadastro */

const modalSignUp = document.querySelector(".modal-content"),
  btnOpenModalSignUp = document.querySelector(".sign-up-button"),
  btnCloseModal = document.querySelector(".close-modal-icon")

btnOpenModalSignUp.onclick = function () {
  modalSignUp.style.display = "flex"
}

btnCloseModal.onclick = function () {
  modalSignUp.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modalSignUp) {
    modalSignUp.style.display = "none"
  }
}
/* Alterando a cor da borda do input na barra de pesquisa*/
const getInputSearch = document.querySelector(".input-search")
const getDivSearch = document.querySelector(".search")

getInputSearch.addEventListener("focus", function () {
  getDivSearch.classList.add("search-clicked")
})

getInputSearch.addEventListener("blur", function () {
  getDivSearch.classList.remove("search-clicked")
})

/* Alterando a cor da borda do input na barra de pesquisa do modal de localização*/
const getInputSearchLocation = document.querySelector(".input-search-location")
const getDivSearchLocation = document.querySelector(".search-location")

getInputSearchLocation.addEventListener("focus", function () {
  getDivSearchLocation.classList.add("search-clicked")
})

getInputSearchLocation.addEventListener("blur", function () {
  getDivSearchLocation.classList.remove("search-clicked")
})

/*Movimentação para direita e esquerda da lista de categorias de eventos */

const arrowRight = document.querySelector(".arrow-right")
const arrowLeft = document.querySelector(".arrow-left")
const container = document.querySelector(".container-card-and-text")
container.scrollLeft = 0
const movimento = 150

function click() {
  console.log(container.scrollLeft)
  if (container.scrollLeft >= 200) {
    container.scrollLeft = 300
    arrowRight.classList.remove("icon-clicked")
  } else {
    arrowRight.classList.add("icon-clicked")
  }
  if (container.scrollLeft <= 70) {
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

setInterval(function () {
  nextImage()
}, 5000)


getSlides.scrollLeft = 0
function nextImage() {
  getSlides.scrollLeft += 1145
  count++
  getManualBtn[count - 1].classList.remove("manual-btn-clicked")
  if (count >= getInputRadio.length) {
    count = 0
    getSlides.scrollLeft = 0
  }
  getManualBtn[count].classList.add("manual-btn-clicked")
}

arrowRight.addEventListener("click", () => {
  container.scrollLeft += movimento
  setTimeout(click, 300)
})

arrowLeft.addEventListener("click", () => {
  container.scrollLeft -= movimento
  setTimeout(click, 300)
})

/* Abrindo modal de cadastro, login e localização */
const modalContent = document.querySelector(".modal-content")
const modalSignUp = document.querySelector(".sign-up-modal")
const modalLogin = document.querySelector(".login-modal")
const modalLocation = document.querySelector(".location-modal")

const btnOpenModalSignUp = document.querySelector(".sign-up-button")
const btnOpenModalLogin = document.querySelector(".login-button")
const btnOpenModalLocation = document.querySelector(".location")

const btnCloseModal = document.querySelectorAll(".close-modal-icon")

function openSignUpModal() {
  modalContent.style.display = "flex"
  modalSignUp.style.display = "block"
  modalLogin.style.display = "none"
  modalLocation.style.display = "none"
}

function openLoginModal() {
  modalContent.style.display = "flex"
  modalSignUp.style.display = "none"
  modalLogin.style.display = "block"
  modalLocation.style.display = "none"
}

function openLocationModal() {
  modalContent.style.display = "flex"
  modalSignUp.style.display = "none"
  modalLogin.style.display = "none"
  modalLocation.style.display = "block"
}

function closeModals() {
  modalContent.style.display = "none"
  modalSignUp.style.display = "none"
  modalLogin.style.display = "none"
  modalLocation.style.display = "none"
}

btnOpenModalSignUp.addEventListener("click", openSignUpModal)
btnOpenModalLogin.addEventListener("click", openLoginModal)
btnOpenModalLocation.addEventListener("click", openLocationModal)

btnCloseModal.forEach((button, i) => {
  btnCloseModal[i].addEventListener("click", closeModals)
})

window.onclick = function (event) {
  if (event.target == modalContent) {
    closeModals()
  }
}

/* Trocando de modals */
const buttonChangeSignUpToLoginModal = document.querySelector("#login")
const buttonChangeLoginToSignUpModal = document.querySelector("#signup")

buttonChangeSignUpToLoginModal.addEventListener("click", openLoginModal)
buttonChangeLoginToSignUpModal.addEventListener("click", openSignUpModal)

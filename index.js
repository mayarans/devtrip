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

arrowRight.addEventListener("click", () => {
  container.scrollLeft+=movimento
  setTimeout(click, 300)
})

arrowLeft.addEventListener("click", () => {
  container.scrollLeft -= movimento
  setTimeout(click, 300)
})
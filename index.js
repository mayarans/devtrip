/* Alterando a cor da borda do input na barra de pesquisa*/
const getInputSearch = document.querySelector(".input-search")
const getDivSearch = document.querySelector(".search")

getInputSearch.addEventListener("focus", function () {
  getDivSearch.classList.add("search-clicked")
})

getInputSearch.addEventListener("blur", function () {
  getDivSearch.classList.remove("search-clicked")
})

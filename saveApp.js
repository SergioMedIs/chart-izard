const inputVal = document.getElementById('card-img')

const btnAgregar = document.querySelector('#agregar')


console.log(inputVal)
console.log(btnAgregar)

let arr = [];

btnAgregar.addEventListener('click', () => {
  arr.push(inputVal.value)
  inputVal.value = ''
  console.log(arr)
  localStorage.setItem('card', arr)
  renderElemento()
})


const getCharacterName = async () => {

  const input = document.getElementById('personaje').value
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const getData = await fetch(url)

  const data = await getData.json()

  console.log(data)

  renderData(data.data.results)

}
const renderData = (results) => {
  const container = document.getElementById('card')
  container.innerHTML = ''
  results.forEach(item => {
    container.innerHTML += `
      <div>
        <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" />
        <p>${item.name}</p>
        <p></p>
      </div>
    `
  })
}

const validateInput = () => {
  getCharacters()
}

function renderElemento() {
  const lista = document.getElementById('lista-nombres')
  lista.innerHTML = '',
  arr.forEach(function (name, i) {
    lista.innerHTML += `
      <li>
        ${name}
        <button onclick="borrarElemento(${i})" >X</button>

      </li>
    `
  })
}

function borrarElemento(posicion) {
  console.log(posicion)
  arr.splice(posicion, 1)
  localStorage.setItem('nombres', arr)
  renderElemento()
}

function getItems() {
  const nombres = localStorage.getItem('nombres')
  'nombre1, nombre2, nombre2'
  arr = nombres.split(',')
  renderElemento()
}

function editar(i) {
  console.log(i)
}

getItems()
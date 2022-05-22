const getPoke = async () => {

  
    const ciudad = document.getElementById('name').value
  
    let container = document.getElementById('lista-nombres')
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(res => {
        container.innerHTML = `
        <p>
     ${res.name}
        </p>
        <p>
        ${res.img}
        </p>
        `
      })
  }
  
  getPoke()
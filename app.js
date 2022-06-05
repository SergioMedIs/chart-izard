function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const ramdom = getRandomInt(1, 750);
  fetchData(ramdom);
});

const fetchData = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(data);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      vida: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
      especialDefensa: data.stats[4].base_stat,
      velocidad: data.stats[5].base_stat,
  };

    pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (pokemon) => {
  const flex = document.querySelector(".flex");
  const template = document.getElementById("card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);

  clone.querySelector(
    ".card-body-title"
  ).innerHTML = `${pokemon.nombre} `;
  clone.querySelector(".card-body-text");
  clone.querySelectorAll(".card-footer-social h3")[0].textContent =
    pokemon.ataque;
  clone.querySelectorAll(".card-footer-social h3")[1].textContent =
    pokemon.especial;
  clone.querySelectorAll(".card-footer-social h3")[2].textContent =
    pokemon.defensa;

  fragment.appendChild(clone);
  flex.appendChild(fragment);
};

let arr2 = [];
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + min))
}

for (let i = 0; i<=5; i++){
    arr2.push(getRandomInt(45, 100))

}



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HP' , 'Ataque' , 'Defensa', 'Ataque esp.', 'Defensa esp.', 'velocidad'],
        datasets: [{
         label: 'Stats',
            data: arr2,
            fill: true,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(15, 2, 60,34)'
            ],

        }]
    },
    zAxes:[{
      ticks:{
        beginAtZero:true
      }
    }],
    yAxes:[{
      ticks:{
        beginAtZero:true
      }
    }]

});

const pokemonData = [
  {
    name: "Bulbasaur",
    imageSrc: "../assets/pokemon/bulbasaur.png",
    score: 100,
  },
  {
    name: "Butterfree",
    imageSrc: "../assets/pokemon/butterfree.png",
    score: 50,
  },
  {
    name: "Charmander",
    imageSrc: "../assets/pokemon/charmander.png",
    score: 100,
  },
  {
    name: "Jigglypuff",
    imageSrc: "../assets/pokemon/jigglypuff.png",
    score: 100,
  },
  { name: "Meowth", imageSrc: "../assets/pokemon/meowth.png", score: 100 },
  { name: "Pidgiotto", imageSrc: "../assets/pokemon/pidgiotto.png", score: 50 },
  { name: "Pikachu", imageSrc: "../assets/pokemon/pikachu.png", score: 150 },
  { name: "Squirtle", imageSrc: "../assets/pokemon/squirtle.png", score: 100 },
  { name: "Starmie", imageSrc: "../assets/pokemon/starmie.png", score: 150 },
  { name: "Ratata", imageSrc: "../assets/pokemon/ratata.png", score: 50 },
  { name: "Totodile", imageSrc: "../assets/pokemon/totodile.png", score: 100 },
  {
    name: "Cyndaquil",
    imageSrc: "../assets/pokemon/cyndaquil.png",
    score: 100,
  },
  {
    name: "Chicorita",
    imageSrc: "../assets/pokemon/chicorita.png",
    score: 100,
  },
  { name: "Eevee", imageSrc: "../assets/pokemon/eevee.png", score: 100 },
  { name: "Psyduck", imageSrc: "../assets/pokemon/psyduck.png", score: 150 },
  { name: "Magikarp", imageSrc: "../assets/pokemon/magikarp.png", score: 50 },
  { name: "Goldeen", imageSrc: "../assets/pokemon/goldeen.png", score: 50 },
  { name: "Caterpie", imageSrc: "../assets/pokemon/caterpie.png", score: 50 },
  { name: "Snorlax", imageSrc: "../assets/pokemon/snorlax.png", score: 150 },
  // enemy pokemon
  { name: "Ekans", imageSrc: "../assets/pokemon/ekans.png", score: 300 },
  { name: "Koffing", imageSrc: "../assets/pokemon/koffing.png", score: 300 },
  { name: "Kadabra", imageSrc: "../assets/pokemon/kadabra.png", score: 500 },
  { name: "Gastly", imageSrc: "../assets/pokemon/gastly.png", score: 200 },
];

const specialPokemonData = [
  {
    name: "Celebi",
    imageSrc: "../assets/special-pokemon/celebi.png",
    score: 1000,
  },
  {
    name: "Entei",
    imageSrc: "../assets/special-pokemon/entei.png",
    score: 1000,
  },
  {
    name: "Ho-oh",
    imageSrc: "../assets/special-pokemon/ho-oh.png",
    score: 500,
  },
  { name: "Mew", imageSrc: "../assets/special-pokemon/mew.png", score: 500 },
  {
    name: "Mewtwo",
    imageSrc: "../assets/special-pokemon/mewtwo.png",
    score: 500,
  },
  {
    name: "Dragonite",
    imageSrc: "../assets/special-pokemon/dragonite.png",
    score: 100,
  },
  {
    name: "Lugia",
    imageSrc: "../assets/special-pokemon/lugia.png",
    score: 500,
  },
  { name: "Jynx", imageSrc: "../assets/special-pokemon/jynx.png", score: 0 },
  {
    name: "Blastoise",
    imageSrc: "../assets/special-pokemon/blastoise.png",
    score: 0,
  },
  {
    name: "Charizard",
    imageSrc: "../assets/special-pokemon/charizard.png",
    score: 500,
  },
  {
    name: "Venosaur",
    imageSrc: "../assets/special-pokemon/venosaur.png",
    score: 500,
  },

  // enemy pokemon
  {
    name: "Arbok",
    imageSrc: "../assets/special-pokemon/arbok.png",
    score: 500,
  },
  {
    name: "Weezing",
    imageSrc: "../assets/special-pokemon/weezing.png",
    score: 500,
  },
  {
    name: "Gengar",
    imageSrc: "../assets/special-pokemon/gengar.png",
    score: 500,
  },
];

const levels = [
  {
    level: "1",
    background: "../assets/background/mount-background.png",
    maxCount: 20,
    rate: 1000,
    speed: 2,
    specialRate: 10000,
    specialSpeed: 4,
  },

  {
    level: "2",
    background: "../assets/background/cave.png",
    maxCount: 10,
    rate: 800,
    speed: 3,
    specialRate: 10000,
    specialSpeed: 5,
  },
  {
    level: "3",
    background: "../assets/background/veridian.png",
    maxCount: 10,
    rate: 1000,
    speed: 6,
    specialRate: 10000,
    specialSpeed: 3,
  },
  {
    level: "4",
    background: "../assets/background/mirage-island.png",
    maxCount: 10,
    rate: 800,
    speed: 6,
    specialRate: 5000,
    specialSpeed: 5,
  },
  {
    level: "5",
    background: "../assets/background/kyo.png",
    maxCount: 10,
    rate: 100,
    speed: 2,
    specialRate: 10000,
    specialSpeed: 15,
  },
  {
    level: "6",
    background: "../assets/background/safron.png",
    maxCount: 10,
    rate: 1000,
    speed: 10,
    specialRate: 15000,
    specialSpeed: 10,
  },
  {
    level: "7",
    background: "../assets/background/ice.png",
    maxCount: 10,
    rate: 200,
    speed: 10,
    specialRate: 15000,
    specialSpeed: 5,
  },
  {
    level: "8",
    background: "../assets/background/stadium.png",
    maxCount: 5000,
    rate: 10,
    speed: 2,
    specialRate: 200,
    specialSpeed: 15,
  },
];

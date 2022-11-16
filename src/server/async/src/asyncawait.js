const fetchData = new require("./fetch");
const API = "https://rickandmortyapi.com/api/character/";

async function personajes(callback_) {
  console.log("ASYNC AWAIT");

  for (let i = 1; i <= 20; i++) {
    let data = await callback_(`${API}${i}`);
    console.log(`${data.id} - ${data.name} - ${data.species}`);
  }
}

personajes(fetchData);

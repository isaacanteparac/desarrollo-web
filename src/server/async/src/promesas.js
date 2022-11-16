const fetchData = new require("./fetch");
const API = "https://rickandmortyapi.com/api/character/";

function promise_(callback_, urlApi) {
  console.log("PROMESA");
  for (let i = 1; i <= 10; i++) {
    callback_(urlApi)
      .then((data) => {
        return callback_(`${urlApi}${i}`);
      })
      .then((data) => console.log(`${data.id} - ${data.name}`))
      .catch((data) => console.error(data));
  }
}

promise_(fetchData, API);

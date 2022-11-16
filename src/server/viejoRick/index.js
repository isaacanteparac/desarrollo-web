var data;
var count = 0;
var page = 1;

function dataApi(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onload = async () => {
    if (req.status === 200) {
      data = await JSON.parse(req.responseText);
      data = data.results;
      return data;
    } else {
      const error = new Error(url);
      console.log(error + "\nStatus code:" + req.status);
    }
  };
  req.send();
}

function createInfo(people) {
  const boxMain = document.getElementById("info");
  const boxContainerInfo = document.createElement("div");
  boxContainerInfo.appendChild(createImg(people.image))

  boxContainerInfo.appendChild(boxinfo("Name: ", people.name));
  boxContainerInfo.appendChild(boxinfo("Specie: ", people.species));
  boxContainerInfo.appendChild(boxinfo("Status: ", people.status));
  boxContainerInfo.appendChild(boxinfo("Gender: ", people.gender));
  boxContainerInfo.appendChild(boxinfo("Orige: ", people.origin.name));
  boxContainerInfo.className = "boxSmall";
  return boxMain.appendChild(boxContainerInfo);
}

function boxinfo(title, description) {
  const createBox = document.createElement("div");
  const createTitle = document.createElement("label");
  const createDescription = document.createElement("label");
  createTitle.appendChild(document.createTextNode(title));
  createTitle.className = "title"
  createDescription.appendChild(document.createTextNode(description));
  createBox.appendChild(createTitle);
  createBox.appendChild(createDescription);
  return createBox;
}

function createImg(imgUrl){
    const img = document.createElement("img")
    img.src = imgUrl
    return img
}

function main() {
  dataApi("https://rickandmortyapi.com/api/character");
}

function btn() {
  if (count != data.length) {
    createInfo(data[count]);
    count += 1;
  } else {
    count = 0;
    page +=1
    dataApi("https://rickandmortyapi.com/api/character/?page="+page);
  }
}

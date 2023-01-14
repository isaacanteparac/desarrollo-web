function dataApi() {
    const req = new XMLHttpRequest();
  
    const url = "http://localhost:5550/user/get";
    req.open("GET", url, true);
    req.onload = async () => {
      if (req.status === 200) {
        const data = await JSON.parse(req.responseText);
        console.trace(data);
        return itemTable(data.body);
      } else {
        const error = new Error(url);
        console.log(error + "\nStatus code:" + req.status);
      }
    };
    req.send();
  }
  
  function itemTable(data_) {
    const table = document.getElementById("idTable");
    data_.map((item) => {
      const boxItem = document.createElement("tr");
      boxItem.className += "item";
      const itemName = document.createElement("td");
      itemName.innerText = item.name;
      const itemLastname = document.createElement("td");
      itemLastname.innerText = item.lastname;
      const itemEmail = document.createElement("td");
      itemEmail.innerText = item.email;
      boxItem.appendChild(itemName);
      boxItem.appendChild(itemLastname);
      boxItem.appendChild(itemEmail);
      table.appendChild(boxItem);
    });
    return table;
  }
  
import "./styles.css";

document.getElementById("app").innerHTML =
  '<div class="column" style="background-color:#aaa;"><ul id="myList"></ul></div><div class="column" style="background-color:#bbb;"><ul id="myLocations"></ul></div>';

function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];

  return result;
}

const locations = [
  "Pg 15, #5 Mining Company HQ",
  "Pg 13, #1 City Gate",
  "Pg 14, #2 Barracks and Jail",
  "Pg 15, #3 Wicker Goat Tavern",
  "Pg 15, #4 Eliander's House",
  "Pg 15, #5 Mining Company HQ",
  "Pg 15, #6 Keledek Tower",
  "Pg 15, #7 Faithful Quartermasters of Iuz",
  "Pg 15, #8 Empty Net Tavern",
  "Pg 17, #9 Green Market",
  "Pg 17, #10 Sharkfin Bridge",
  "Pg 17, #11 Kester’s Leather Goods",
  "Pg 17, #12 Hoolwatch Tower",
  "Pg 17, #13 The Snapping Line Inn and Tavern",
  "Pg 17, #14 Council Hall",
  "Pg 17, #15 Weekly Market",
  "Pg 16, #16 Primewater Mansion",
  "Pg 17, #17 The Dwarven Anvil Smithy",
  "Pg 18, #20 Solmor House",
  "Pg 18, #22 Ingo the Drover’s House",
  "Pg 18 #23 Carpenters Guildhall",
  "Pg 18 #24 Crabbers Cove",
  "Pg 19 #25 The Leap",
  "Pg 19, #26 Temple of Aylos",
  "Pg 19, #27 Saltmarsh Cemetery",
  "Pg 19 #28, Winston’s Store",
  "Pg 19 #29 Sea Grove of Obad-Hai",
  "Pg 19, #30 Standing Stones"
];

let pages = [];
let names = [];

for (let x = 0; x < locations.length; x++) {
  let match = /P.*?[A-Z]/g.exec(locations[x]);
  let pos;
  if (match) {
    pos = match[0].length - 1;
  }

  const [first, second] = split(locations[x], pos);

  pages.push(first);
  names.push(second);
}

pages.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  document.getElementById("myList").append(li);
});

names.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  document.getElementById("myLocations").append(li);
});

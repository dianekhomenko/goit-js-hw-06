const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(
  "#ingredients"
);

const liArray = [];

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  li.className = "item";
  liArray.push(li);
}

list.append(...liArray);
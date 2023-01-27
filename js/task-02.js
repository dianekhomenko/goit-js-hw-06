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

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(ingredients[i])
  );
  li.className = "item";
  list.appendChild(li);
}
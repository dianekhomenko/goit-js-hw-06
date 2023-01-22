const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery =
  document.querySelector(".gallery");

const template = images
  .map(
    (image) =>
      `<li><img class="item" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", template);

// for (let i = 0; i < images.length; i++) {
//   let li = document.createElement("li");
//   const img = document.createElement("img");
//   img.className = "item";

//   img.src = images[i].url;
//   img.alt = images[i].alt;

//   li.appendChild(img);
//   gallery.appendChild(li);
// }

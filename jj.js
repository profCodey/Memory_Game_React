const arr = [2, 4, 5, 7, 5, 3, 6, 3, 7, 3, 6]

const newArr = [...arr, ...arr];
newArr.sort(()=> Math.random() - 0.5);
console.log(newArr)


const cardImages = [
  { src: "./public/img/potion-1.png" },
  { src: "./public/img/helmet-1.png" },
  { src: "./public/img/ring-1.png" },
  { src: "./public/img/scroll-1.png" },
  { src: "./public/img/shield-1.png" },
  { src: "./public/img/sword-1.png" },
];

let g = cardImages.map(v => ({ ...v, id: Math.random()}))
console.log(g)
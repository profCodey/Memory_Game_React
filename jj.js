const laa = [19, 45, 19, 53, 54]
const cardImages = [
  { src: "/img/apa1.png", matched: false },
  { src: "/img/apa2.png", matched: false },
  { src: "/img/apa3.png", matched: false },
  { src: "/img/apa4.jpg", matched: false },
  { src: "/img/apa5.jpeg", matched: false },
  { src: "/img/apa6.png", matched: false },
];

const result = cardImages.every((e) => e.matched === false);
console.log(result)

console.log(allMatched)

let allMatched = cardImages.every((card) => card.matched === true);
if (allMatched) {
  console.log("hhheeee, all has matchend");
}


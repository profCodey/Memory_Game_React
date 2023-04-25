import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/singleCard';


  
const cardImages = [
  { "src": "/img/apa1.png", matched: false },
  { "src": "/img/apa2.png", matched: false },
  { "src": "/img/apa3.png", matched: false },
  { "src": "/img/apa4.jpg", matched: false },
  { "src": "/img/apa5.jpeg", matched: false },
  { "src": "/img/apa6.png", matched: false },
]
  

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(true);
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
     setModal(false);
  }

  const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

 console.log("modal", modal)
  //Check if Choice one and Choice two matches
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
         return  prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
         } else return card
       })
     })
        resetTurn()
      } else {
       setTimeout(() => resetTurn(), 1000); 
      }
    }
 console.log("modal2", modal);
    
    if (cards.length !== 0){
    let allMatched = cards && cards.every((card) => card.matched === true);
    console.log("allmatched", allMatched)
    if (allMatched) {
      setTimeout(() => {
      setModal(true)
    }, 1300)
      // console.log("i am complete", allMatched, cards)
    }}
    
  }, [choiceOne, choiceTwo])

  // console.log("cards", cards)


  //reset choices and increase
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1)
    setDisabled(false)
}

  

  return (
    <div className="App">
      <div className="heading">
        <h1>Memory Game</h1>
        <p className = "instruction">Click the button below</p>
        <button onClick={shuffleCards}>New Game</button>
      </div>
      <div className="card-grid">
        {cards?.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <br />
      <div className="btm">
        <h4 className="turns">Turns: {turns}</h4>
        <p>
          Designed by Demilade Otunaiya <br />
          -otunaiyademilade@gmail.com
        </p>
      </div>

      {modal && (
        <div className="modal">
          <div className="modalCover">
            <div className='close' onClick={()=> setModal(false)}><h2>X</h2></div>
            <div>
              <img src="/img/trophy.jpg" alt="trophy" />
              <h2 className="congrats">Congratulations</h2>
              <p>You matched all the cards completely</p>
              <div className="scoreView">
                <p>You scored </p>
                <p className="score">{turns} points</p>
              </div>
                     <div className="btn"><button onClick={shuffleCards}>New Game</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
import React, { useState, useEffect } from "react";
import { CardWrapper, CardInner, CardFront, CardBack } from "./img-styeld";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";
import img9 from "../../assets/img/img9.jpg";
import img10 from "../../assets/img/img10.jpg";
import img11 from "../../assets/img/img11.jpg";
import img12 from "../../assets/img/img12.jpg";
import img13 from "../../assets/img/img13.jpg";
import img14 from "../../assets/img/img14.jpg";
import img15 from "../../assets/img/img15.jpg";
import img16 from "../../assets/img/img16.jpg";
import img17 from "../../assets/img/img17.jpg";
import img18 from "../../assets/img/img18.jpg";
import img19 from "../../assets/img/img19.jpg";
import img20 from "../../assets/img/img20.jpg";

// Funktion til at blande kortene
const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};
  const allCards = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
    { id: 17, src: img17 },
    { id: 18, src: img18 },
    { id: 19, src: img19 },
    { id: 20, src: img20 },
  ];

 //kode der dubliker kort//
  const shuffledCards = shuffleCards([...allCards, ...allCards]);
export const Cart = () => {

//kode der der skal håndtere om det er matche og flipped//
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  //kode der håntere om man kan clike på kort eller ej//
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes([index])) {
      return;
    }

    setFlippedCards((prev) => [...prev, index]);
  };

  
  //kode der kigger om kortne matcher//
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (shuffledCards[firstCard].id === shuffledCards[secondCard].id){
        
        setMatchedCards((prev) => [...prev, firstCard, secondCard]);
        
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  },[flippedCards] );

  return (
    <>
      {shuffledCards.map((card, index) => {
        
          return(
          <CardWrapper key={index} onClick={() => handleCardClick(index)}>
          <CardInner $flipped={flippedCards.includes(index) || matchedCards.includes(index)}>
            <CardFront src={card.src} />
            <CardBack />
          </CardInner>
        </CardWrapper>
      )
    } )}

    </>
  );
};

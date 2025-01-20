import styled from "styled-components";
import cardback from "../../assets/img/cart-baground.jpg";

export const CardWrapper = styled.div`
  width: 150px;
  height: 200px;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;



export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  background: ${(props) => `url(${props.src})`} no-repeat center/cover;
  transform: rotateY(180deg); 
  border-radius: 10px;
  border: 2px solid black;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  background: url(${cardback}) no-repeat center/cover; 
  border-radius: 10px;
  border: 2px solid black;
`;
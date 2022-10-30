import Image from "next/image";
import styled from "styled-components";
import Photo from "../../assets/images/1.webp";
import { SlBasket } from "react-icons/sl";
import { FilledButton } from "../UI/Button";
import { IconContext } from "react-icons";
import Link from "next/link";
import { CardProps } from "../../types/CardProps";
import { ProductCardProps } from "../../types/ProductCardProps";
import { FC } from "react";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;

export const CardImage = styled.div`
  width: 300px;
`;

export const CardContent = styled.div``;

const CardText = styled.div`
  text-align: center;
  font-size: 0.9em;
  color: #000;
`;

const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  align-self: center;
  background: #fc1;
  border: 2px solid #fc1;
  gap: 1rem;
  padding: 0.5rem 0;
  color: #000;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: transparent;
  }
`;

// const CardPrice = styled.div`
//   text-align: center;
//   font-size: 0.9em;
//   color: #000;
// `;

const ProductCard = (props: ProductCardProps) => {
  return (
    <Card>
      <CardImage>
        <Image
          loader={() => props.image}
          src={props.image}
          alt="photo"
          width={300}
          height={380}
          // height={350}
        />
      </CardImage>
      <CardContent>
        <CardText>{props.title}</CardText>
        <CardText>PKR {props.price}</CardText>
      </CardContent>
      <CardButton>
        <SlBasket />
        Add to cart
      </CardButton>
    </Card>
  );
};

export default ProductCard;

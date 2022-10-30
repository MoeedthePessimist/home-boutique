import { MouseEventHandler, useRef } from "react";

import styled from "styled-components";

import axios from "axios";
import { Product } from "../../types/Product";
import { EventButtonProps } from "../../types/EventButtonProps";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.form`
  margin: 2rem auto;
  min-height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 3rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  width: 90%;
  outline: none;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Button = styled.button<EventButtonProps>`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 0.5rem;
  width: 50%;
  margin: 2rem auto;
  cursor: pointer;
  border: 3px solid #ffc107;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const AddProduct = () => {
  const title = useRef<HTMLInputElement | null>(null);
  const price = useRef<HTMLInputElement | null>(null);
  const image = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (e: Event) => {
    e.preventDefault();

    const product: Product = {
      title: title.current?.value.toString()!,
      price: parseInt(price.current?.value!),
      image: image.current?.value.toString()!,
    };

    const res = await axios.post("http://localhost:6969/products", product);
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Add Product</Heading>
        <InputContainer>
          <label htmlFor="title" style={{ color: "#000" }}>
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={title}
            style={{
              border: "2px solid #ffc107",
              width: "100%",
              outline: "none",
              background: "#fff",
              padding: "0.5rem",
              borderRadius: "0.2rem",
              color: "#000",
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="price" style={{ color: "#000" }}>
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            ref={price}
            style={{
              border: "2px solid #ffc107",
              width: "100%",
              outline: "none",
              background: "#fff",
              padding: "0.5rem",
              borderRadius: "0.2rem",
              color: "#000",
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="image" style={{ color: "#000" }}>
            Image:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            ref={image}
            style={{
              border: "2px solid #ffc107",
              width: "100%",
              outline: "none",
              background: "#fff",
              padding: "0.5rem",
              borderRadius: "0.2rem",
              color: "#000",
            }}
          />
        </InputContainer>
        <Button onClick={onSubmit}>Add Product</Button>
      </FormContainer>
    </Container>
  );
};

export default AddProduct;

import axios from "axios";
import styled from "styled-components";
import { Product } from "../../../types/Product";
import ProductCard from "../../../components/ProductCard";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 5rem;
  flex-wrap: wrap;
`;

const Store = (props: Product[]): JSX.Element => {
  const items = Object.values(props);
  return (
    <Container>
      {items.map((item, index) => (
        <div style={{ margin: "2rem 0" }} key={index}>
          <ProductCard
            title={item?.title}
            price={item?.price}
            image={item?.image}
          />
        </div>
      ))}
    </Container>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get("http://localhost:6969/products");
  console.log(res);
  return {
    props: { ...res.data },
  };
}
export default Store;

import styled from "styled-components";
import {} from "styled-breakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Hero = styled.section`
  width: 100%;
  height: 90vh;
  background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(255, 193, 7, 0.8)),
    url("https://s3.amazonaws.com/tfh-medias/Banner-Farah.jpg?mtime=20180606174053")
      center/cover no-repeat fixed; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(255, 193, 7, 0.8)),
    url("https://s3.amazonaws.com/tfh-medias/Banner-Farah.jpg?mtime=20180606174053")
      center/cover no-repeat fixed; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 70%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Home = (): JSX.Element => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <HeroTitle>Fill up your life with desi vibes</HeroTitle>
          <Button>Shop Now</Button>
        </HeroContent>
      </Hero>
    </Container>
  );
};

export default Home;

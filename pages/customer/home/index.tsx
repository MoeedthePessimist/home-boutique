import styled from "styled-components";
import axios from "axios";
import {} from "styled-breakpoints";
// import Swiper core and required modules
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FilledButton } from "../../../components/UI/Button";
import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../types/Product";

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

// hero section styling
export const HeroContent = styled.div`
  position: absolute;
  top: 70%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

// hero section styling end

// featured content styling

export const FeaturedContent = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 2em;
  color: #000;
  font-weight: 600;
  text-align: center;
`;
export const SubheaderTitle = styled.p`
  font-size: 1em;
  color: #000;
  text-align: center;
`;
export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  height: 80vh;
`;

const Home = (props: Product[]): JSX.Element => {
  const items = Object.values(props);

  const data = [
    { title: "Product 1", price: 100 },
    { title: "Product 2", price: 200 },
    { title: "Product 3", price: 300 },
    { title: "Product 4", price: 400 },
    { title: "Product 5", price: 500 },
    { title: "Product 6", price: 600 },
    { title: "Product 7", price: 700 },
    { title: "Product 8", price: 800 },
    { title: "Product 9", price: 900 },
  ];

  return (
    <Container>
      {/* hero container */}
      <Hero>
        <HeroContent>
          <HeroTitle>Fill up your life with desi vibes</HeroTitle>
          <FilledButton>Shop Now</FilledButton>
        </HeroContent>
      </Hero>

      {/* Featured products section */}
      <FeaturedContent>
        <HeaderTitle>New Arrivals</HeaderTitle>
        <SubheaderTitle>
          Visit out shop to get the best deals in Pakistan
        </SubheaderTitle>
        <CarouselContainer>
          <Swiper
            modules={[Navigation, Pagination, Virtual]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            centeredSlides={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            virtual={true}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={item.title} virtualIndex={index}>
                  <div style={{ height: "75vh" }}>
                    <ProductCard
                      title={item.title}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CarouselContainer>
      </FeaturedContent>
    </Container>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get("http://localhost:6969/products");
  return {
    props: { ...res.data },
  };
}

export default Home;

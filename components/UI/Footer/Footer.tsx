import { FC } from "react";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 0;
  background: #ffc107;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <h3>About us</h3>
        <p>About</p>
        <p>Contact us</p>
        <p>Store</p>
        <p>location</p>
        <p>Terms of Service</p>
        <p>Refund policy</p>
      </FooterColumn>
      <FooterColumn>
        <h3>Support</h3>
        <p>Shipping</p>
        <p>Return & exchange</p>
        <p>Track your order</p>
        <p>Cancellation policy</p>
      </FooterColumn>
      <FooterColumn>
        <h3>Policy</h3>
        <p>FAQs</p>
        <p>Privacy policy</p>
        <p>Terms & conditions</p>
      </FooterColumn>
      <FooterColumn>
        <h3>Follow us</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;

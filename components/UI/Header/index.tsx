import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { up, between } from "styled-breakpoints";

import LogoImage from "../../../public/images/logo.png";
import { HamburgerLayerProps } from "../../../types/HamburgerLayerProps";
import { ContentProps } from "../../../types/ContentProps";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #ffc107;
  color: #000;
  height: 10vh;
  overflow: hidden;

  ${between("md", "lg")} {
    padding: 0 3rem;
  }
  ${up("lg")} {
    padding: 0 4rem;
  }
`;

export const Logo = styled.div`
  width: clamp(100px, 150px, 200px);
`;

export const Content = styled.ul<ContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: #ffc107;
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  height: 90vh;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  transform: translateX(
    ${(props: ContentProps) => (props.open ? "0" : "100%")}
  );

  ${up("md")} {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
    gap: 1rem;
    transform: translateX(0);
  }
`;

export const ContentItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 22.5vh;
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
    width: 0;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  ${up("md")} {
    height: 10vh;
  }
`;

export const ContentItemLink = styled.a`
  color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-size: clamp(1em, 2vw, 1em);
  &:hover {
    background-color: #fff;
    color: #000;
  }
  ${up("md")} {
    width: 100px;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  padding: 1rem;
  ${up("md")} {
    display: none;
  }
`;

export const HamburgerLayer = styled.div<HamburgerLayerProps>`
  width: 30px;
  height: 3px;
  background-color: #000;
  margin: 5px 0;
  border-radius: 1rem;
  transition: all 0.4s ease-in-out;
  transform: ${(props: HamburgerLayerProps) => {
    return props.open
      ? props.show
        ? `rotate(${props.top ? "-45deg" : "45deg"}) translate(-5px, 0px)`
        : ""
      : `rotate(0deg) translate(0px, 0px)`;
  }};
  display: ${(props: HamburgerLayerProps) => {
    return props.open ? (props.show ? `block` : " none") : ` block`;
  }};
`;

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      {/* logo */}
      <Logo>
        <Image src={LogoImage} alt="Logo" />
      </Logo>

      {/* contents list */}
      <Content open={isOpen}>
        <ContentItem>
          <Link href="/customer/home">
            <ContentItemLink>Home</ContentItemLink>
          </Link>
        </ContentItem>
        <ContentItem>
          <Link href="/customer/store">
            <ContentItemLink>Store</ContentItemLink>
          </Link>
        </ContentItem>
        <ContentItem>
          <Link href="/customer/about">
            <ContentItemLink>About Us</ContentItemLink>
          </Link>
        </ContentItem>
        <ContentItem>
          <Link href="/customer/contact">
            <ContentItemLink>Contact Us</ContentItemLink>
          </Link>
        </ContentItem>
      </Content>

      {/* hamburger menu icon */}
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HamburgerLayer open={isOpen} top={true} show={true}></HamburgerLayer>
        <HamburgerLayer open={isOpen} top={false} show={false}></HamburgerLayer>
        <HamburgerLayer open={isOpen} top={false} show={true}></HamburgerLayer>
      </Hamburger>
    </Navbar>
  );
};

export default Header;

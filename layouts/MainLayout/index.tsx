import { Fragment } from "react";

import styled from "styled-components";

import Header from "../../components/UI/Header";
import { MainLayoutProps } from "../../types/MainLayoutProps";

//styled components
export const Layout = styled.main`
  display: flex;
  width: 100%;
  background-color: #fff;
`;

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <Fragment>
      <Header></Header>
      <Layout>{children}</Layout>
    </Fragment>
  );
};

export default MainLayout;

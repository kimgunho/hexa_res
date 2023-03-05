import styled from "styled-components";

const LayoutParent = styled.div`
  width: 100%;
  max-width: 1290px;
  margin: auto;
  padding: 0 2rem;
`;

export const Layout = ({ children }) => {
  return <LayoutParent>{children}</LayoutParent>;
};

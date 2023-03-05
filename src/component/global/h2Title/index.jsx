import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) => props.color || "#333"};
  font-size: 3rem;
  font-weight: 600;
  position: relative;
  width: fit-content;
  ::after {
    position: absolute;
    right: -7.5rem;
    top: 50%;
    transform: translate(0, -50%);
    content: "";
    width: 6.25rem;
    height: 1px;
    background-color: #ddd;
  }
`;

export const H2Title = ({ text, color }) => {
  return <Title color={color}>{text}</Title>;
};

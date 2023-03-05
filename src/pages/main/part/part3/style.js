import { Link } from "react-router-dom";
import styled from "styled-components";

import background from "../../../../assets/images/main/part3/background.jpg";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: auto 36.25rem;
  background-position: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;
`;

export const Card = styled.article`
  background-color: #f0f0f0;
  border: 1px solid #acdefe;
  width: 17.5rem;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 17.5rem;
  object-fit: cover;
`;

export const NoImage = styled.div`
  width: 100%;
  height: 17.5rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "이미지 대기중";
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Box = styled.div`
  padding: 1rem;
`;

export const Title = styled.strong`
  display: block;
  color: #1d7fbe;
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const MoreLink = styled(Link)`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

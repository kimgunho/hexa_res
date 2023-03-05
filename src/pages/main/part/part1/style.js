import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const FlexBox = styled.div``;

export const TitleBox = styled.div`
  position: relative;
  z-index: 20;
`;

export const Title = styled.strong`
  color: #fff;
  font-size: 3.125rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.6;
  margin-bottom: 3rem;
  display: block;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.24);
  margin-bottom: 3rem;
`;

export const MoreButton = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1d7fbe;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 2rem;
  min-width: 12.5rem;
  border-radius: 1.875rem;
  > svg {
    font-size: 1.25rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Video = styled.video``;

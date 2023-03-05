import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

export const Title = styled.strong`
  display: block;
  font-size: 2rem;
  color: #333;
  font-weight: 500;
  padding-left: 2rem;
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  padding-left: 2rem;
  list-style: disc;
  margin-bottom: 3rem;

  > li {
    font-size: 1rem;
    color: #4a4a4a;
    font-weight: 400;
    word-break: keep-all;
    letter-spacing: -1px;
    line-height: 1.8;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  width: 100%;
`;

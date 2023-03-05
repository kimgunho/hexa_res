import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 6.25rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Box = styled.li`
  width: 23%;
`;

export const Img = styled.img`
  width: 100%;
  height: 17.5rem;
  object-fit: cover;
`;

export const NoImg = styled.div`
  width: 100%;
  height: 17.5rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
`;

export const Info = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0 0 1rem 0;
`;

export const Title = styled.strong`
  display: block;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.6;
  border-bottom: 1px solid #ddd;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.8;
  font-weight: 400;
`;

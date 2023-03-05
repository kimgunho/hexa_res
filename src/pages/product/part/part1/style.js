import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
  min-height: 50vh;
`;

export const GnbButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isActive ? "#1D7FBE" : "#333")};
  color: #fff;
  border-radius: 0.625rem;
  padding: 0.5rem;
`;

export const WaitBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.25rem;
  text-align: center;
  min-height: 18.75rem;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const CarouselContainer = styled.div`
  width: 50%;
  position: relative;
  padding-bottom: 3.125rem;
`;

export const ArrowButtonBox = styled.div`
  position: absolute;
  bottom: 1px;
  right: 0;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
`;

export const ProductInfoBox = styled.div`
  width: 50%;
`;

export const Title = styled.strong`
  display: block;
  font-size: 2.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const Option = styled.ul`
  line-height: 1.8;
  font-size: 1rem;
  color: #333;
  margin-bottom: 3rem;
`;

export const BuyDesc = styled.strong`
  display: block;
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const HelpButton = styled.a`
  width: 50%;
  background-color: #1d7fbe;
  color: #fff;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border-radius: 0.625rem;
`;

export const DownloadButton = styled.a`
  width: 50%;
  background-color: #cd5d5f;
  color: #fff;
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
`;

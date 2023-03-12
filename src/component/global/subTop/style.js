import styled from "styled-components";
import { device } from "../../../styles/common";

export const Wrapper = styled.div`
  margin: 5rem 0;
`;

export const ImageBox = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media ${device.mobile} {
    height: 18.75rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

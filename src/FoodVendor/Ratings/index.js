import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 23px;
  font-size: 20px;
  top:25px;
`;

export const Rating = styled.span`
    color: ${(props) => props.color};
`;
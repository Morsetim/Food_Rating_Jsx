import styled from "styled-components";

export const Wrapper = styled.div`
  /* margin-top: 160px; */
  position: relative;
  left: 23px;
  font-size: 20px;
  top:25px;
`;

export const Rating = styled.span`
    color: ${(props) => props.color};
`;
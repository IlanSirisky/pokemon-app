import styled from "styled-components";
import { cssSpacings } from "../../styles/stylingValues";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

export const StyledErrorImage = styled.img`
  border-radius: ${cssSpacings.s12};
  margin: ${cssSpacings.s12};
`;

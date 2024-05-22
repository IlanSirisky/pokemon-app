import styled from "styled-components";

export const flexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const flexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledWrapper = styled(flexColumn)`
  background-color: #c9ebf2;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;
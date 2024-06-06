import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { COLORS } from "../../styles/colors";
import { cssSpacings } from "../../styles/stylingValues";

const { Neutrals } = COLORS;

export const PokemonModalCardContainer = styled(flexColumn)`
  background-color: ${Neutrals.White};
  width: 100%;
`;

export const StyledHeaderContent = styled(flexColumn)`
  padding: ${cssSpacings.s12} ${cssSpacings.s24};
  gap: ${cssSpacings.s10};
  align-items: flex-start;
`;

export const CardContentWrapper = styled(flexColumn)`
  gap: ${cssSpacings.s10};
  padding: ${cssSpacings.s16} ${cssSpacings.s24};
  border-radius: ${cssSpacings.s8};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 180px;
  height: 160px;
`;

export const ModalCardContentContainer = styled(flexColumn)`
  gap: ${cssSpacings.s6};
  padding: ${cssSpacings.s24};
  background-color: ${Neutrals.N100};
  align-items: center;
`;

export const AttributesContainer = styled(flexRow)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Attribute = styled(flexColumn)`
  gap: ${cssSpacings.s8};
`;

export const ModalCardTextStyles = {
  cardTitle: { lineHeight: "26px" },
  subHeadText: { color: `${Neutrals.N200}` },
  description: { lineHeight: "22px" },
  hr: { width: "100%", color: `${Neutrals.N200}` },
  attributeLabel: {
    lineHeight: "18px",
    color: `${COLORS.Neutrals.N400}`,
  },
  attributeValue: { lineHeight: "22px" },
};

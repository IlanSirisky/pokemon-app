import styled from 'styled-components';
import { COLORS } from './colors';
import { cssFontWeights, cssFontSizes } from './stylingValues';

const StyledParagraph = styled.p`
  font-family: 'Mulish', sans-serif;
  color: ${COLORS.Neutrals.N500};
  margin: 0;
`;

export const HeadingXLargeBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f28};
  line-height: 37px;
`;

export const HeadingXLargeMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f28};
  line-height: 37px;
`;

export const HeadingLargeBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f24};
  line-height: 34px;
`;

export const HeadingLargeMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f24};
  line-height: 34px;
`;

export const HeadingLargeRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f24};
  line-height: 34px;
`;

export const HeadingMediumBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f18};
  line-height: 27px;
`;

export const HeadingMediumMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f18};
  line-height: 27px;
`;

export const HeadingMediumRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f18};
  line-height: 27px;
`;

export const SubheadingBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f16};
  line-height: 24px;
`;

export const SubheadingMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f16};
  line-height: 24px;
`;

export const SubheadingRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f16};
  line-height: 24px;
`;

export const BodyBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: 14px;
  line-height: 22px;
`;

export const BodyMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f14};
  line-height: 22px;
`;

export const BodyRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f14};
  line-height: 22px;
`;

export const CaptionBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f12};
  line-height: 19px;
`;

export const CaptionMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f12};
  line-height: 19px;
`;

export const CaptionRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f12};
  line-height: 19px;
`;

export const XSmallBold = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.bold};
  font-size: ${cssFontSizes.f11};
  line-height: 16px;
`;

export const XSmallMedium = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.medium};
  font-size: ${cssFontSizes.f11};
  line-height: 16px;
`;

export const XSmallRegular = styled(StyledParagraph)`
  font-weight: ${cssFontWeights.regular};
  font-size: ${cssFontSizes.f11};
  line-height: 16px;
`;
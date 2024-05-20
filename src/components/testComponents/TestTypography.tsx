import React from "react";
import {
  HeadingXLargeMedium,
  HeadingXLargeBold,
  HeadingLargeBold,
  HeadingLargeMedium,
  HeadingLargeRegular,
  SubheadingBold,
  SubheadingMedium,
  SubheadingRegular,
  BodyBold,
  BodyMedium,
  BodyRegular,
  CaptionBold,
  CaptionMedium,
  CaptionRegular,
  XSmallBold,
  XSmallMedium,
  XSmallRegular,
} from "../../styles/typography";

const TestTypography: React.FC = () => {
  return (
    <div>
      <HeadingXLargeBold>Heading XLarge Bold</HeadingXLargeBold>
      <HeadingXLargeMedium>Heading XLarge Medium</HeadingXLargeMedium>
      <br />
      <HeadingLargeBold>Heading Large Bold</HeadingLargeBold>
      <HeadingLargeMedium>Heading Large Medium</HeadingLargeMedium>
      <HeadingLargeRegular>Heading Large Regular</HeadingLargeRegular>
      <br />
      <SubheadingBold>Subheading Bold</SubheadingBold>
      <SubheadingMedium>Subheading Medium</SubheadingMedium>
      <SubheadingRegular>Subheading Regular</SubheadingRegular>
      <br />
      <BodyBold>Body Bold</BodyBold>
      <BodyMedium>Body Medium</BodyMedium>
      <BodyRegular>Body Regular</BodyRegular>
      <br />
      <CaptionBold>Caption Bold</CaptionBold>
      <CaptionMedium>Caption Medium</CaptionMedium>
      <CaptionRegular>Caption Regular</CaptionRegular>
      <br />
      <XSmallBold>XSmall Bold</XSmallBold>
      <XSmallMedium>XSmall Medium</XSmallMedium>
      <XSmallRegular>XSmall Regular</XSmallRegular>
    </div>
  );
};

export default TestTypography;

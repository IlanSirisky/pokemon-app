import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles/globalStyles";
import { COLORS } from "../../styles/colors";
import yellowBg from "../../assets/yellow-bg.jpeg";
import { cssSpacings } from "../../styles/stylingValues";
import { Form } from "formik";

export const LoginPageWrapper = styled(flexRow)`
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.Primary.P300};
`;

export const StyledImage = styled.img`
  width: 60%;
`;

export const BackgroundWrapper = styled.div`
  width: 67%;
  display: flex;
  background-image: url(${yellowBg});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
`;

export const StyledFormWrapper = styled(flexColumn)`
  width: 33%;
  background-color: ${COLORS.Neutrals.White};
  padding: ${cssSpacings.s24};
  border: 1px solid ${COLORS.Neutrals.N100};
  border-radius: ${cssSpacings.s12};
  gap: ${cssSpacings.s24};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${cssSpacings.s24};
`;

export const buttonStyles = {
  width: "100%",
};

export const ForgotPassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${cssSpacings.s4};
  padding: ${cssSpacings.s9} ${cssSpacings.s16};
  gap: ${cssSpacings.s4};
`;

export const forgotPassStyles = {
  color: `${COLORS.Primary.P300}`,
  cursor: "pointer",
};

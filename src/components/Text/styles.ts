import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface CustomTextProps {
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body"
    | "bodyLarge"
    | "subtitle"
    | "button"
    | "caption";
}

export const CustomText = styled.Text<CustomTextProps>`
  ${({ theme, type }) => {
    switch (type) {
      case "h1":
        return css`
          font-family: ${theme.fonts.poppins_600};
          font-size: ${RFValue(42)}px;
          line-height: ${RFValue(50)}px;
        `;
      case "h2":
        return css`
          font-family: ${theme.fonts.poppins_600};
          font-size: ${RFValue(30)}px;
          line-height: ${RFValue(38)}px;
        `;
      case "h3":
        return css`
          font-family: ${theme.fonts.poppins_600};
          font-size: ${RFValue(26)}px;
          line-height: ${RFValue(34)}px;
        `;
      case "h4":
        return css`
          font-family: ${theme.fonts.poppins_500};
          font-size: ${RFValue(24)}px;
          line-height: ${RFValue(32)}px;
        `;
      case "body":
        return css`
          font-family: ${theme.fonts.poppins_400};
          font-size: ${RFValue(14)}px;
        `;
      case "bodyLarge":
        return css`
          font-family: ${theme.fonts.poppins_400};
          font-size: ${RFValue(16)}px;
        `;
      case "subtitle":
        return css`
          font-family: ${theme.fonts.poppins_500};
          font-size: ${RFValue(18)}px;
        `;
      case "button":
        return css`
          font-family: ${theme.fonts.poppins_500};
          font-size: ${RFValue(16)}px;
        `;
      case "caption":
        return css`
          font-family: ${theme.fonts.poppins_400};
          font-size: ${RFValue(12)}px;
        `;
      default:
        return css``;
    }
  }}
`;

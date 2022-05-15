import { TextProps } from "react-native";

import { CustomText } from "./styles";

interface Props extends TextProps {
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

export function Text({ type, style, children }: Props) {
  return (
    <CustomText type={type} style={style}>
      {children}
    </CustomText>
  );
}

import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container, CustomText, Icon } from "./styles";

export function Button() {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      colors={["#A400DD", "#3838FF"]}
      style={{ borderRadius: 36 }}
    >
      <Container>
        <CustomText type="button">Get Started</CustomText>
        <Icon />
      </Container>
    </LinearGradient>
  );
}

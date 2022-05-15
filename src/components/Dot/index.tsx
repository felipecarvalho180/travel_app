import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "./styles";

interface Props {
  active: boolean;
}

export function Dot({ active }: Props) {
  return (
    <>
      {active ? (
        <LinearGradient
          colors={["#A400DD", "#3838FF"]}
          start={{ x: 0, y: 1 }}
          style={{ borderRadius: 10 }}
        >
          <Container active={active} />
        </LinearGradient>
      ) : (
        <Container />
      )}
    </>
  );
}

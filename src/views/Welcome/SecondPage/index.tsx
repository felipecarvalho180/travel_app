import React from "react";

import { ItemContainer, ItemImage, Subtitle, Title } from "../styles";

export function SecondPage() {
  return (
    <ItemContainer>
      <ItemImage source={require("../../../assets/carousel/welcome-1.png")}>
        <Title type="h2">Customize your High-end travel</Title>
        <Subtitle type="body">
          Countless high-end entertainment facilities
        </Subtitle>
      </ItemImage>
    </ItemContainer>
  );
}

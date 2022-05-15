import React from "react";

import { ItemContainer, ItemImage, Subtitle, Title } from "../styles";

export function ThirdPage() {
  return (
    <ItemContainer>
      <ItemImage source={require("../../../assets/carousel/welcome-2.png")}>
        <Title type="h2">High-end leisure projects to choose froml</Title>
        <Subtitle type="body">
          The world's first-class modern leisure and entertainment method
        </Subtitle>
      </ItemImage>
    </ItemContainer>
  );
}

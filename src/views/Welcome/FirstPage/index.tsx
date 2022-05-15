import React from "react";

import { ItemContainer, ItemImage, Subtitle, Title } from "../styles";

export function FirstPage() {
  return (
    <ItemContainer>
      <ItemImage source={require("../../../assets/carousel/welcome-0.png")}>
        <Title type="h2">Make your own private travel plan</Title>
        <Subtitle type="body">
          Formulate your strategy to receive wonderful gift packs
        </Subtitle>
      </ItemImage>
    </ItemContainer>
  );
}

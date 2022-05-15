import React from "react";
import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Dimensions, ImageBackgroundProps } from "react-native";

import { Text } from "../../components/Text";

interface ItemImageProps extends ImageBackgroundProps {
  children?: React.ReactNode;
}

export const Container = styled.View`
  flex: 1;
`;

export const ItemContainer = styled.View`
  flex-grow: 1;
  height: ${Dimensions.get("window").height}px;
`;

export const ItemImage = styled.ImageBackground<ItemImageProps>`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
`;

export const Title = styled(Text)`
  text-align: center;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled(Text)`
  text-align: center;
  margin-bottom: 230px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  bottom: ${getBottomSpace() + 82}px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Dots = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 57px;
  margin-bottom: 38px;
`;

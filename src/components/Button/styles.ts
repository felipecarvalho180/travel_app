import styled from "styled-components/native";
import { ArrowRight } from "react-native-iconly";

import { Text } from "../Text";

export const Container = styled.TouchableOpacity`
  height: 52px;
  width: 100%;
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CustomText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 8px;
`;

export const Icon = styled(ArrowRight).attrs({
  size: "medium",
  set: "bold",
})`
  color: #fff;
`;

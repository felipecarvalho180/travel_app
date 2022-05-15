import styled from "styled-components/native";

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 13px;
  width: 13px;
  border-radius: 8px;
  background-color: ${({ active, theme }) =>
    !active && theme.colors.gray_light};
`;

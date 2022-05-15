import React from "react";
import PagerView, { PagerViewProps } from "react-native-pager-view";

export const Carousel = ({ children, ...props }: PagerViewProps) => {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0} {...props}>
      {children}
    </PagerView>
  );
};

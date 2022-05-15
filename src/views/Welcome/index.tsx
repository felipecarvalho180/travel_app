import React, { useState } from "react";
import { StatusBar } from "react-native";

import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { Dot } from "../../components/Dot";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { Container, Dots, Footer } from "./styles";
import { ThirdPage } from "./ThirdPage";

const carouselItems = [
  { page: <FirstPage key="1" /> },
  { page: <SecondPage key="2" /> },
  { page: <ThirdPage key="3" /> },
];

export function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Carousel
        onPageSelected={({ nativeEvent }) =>
          setCurrentIndex(nativeEvent.position)
        }
      >
        {carouselItems.map((item) => item.page)}
      </Carousel>

      <Footer>
        <Dots>
          {carouselItems.map((item, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </Dots>
        <Button />
      </Footer>
    </Container>
  );
}

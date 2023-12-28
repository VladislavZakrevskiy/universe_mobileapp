import { View, Text, StyleProp } from "react-native";
import React, { PropsWithChildren, PropsWithoutRef, useEffect, useRef, useState } from "react";
import { HStack, VStack } from "native-base";
import { Card } from "../Card";
import { CasinoGameProps } from "../../types";
import { randomIntFromInterval } from "../../../../shared/lib/funcs/randomIntFromInterval";

interface Props {
  value: number;
  suit: number;
  onPress?: () => void;
}

const ToGuessCard = ({ suit, value, onPress }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) {
    console.log([suit, value], isOpen);
    return (
      <Card
        suit={suit}
        value={value}
        onPress={() => {
          onPress?.();
          setIsOpen(true);
        }}
        ratioScale={0.5}
      />
    );
  }

  return (
    <Card
      suit={0}
      value={0}
      onPress={() => {
        onPress?.();
        setIsOpen(true);
      }}
      ratioScale={0.5}
    />
  );
};

export function GuessMyCard({ level, setIsWin }: CasinoGameProps) {
  const cardNumbers = level === "EASY" ? 6 : level === "MEDIUM" ? 8 : 10;
  const cards = useRef(new Array(cardNumbers).fill(0).map(() => [randomIntFromInterval(0, 3), randomIntFromInterval(1, 13)]));
  const rightCard = useRef(cards.current[randomIntFromInterval(0, cardNumbers - 2)]);
  const [text, setText] = useState("");
  let isFirstTry = true;

  return (
    <VStack style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
      <Card suit={rightCard.current[0]} value={rightCard.current[1]} />
      <HStack style={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 2 }}>
        {cards.current.map(([suit, cardNumber]) => {
          console.log([suit, cardNumber]);
          return (
            <ToGuessCard
              suit={suit}
              value={cardNumber}
              onPress={() => {
                if (rightCard.current[0] === suit && rightCard.current[1] === cardNumber && isFirstTry) {
                  setIsWin("Win");
                } else setIsWin("Fail");
                isFirstTry = false;
              }}
            />
          );
        })}
      </HStack>
      <Text>{text}</Text>
    </VStack>
  );
}

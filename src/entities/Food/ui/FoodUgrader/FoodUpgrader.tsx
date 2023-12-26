import { View } from "react-native";
import React from "react";
import { FoodUdgraderItem } from "./FoodUdgraderItem";
import { FoodUpgrades, FoodUpgradesItems } from "../../model/types/Schema";
import { VStack } from "native-base";

interface Props {
  name: keyof FoodUpgrades;
}

export function FoodUpgrader({ name }: Props) {
  const foods = FoodUpgradesItems[name];

  return (
    <VStack style={{ gap: 5 }}>
      {foods.map((food) => (
        <FoodUdgraderItem food={food} />
      ))}
    </VStack>
  );
}

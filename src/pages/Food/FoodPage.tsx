import { Button, HStack, ScrollView, VStack } from "native-base";
import { View, StyleSheet } from "react-native";
import { FoodProps, Routes } from "../../app/providers/router/route";
import { StatLink } from "../../shared/ui/StatLink";
import { FoodUpgrades } from "../../entities/Food/model/types/Schema";
import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";
import { FoodUpgraderList } from "../../entities/Food/ui/FoodUgrader/FoodUpgraderList";
import { useState } from "react";

export const FoodPage = ({ navigation }: FoodProps) => {
  const { foods } = useAppSelector((state) => state[Routes.FOOD]);

  const countPercent = (name: keyof FoodUpgrades) => {
    const cat = foods[name];
    let number_is_buy = 0;
    for (let i = 0; i < cat.length; i++) {
      if (cat[i].can_buy) {
        number_is_buy += 1;
      }
    }

    return number_is_buy;
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <VStack style={styles.stat}>
        <HStack style={styles.statContainer}>
          <StatLink percent={countPercent("Крупа")} icon />
          <StatLink percent={countPercent("Мясо")} icon />
        </HStack>
        <HStack style={styles.statContainer}>
          <StatLink percent={countPercent("Суп")} icon />
          <StatLink percent={countPercent("Плов")} icon />
          <StatLink percent={countPercent("Десерт")} icon />
        </HStack>
        <HStack style={styles.statContainer}>
          <StatLink percent={countPercent("Фикспрайс")} icon />
          <StatLink percent={countPercent("Покурить")} icon />
        </HStack>
      </VStack>
      <FoodUpgraderList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statContainer: {
    height: "33%",
    justifyContent: "center",
    gap: 2,
  },
  stat: { gap: 2, padding: 10, height: 300 },
  close_btn: {
    position: "absolute",
    right: 0,
    elevation: 3,
    zIndex: 3,
  },
});

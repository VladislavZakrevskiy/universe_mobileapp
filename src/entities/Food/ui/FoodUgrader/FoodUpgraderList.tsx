import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FlatList, HStack, VStack } from "native-base";
import { FoodUpgrader } from "./FoodUpgrader";
import { FoodUpgrades, FoodUpgradesItems } from "../../model/types/Schema";

export function FoodUpgraderList() {
  const categories = Object.keys(FoodUpgradesItems) as (keyof FoodUpgrades)[];

  return (
    <VStack>
      {categories.map((categorie) => {
        return (
          <VStack>
            <HStack style={styles.header}>
              <Text style={styles.title}>{categorie}</Text>
            </HStack>
            <FoodUpgrader name={categorie} />
          </VStack>
        );
      })}
    </VStack>
  );
}

const styles = StyleSheet.create({
  header: { justifyContent: "center", padding: 10 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    width: "auto",
  },
});

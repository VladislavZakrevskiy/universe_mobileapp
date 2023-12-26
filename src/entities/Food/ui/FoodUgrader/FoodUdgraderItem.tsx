import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FoodItem } from "../../model/types/Schema";
import { Button, HStack, Image, VStack } from "native-base";
import { Card } from "../../../../shared/ui/Card";

interface Props {
  food: FoodItem;
}

export function FoodUdgraderItem({ food }: Props) {
  const { debuff, imgSrc, name, price, profit, buy_times } = food;

  return (
    <Card
      body={
        <VStack style={styles.innerContainer} bg="primary.600">
          <Text style={styles.paragraph}>
            Цена: <Text style={styles.decoration}>{price}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Сытость: <Text style={styles.decoration}>+{profit}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Необходимость поспать: <Text style={styles.decoration}>+{debuff}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Куплено: <Text style={styles.decoration}>{buy_times}</Text> раз
          </Text>
        </VStack>
      }
      btnTitle="Купить"
      header={
        <>
          <View style={styles.image}>
            <Image source={imgSrc} />
          </View>
          <Text style={styles.title}>{name}</Text>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  image: { padding: 5 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlignVertical: "center" },
  innerContainer: {
    borderRadius: 12,
    borderColor: "#000",
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
  },
  decoration: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

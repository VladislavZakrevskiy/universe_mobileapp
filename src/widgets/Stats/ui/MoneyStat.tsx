import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";

export function MoneyStat() {
  const { money } = useAppSelector((state) => state.hero);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{money}руб.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f0",
    borderRadius: 12,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingTop: 6,
  },

  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

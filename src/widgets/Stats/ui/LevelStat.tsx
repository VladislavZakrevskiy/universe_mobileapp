import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { LinearGradient } from "expo-linear-gradient";

export function LevelStat() {
  const { level } = useAppSelector((state) => state.hero);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00f",
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
  },
});

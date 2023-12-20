import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { LinearGradient } from "expo-linear-gradient";

export function LevelStat() {
  const { level } = useAppSelector((state) => state.hero);

  return (
    <LinearGradient colors={["#00f", "#000"]} style={styles.container}>
      <Text style={styles.text}>{level}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: " linear-gradient(#e66465, #9198e5)",
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

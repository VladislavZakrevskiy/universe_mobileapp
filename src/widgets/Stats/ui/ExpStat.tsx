import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { cutValue } from "../../../shared/lib/funcs/cutValue";

export function ExpStat() {
  const { experience } = useAppSelector((state) => state.hero);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{cutValue(experience)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#78ccf0",
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

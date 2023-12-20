import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Modules } from "../../../app/providers/router/routeConfig";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { moduleIcons } from "../../../shared/consts/skins/moduleIcons";

interface Props {
  name: Modules;
}

export const FastLinksItem = ({ name }: Props) => {
  const { percent } = useAppSelector((state) => state[name]);
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    // Пересчитать процент выполнености
    // ...
    // ...
    if (percent < 10) {
      setColor("#8c000f");
    } else if (percent < 33) {
      setColor("#ff4d00");
    } else if (percent < 50) {
      setColor("#b3ff66");
    } else if (percent < 80) {
      setColor("#aaff00");
    } else {
      setColor("#0f0");
    }
  }, []);

  return (
    <View style={styles.border}>
      <View style={{ ...styles.filler, borderRadius: percent > 92 ? 12 : 0, height: `${percent}%`, backgroundColor: color }}></View>
      <View style={styles.fastLink}>{moduleIcons[name]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  fastLink: {
    width: "85%",
    height: "85%",
    borderRadius: 12,
    borderColor: "rgba(0,0,0)",
    borderWidth: 3,
    zIndex: 2,
    elevation: 2,
    backgroundColor: "#fff",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  border: {
    backgroundColor: "#fff",
    width: "22%",
    height: "auto",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0)",
    borderWidth: 2.5,
  },

  filler: {
    width: "100%",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    bottom: 0,
    position: "absolute",
  },
});

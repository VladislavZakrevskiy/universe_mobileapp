import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
/** @ts-ignore */
import LBRoulette from "react-native-roulette";
import { CasinoGameProps } from "../types";
import { randomIntFromInterval } from "../../../shared/lib/funcs/randomIntFromInterval";
import { Button } from "native-base";

// step // Roulette items margin
// radius = {300} // Roulette radius
// distance = {100} // Distance from center
// rouletteRotate = {0} // Roulette rotate angle
// enableUserRotate = {false} // Enable user input for rotate

// renderCenter = () => {} // Render custom center
// handlerOfRotate = () => {} // Return active item props after rotation

// customStyle // Roulette styles
// customCenterStyle // Center styles

export function Roulette({ level, setIsWin }: CasinoGameProps) {
  let patronsCount = level === "EASY" ? 1 : level === "MEDIUM" ? 2 : 3;
  const [currentPatron, setCurrentPatron] = useState<number>(0);
  const patrons = [false, false, false, false, false, false];

  useEffect(() => {
    for (let i = 0; i < patronsCount; i++) {
      let is_uniq = false;
      while (!is_uniq) {
        let randomPlace = randomIntFromInterval(0, 5);
        if (!patrons[randomPlace]) {
          is_uniq = true;
          patrons[randomPlace] = true;
        }
      }
    }
    console.log(patrons);
  }, []);

  const shoot = () => {
    setCurrentPatron((prev) => {
      console.log(prev + 1);
      if (patrons[prev + 1]) {
        setIsWin("Fail");
      }
      if (!patrons[prev + 1] && prev + 1 === 5) {
        setIsWin("Win");
      }
      return (prev + 1) % 6;
    });
  };

  return (
    <View>
      {/** @ts-ignore */}
      <LBRoulette rouletteRotate={20} onRotate={(props) => console.log(props)}>
        {patrons.map((patron) => (
          <View style={{ ...styles.patron, backgroundColor: patron ? "#000" : "#fff" }} />
        ))}
      </LBRoulette>
      <Button onPress={shoot}>Выстрелить!</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  patron: {
    width: 30,
    height: 30,
    borderRadius: 1000,
  },
});

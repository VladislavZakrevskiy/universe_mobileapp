import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { CasinoGameProps } from "../types";
import { Easing } from "react-native-reanimated";
import { Button, Input, VStack } from "native-base";

export function Barrel({ setIsWin }: Omit<CasinoGameProps, "level">) {
  const temp = new Array(50).fill(0);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState("");
  const randomDegree = useRef(Math.random() * 1000);
  const animationRef = useRef<Animated.CompositeAnimation>(
    Animated.timing(rotateAnim, {
      toValue: 1,
      useNativeDriver: false,
      easing: Easing.back(2),
      duration: 10000,
    })
  );
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", `${randomDegree.current}deg`],
    easing: Easing.back(2),
  });
  const countCoords = (i: number, r: number): { top?: number; left?: number; right?: number; bottom?: number } => {
    const cos = Math.cos(((i * Math.PI) / 50) * 2);
    const sin = Math.sin(((i * Math.PI) / 50) * 2);

    const result: { top?: number; left?: number; right?: number; bottom?: number } = {
      top: undefined,
      bottom: undefined,
      right: undefined,
      left: undefined,
    };
    if (cos >= 0) result.right = (1 - cos) * r;
    else result.left = cos * r + r;

    if (sin >= 0) result.top = (1 - sin) * r;
    else result.bottom = sin * r + r;

    return result;
  };

  const startBarrel = () => {
    animationRef.current.start();
    setTimeout(() => {
      const degrees = [];

      for (let i = 0; i < 50; i++) {
        degrees.push((i / 50) * 180 * 2);
      }
      const closest = degrees.sort((a, b) => Math.abs((randomDegree.current % 360) - a) - Math.abs((randomDegree.current % 360) - b))[0];
      if (+text === Math.ceil((closest * 50) / 360 - 1)) {
        setIsWin("Win");
      } else setIsWin("Fail");
    }, 10000);
  };

  return (
    <VStack>
      <View style={{ transform: [{ rotate: "-90deg" }] }}>
        <View style={{ ...styles.barrel }}>
          <View style={styles.innerCircle}>
            <View style={styles.center} />
            <View style={styles.counter} />
          </View>

          <Animated.View style={{ ...styles.barrel, transform: [{ rotate: spin }], position: "absolute" }}>
            {temp.map((_, i) => (
              <View
                style={{
                  ...styles.numberContainer,
                  backgroundColor: i % 2 ? "#f00" : "#000",
                  ...countCoords(i, 188),
                  transform: [{ rotate: `${90 - i * 7}deg` }],
                }}
              >
                <Text style={styles.number}>{i + 1}</Text>
              </View>
            ))}
          </Animated.View>
        </View>
      </View>
      <Input onChangeText={(text) => setText(text)} value={text} />
      <Button onPress={startBarrel}>Крутить</Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  barrel: {
    overflow: "hidden",
    borderRadius: 1000,
    width: 400,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  numberContainer: { position: "absolute" },
  innerCircle: {
    backgroundColor: "#000",
    borderRadius: 1000,
    width: 350,
    height: 350,
    zIndex: 4,
    elevation: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  counter: {
    backgroundColor: "#999",
    height: 10,
    width: 355 / 2,
  },
  center: {
    width: 20,
    height: 20,
    borderRadius: 1000,
    position: "absolute",
    top: "47.5%",
    right: "47.6%",
    backgroundColor: "#fff",
    elevation: 4,
    zIndex: 4,
  },
  number: {
    color: "#fff",
    padding: 3,
  },
});

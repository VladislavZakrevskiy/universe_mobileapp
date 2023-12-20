import { View, Text, ImageSourcePropType, StyleSheet, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { heroSkins } from "../../../../shared/consts/skins/heroSkins";
import { Button } from "native-base";
import { useHeroActions } from "../../model/slices/HeroSlice";

export function HeroAvatar() {
  const { currentHeroSkin, experience } = useAppSelector((state) => state.hero);
  const rotateAnim = useRef(new Animated.Value(0, { useNativeDriver: true })).current;
  const [currentExperiece, setCurrentExperience] = useState(experience);
  const animationRef = useRef<Animated.CompositeAnimation>(
    Animated.timing(rotateAnim, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.linear,
      duration: 50,
    })
  );
  const [touches, setTouches] = useState<number>(0);
  const { addExperience } = useHeroActions();

  useEffect(() => {
    if (touches % 10 === 0) {
      addExperience(currentExperiece - experience);
    }
  }, [currentExperiece]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", `${touches % 2 ? 10 : -10}deg`],
  });

  return (
    <TouchableWithoutFeedback
      style={styles.imageAvatar}
      onPressIn={() => {
        // setIsActive(true);
        animationRef.current.start();
        setTouches((prev) => {
          if ((prev + 1) % 500 == 0) {
            setCurrentExperience((prev) => prev + 1000);
          } else {
            setCurrentExperience((prev) => prev + 1);
          }
          return prev + 1;
        });
      }}
      onPressOut={() => {
        animationRef.current.stop();
      }}
      delayPressIn={0}
      delayPressOut={0}
    >
      <Animated.Image
        source={heroSkins[currentHeroSkin].src}
        alt="Vlad Zakrevskiy"
        style={{
          ...styles.imageAvatar,
          marginLeft: heroSkins[currentHeroSkin].marginLeft,
          marginTop: heroSkins[currentHeroSkin].marginTop,
          transform: [{ rotate: spin }],
        }}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageAvatar: {
    width: "100%",
    height: "100%",
  },
});

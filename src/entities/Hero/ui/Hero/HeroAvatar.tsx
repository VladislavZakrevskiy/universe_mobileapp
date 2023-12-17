import { View, Text, ImageSourcePropType, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { heroSkins } from "../../../../shared/consts/skins/heroSkins";
import { Button, Pressable } from "native-base";
import { useHeroActions } from "../../model/slices/HeroSlice";

export function HeroAvatar() {
  const { currentHeroSkin } = useAppSelector((state) => state.hero);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [touches, setTouches] = useState<number>(0);
  const { addExperience } = useHeroActions();

  return (
    <Pressable
      style={styles.imageAvatar}
      onPressIn={() => {
        setIsActive(true);
        setTouches((prev) => {
          if ((prev + 1) % 500 == 0) {
            addExperience(100);
          } else {
            addExperience(0.1);
          }
          return prev + 1;
        });
      }}
      onPressOut={() => setIsActive(false)}
    >
      <Image
        source={heroSkins[currentHeroSkin].src}
        alt="Vlad Zakrevskiy"
        style={{
          // ...(isActive ? { transform: `rotate(${touches % 2 ? 10 : -10}deg)` } : {}),
          ...styles.imageAvatar,
          marginLeft: heroSkins[currentHeroSkin].marginLeft,
          marginTop: heroSkins[currentHeroSkin].marginTop,
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageAvatar: {
    width: "100%",
    height: "100%",
  },
});

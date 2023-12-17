import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { HeroAvatar } from "./HeroAvatar";

interface HeroProps {}

export const Hero = memo((props: HeroProps) => {
  const {} = props;

  return (
    <View style={styles.heroContainer}>
      <HeroAvatar />
    </View>
  );
});

const styles = StyleSheet.create({
  heroContainer: {
    // height: "80%",
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

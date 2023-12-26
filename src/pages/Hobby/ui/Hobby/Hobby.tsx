import { Text } from "native-base";
import { memo, useEffect, useState } from "react";
import { View } from "react-native";
import { Roulette } from "../../../../features/Casino/Roulette/Roulette";

interface HobbyProps {}

export const HobbyPage = memo((props: HobbyProps) => {
  const {} = props;
  const [isWin, setIsWin] = useState<"Win" | "Fail">();

  useEffect(() => {
    console.log(isWin);
  }, [isWin]);

  return (
    <View>
      <Text>Dumb</Text>
      <Roulette level="EASY" setIsWin={setIsWin} />
    </View>
  );
});

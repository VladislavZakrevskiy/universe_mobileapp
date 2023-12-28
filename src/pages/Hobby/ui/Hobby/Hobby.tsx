import { Text } from "native-base";
import { memo, useEffect, useState } from "react";
import { View } from "react-native";
import { Roulette } from "../../../../features/Casino/Roulette/Roulette";
import { Card } from "../../../../features/Casino/Cards/Card";
import { GuessMyCard } from "../../../../features/Casino/Cards/GuessMyCard/Cards";
import { TicTacToe } from "../../../../features/Casino/TicTacToe/TicTacToe";
import { Barrel } from "../../../../features/Casino/Barrel/Barrel";

interface HobbyProps {}

export const HobbyPage = memo((props: HobbyProps) => {
  return (
    <View>
      <Text>Dumb 1</Text>
      <TicTacToe setIsWin={() => 0} />
    </View>
  );
});

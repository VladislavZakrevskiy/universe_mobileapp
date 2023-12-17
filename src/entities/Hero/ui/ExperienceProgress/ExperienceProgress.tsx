import { View, Text } from "react-native";
import React from "react";
import { Progress } from "native-base";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { experienceTable } from "../../../../shared/consts/levels/experienceTable";

export const ExperienceProgress = () => {
  const { experience, level } = useAppSelector((state) => state.hero);

  return <Progress colorScheme="blue" value={(experience / experienceTable[(level + 1) % 17]) * 100} size={"2xl"} />;
};

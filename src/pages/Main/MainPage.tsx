import { Button, VStack } from "native-base";
import { View, Text } from "react-native";
import { MainProps, Routes } from "../../app/providers/router/route";
import { FastLinks } from "../../widgets/FastLinks";
import { Hero, ExperienceProgress } from "../../entities/Hero";
import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";

export const MainPage = ({ navigation }: MainProps) => {
  const { level, experience } = useAppSelector((state) => state.hero);

  return (
    <VStack style={{ height: "100%", justifyContent: "flex-end", padding: 10 }}>
      <Text>
        Level: {level}; Experience: {experience.toFixed(1)}
      </Text>
      <ExperienceProgress />
      <Hero />
      <FastLinks />
    </VStack>
  );
};

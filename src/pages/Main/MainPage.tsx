import { VStack } from "native-base";
import { MainProps } from "../../app/providers/router/route";
import { FastLinks } from "../../widgets/FastLinks";
import { Hero, ExperienceProgress } from "../../entities/Hero";

export const MainPage = ({ navigation }: MainProps) => {
  return (
    <VStack style={{ height: "100%", justifyContent: "flex-end", padding: 10 }}>
      <ExperienceProgress />
      <Hero />
      <FastLinks />
    </VStack>
  );
};

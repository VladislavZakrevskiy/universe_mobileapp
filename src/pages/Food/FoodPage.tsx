import { Button } from "native-base";
import { View, Text } from "react-native";
import { FoodProps, Routes } from "../../app/providers/router/route";

export const FoodPage = ({ navigation }: FoodProps) => {
  return (
    <View>
      {/* <Text>FoodPage</Text> */}
      <Button onPress={() => navigation.navigate(Routes.MAIN)}>To Main</Button>
    </View>
  );
};

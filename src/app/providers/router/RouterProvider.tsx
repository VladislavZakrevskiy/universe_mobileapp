import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, Routes } from "./route";
import { MainPage } from "../../../pages/Main/MainPage";
import { FoodPage } from "../../../pages/Food/FoodPage";
import { Text, View } from "native-base";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RouterProvider() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.MAIN}
        screenOptions={{
          animation: "slide_from_right",
          navigationBarHidden: true,
          headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
        }}
      >
        <Stack.Screen name={Routes.MAIN} component={MainPage} />
        <Stack.Screen name={Routes.FOOD} component={FoodPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

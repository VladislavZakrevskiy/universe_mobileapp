import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { memo } from "react";
import { View } from "react-native";
import { SchoolRoutes, SchoolRoutesConfig, SchoolStackParamList } from "./SchoolConfig";

const Stack = createNativeStackNavigator<SchoolStackParamList>();

export const SchoolRouter = memo(() => {
  return (
    <Stack.Navigator initialRouteName={SchoolRoutes.MAIN}>
      {Object.entries(SchoolRoutesConfig).map(([name, route]) => (
        <Stack.Screen
          name={name as keyof SchoolStackParamList}
          component={route.children}
          options={{ headerShown: name === SchoolRoutes.MAIN ? false : true }}
        />
      ))}
    </Stack.Navigator>
  );
});

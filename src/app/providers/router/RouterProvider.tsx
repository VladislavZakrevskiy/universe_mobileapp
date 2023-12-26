import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList, Routes } from "./route";
import { HStack, Text } from "native-base";
import { LevelStat } from "../../../widgets/Stats/ui/LevelStat";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ExpStat } from "../../../widgets/Stats/ui/ExpStat";
import { MoneyStat } from "../../../widgets/Stats/ui/MoneyStat";
import { routerConfig } from "./routeConfig";

const Drawer = createDrawerNavigator<RootStackParamList>();

export function RouterProvider() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Главная"}
        screenOptions={{
          drawerStatusBarAnimation: "fade",
          headerTitle: (props) => {
            return <Text style={{ fontSize: 21, fontWeight: "bold", color: props.tintColor }}>{props.children}</Text>;
          },
          headerRight: () => {
            return (
              <HStack style={{ marginRight: 10, gap: 5 }}>
                <MoneyStat />
                <ExpStat />
                <LevelStat />
              </HStack>
            );
          },
        }}
      >
        {Object.entries(routerConfig).map(([name, { component, options }]) => (
          <Drawer.Screen name={name as Routes} component={component} options={options} key={name} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

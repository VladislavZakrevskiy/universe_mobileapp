import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, Routes } from "./route";
import { MainPage } from "../../../pages/Main/MainPage";
import { FoodPage } from "../../../pages/Food/FoodPage";
import { Text, View } from "native-base";
import { LevelStat } from "../../../widgets/Stats/ui/LevelStat";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Modules } from "./routeConfig";
import { HobbyPage } from "../../../pages/Hobby";
import { MentalPage } from "../../../pages/Mental";
import { PoliticsPage } from "../../../pages/Politics";
import { SchoolPage } from "../../../pages/School/ui/School/School";

const Stack = createNativeStackNavigator<RootStackParamList>();
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
              <View style={{ marginRight: 10 }}>
                <LevelStat />
              </View>
            );
          },
        }}
      >
        <Drawer.Screen component={MainPage} name={Routes.MAIN} key={Routes.MAIN} />
        <Drawer.Screen component={FoodPage} name={Routes.FOOD} key={Routes.FOOD} />
        <Drawer.Screen component={HobbyPage} name={Routes.HOBBY} key={Routes.HOBBY} />
        <Drawer.Screen component={MentalPage} name={Routes.MENTAL} key={Routes.MENTAL} />
        <Drawer.Screen component={PoliticsPage} name={Routes.POLITICS} key={Routes.SCHOOL} />
        <Drawer.Screen component={SchoolPage} name={Routes.SCHOOL} key={Routes.MAIN} />
      </Drawer.Navigator>
      {/* <Stack.Navigator
        initialRouteName={Routes.MAIN}
        screenOptions={{
          animation: "slide_from_right",
          navigationBarHidden: true,
          headerTitle: (props) => {
            return <Text style={{ fontSize: 21, fontWeight: "bold", color: props.tintColor }}>{props.children}</Text>;
          },
          headerRight: () => {
            return <LevelStat />;
          },
        }}
      >
        <Stack.Screen name={Routes.MAIN} component={MainPage} />
        <Stack.Screen name={Routes.FOOD} component={FoodPage} />
        <Stack.Screen name={Routes.HOBBY} component={HobbyPage} />
        <Stack.Screen name={Routes.MENTAL} component={MentalPage} />
        <Stack.Screen name={Routes.POLITICS} component={PoliticsPage} />
        <Stack.Screen name={Routes.SCHOOL} component={SchoolPage} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

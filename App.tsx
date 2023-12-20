import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { RouterProvider } from "./src/app/providers/router/RouterProvider";
import { AppProvider } from "./src/app/providers/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <RouterProvider />
      <StatusBar style="auto" />
    </AppProvider>
  );
}

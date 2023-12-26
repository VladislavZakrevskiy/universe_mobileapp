import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Routes } from "../../../app/providers/router";

export const moduleIcons: Record<Routes, ({ size, color }: { size?: number; color?: string }) => ReactNode> = {
  [Routes.MAIN]: ({ size = 50, color = "black" }) => <Ionicons name="home" size={size} color={color} />,
  [Routes.SCHOOL]: ({ size = 50, color = "black" }) => <Ionicons name="school" size={size} color={color} />,
  [Routes.FOOD]: ({ size = 50, color = "black" }) => <Ionicons name="fast-food" size={size} color={color} />,
  [Routes.HOBBY]: ({ size = 50, color = "black" }) => <MaterialCommunityIcons name="popcorn" size={size} color={color} />,
  [Routes.MENTAL]: ({ size = 50, color = "black" }) => <MaterialCommunityIcons name="brain" size={size} color={color} />,
  [Routes.POLITICS]: ({ size = 50, color = "black" }) => <MaterialCommunityIcons name="human-male-board-poll" size={size} color={color} />,
  [Routes.SLEEP]: ({ size = 50, color = "black" }) => <MaterialCommunityIcons name="sleep" size={size} color={color} />,
};

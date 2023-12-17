import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Modules } from "../../../app/providers/store/StateSchema";
import { ReactNode } from "react";

export const moduleIcons: Record<Modules, ReactNode> = {
  school: <Ionicons name="school" size={50} color="black" />,
  food: <Ionicons name="fast-food" size={50} color="black" />,
  hobby: <MaterialCommunityIcons name="popcorn" size={50} color="black" />,
  mental: <MaterialCommunityIcons name="brain" size={50} color="black" />,
  politics: <MaterialCommunityIcons name="human-male-board-poll" size={50} color="black" />,
};

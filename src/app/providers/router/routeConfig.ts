import { ReactNode } from "react";
import { Routes } from "./route";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { MainPage } from "../../../pages/Main/MainPage";
import { FoodPage } from "../../../pages/Food/FoodPage";
import { HobbyPage } from "../../../pages/Hobby";
import { MentalPage } from "../../../pages/Mental";
import { PoliticsPage } from "../../../pages/Politics";
import { SchoolRouter } from "../../../pages/School";
import { SleepPage } from "../../../pages/Sleep";
import { moduleIcons } from "../../../shared/consts/skins/moduleIcons";

export interface Route {
  component: ({}: any) => ReactNode;
  options: DrawerNavigationOptions;
}

export const routerConfig: Record<Routes, Route> = {
  [Routes.MAIN]: {
    component: MainPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.MAIN]({ size: 20 }),
    },
  },
  [Routes.FOOD]: {
    component: FoodPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.FOOD]({ size: 20 }),
    },
  },
  [Routes.HOBBY]: {
    component: HobbyPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.HOBBY]({ size: 20 }),
    },
  },
  [Routes.MENTAL]: {
    component: MentalPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.MENTAL]({ size: 20 }),
    },
  },
  [Routes.POLITICS]: {
    component: PoliticsPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.POLITICS]({ size: 20 }),
    },
  },
  [Routes.SCHOOL]: {
    component: SchoolRouter,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.SCHOOL]({ size: 20 }),
    },
  },
  [Routes.SLEEP]: {
    component: SleepPage,
    options: {
      drawerIcon: ({}) => moduleIcons[Routes.SLEEP]({ size: 20 }),
    },
  },
};

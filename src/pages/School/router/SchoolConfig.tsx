import { ReactNode } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainPage } from "../ui/MainPage/MainPage";
import { DailyPage } from "../ui/DailyPage/DailyPage";
import { LessonPage } from "../ui/LessonPage/LessonPage";
import { TeachersPage } from "../ui/TeachersPage/TeachersPage";

export enum SchoolRoutes {
  MAIN = "Главная",
  TEACHERS = "Учителя",
  LESSONS = "Уроки",
  DAILY = "Дневник",
}

export type SchoolStackParamList = {
  Главная: undefined;
  Учителя: undefined;
  Уроки: undefined;
  Дневник: undefined;
};

interface SchoolRoute<T = undefined> {
  children: ({}: any) => ReactNode;
  props?: T;
}

export type SchoolMainProps = NativeStackScreenProps<SchoolStackParamList, SchoolRoutes.MAIN>;
export type SchoolLessonProps = NativeStackScreenProps<SchoolStackParamList, SchoolRoutes.LESSONS>;
export type SchoolDaylyProps = NativeStackScreenProps<SchoolStackParamList, SchoolRoutes.DAILY>;
export type SchoolTeachersProps = NativeStackScreenProps<SchoolStackParamList, SchoolRoutes.TEACHERS>;

export const SchoolRoutesConfig: Record<SchoolRoutes, SchoolRoute> = {
  [SchoolRoutes.MAIN]: {
    children: MainPage,
  },
  [SchoolRoutes.LESSONS]: {
    children: LessonPage,
  },
  [SchoolRoutes.DAILY]: {
    children: DailyPage,
  },
  [SchoolRoutes.TEACHERS]: {
    children: TeachersPage,
  },
};

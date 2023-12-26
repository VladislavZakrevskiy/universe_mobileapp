import { View, Text } from "react-native";
import React from "react";
import { LessonList } from "../../../../entities/School";
import { ScrollView } from "react-native-gesture-handler";
import { LessonBuff } from "../../../../shared/consts/lessons/LessonBaffsInfo";

export function LessonPage() {
  return (
    <ScrollView>
      <LessonList />
    </ScrollView>
  );
}

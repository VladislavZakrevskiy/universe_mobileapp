import { View, Text } from "react-native";
import React from "react";
import { lessonBuffsInfo } from "../../../../shared/consts/lessons/LessonBaffsInfo";
import { LessonItem } from "./LessonItem";
import { LessonsName } from "../../model/types/Lesson";

export function LessonList() {
  return (
    <View>
      {Object.entries(lessonBuffsInfo).map(([name, lesson]) => (
        <LessonItem lesson={lesson} lessonName={name as LessonsName} />
      ))}
    </View>
  );
}

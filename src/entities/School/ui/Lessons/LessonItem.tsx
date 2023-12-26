import React from "react";
import { Card } from "../../../../shared/ui/Card";
import { LessonBuff } from "../../../../shared/consts/lessons/LessonBaffsInfo";
import { LessonsName } from "../../model/types/Lesson";
import { Image, Text } from "native-base";
import { StyleSheet } from "react-native";

interface Props {
  lesson: LessonBuff;
  lessonName: LessonsName;
}

export function LessonItem({ lesson, lessonName }: Props) {
  const { mainInfo, src } = lesson;

  return (
    <Card
      body={
        <>
          <Text style={styles.paragraph}>{mainInfo}</Text>
        </>
      }
      header={
        <>
          <Image source={src} alt="Урок" style={styles.image} />
          <Text style={styles.title}>{lessonName}</Text>
        </>
      }
      btnTitle="Получить оценку"
    />
  );
}

const styles = StyleSheet.create({
  image: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    color: "#fff",
  },

  paragraph: { color: "#fff", fontSize: 14 },
  decoration: {},
});

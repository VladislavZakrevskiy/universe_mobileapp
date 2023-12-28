import React from "react";
import { Card } from "../../../../shared/ui/Card";
import { LessonBuff } from "../../../../shared/consts/lessons/LessonBaffsInfo";
import { LessonsName } from "../../model/types/Lesson";
import { Image, Text } from "native-base";
import { StyleSheet } from "react-native";
import { CasinoButton } from "../../../../widgets/CasinoButton";
import { randomIntFromInterval } from "../../../../shared/lib/funcs/randomIntFromInterval";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { Routes } from "../../../../app/providers/router";
import { useSchoolActions } from "../../model/slices/SchoolSlice";

interface Props {
  lesson: LessonBuff;
  lessonName: LessonsName;
}

export function LessonItem({ lesson, lessonName }: Props) {
  const { mainInfo, src } = lesson;
  const { teachers } = useAppSelector((state) => state[Routes.SCHOOL]);
  const { addGrade } = useSchoolActions();
  const getLevel = (favGrade: number) => {
    switch (favGrade) {
      case 5:
        return "EASY";
      case 4:
        return "MEDIUM";
      case 3:
        return "HARD";
      case 2:
        return "HARD";
      default:
        return "MEDIUM";
    }
  };

  const setIsWin = (win: "Fail" | "Win") => {
    if (win === "Fail") {
      addGrade({ grade: teachers[lessonName].favGrade <= 2 ? 2 : teachers[lessonName].favGrade - 1, name: lessonName });
    } else {
      addGrade({ grade: teachers[lessonName].favGrade >= 5 ? 5 : teachers[lessonName].favGrade + 1, name: lessonName });
    }
  };

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
      CustomButton={
        <CasinoButton gameNumber={randomIntFromInterval(0, 3)} level={getLevel(teachers[lessonName].favGrade)} setIsWin={setIsWin}>
          Получить оценку Casino
        </CasinoButton>
      }
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

import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { Routes } from "../../../../app/providers/router";
import { Lesson, LessonsName } from "../../model/types/Lesson";
import { DailyLinkTitle } from "../../../../features/DailyLinkTitle";

interface Props {
  name: LessonsName;
  lesson: Lesson;
}

export function SchoolTableItem({ lesson, name }: Props) {
  const grades = lesson.grades;
  const getGradeColor = (grade: number): string => {
    switch (grade) {
      case 5:
        return "#00a900";
      case 4:
        return "#aeae4c";
      case 3:
        return "#f90";
      case 2:
        return "#f00";
      default:
        return "#000";
    }
  };

  const countMiddleGrade = (grades: number[]) => {
    let summa = 0;
    for (let i = 0; i < grades.length; i++) summa += grades[i];
    return Math.floor((summa / grades.length) * 10) / 10 || 0;
  };

  return (
    <HStack style={styles.container}>
      <View style={styles.nameContainer}>
        <DailyLinkTitle titleStyle={styles.name} content={<VStack></VStack>}>
          {name}
        </DailyLinkTitle>
      </View>
      <HStack style={styles.gradeList}>
        {grades.map((grade) => (
          <View style={{ ...styles.grade, backgroundColor: getGradeColor(grade) }}>
            <Text style={styles.gradeParagraph}>{grade}</Text>
          </View>
        ))}
      </HStack>
      <HStack style={styles.middleGradeContainer}>
        <Text style={{ ...styles.grade, backgroundColor: getGradeColor(Math.ceil(countMiddleGrade(grades))), padding: 5, color: "#fff" }}>
          {countMiddleGrade(grades)}
        </Text>
      </HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {},
  nameContainer: {
    width: "33%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  name: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#00f",
    textDecorationLine: "underline",
  },
  gradeList: {
    borderColor: "#000",
    borderWidth: 1,
    minWidth: "57%",
    maxWidth: "57%",
    flexWrap: "wrap",
    gap: 2,
    padding: 3,
  },
  grade: { borderRadius: 4 },
  gradeParagraph: {
    padding: 3,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#fff",
  },
  middleGradeContainer: {
    minWidth: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: " #000",
    borderWidth: 1,
  },
});

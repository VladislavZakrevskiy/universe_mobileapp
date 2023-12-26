import { VStack } from "native-base";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useAppSelector } from "../../../../shared/lib/hooks/useAppSelector";
import { Routes } from "../../../../app/providers/router";
import { SchoolTableItem } from "./SchoolTableItem";
import { LessonsName } from "../../model/types/Lesson";

export const SchoolTable = memo(() => {
  const { lessons } = useAppSelector((state) => state[Routes.SCHOOL]);

  return (
    <VStack style={styles.table}>
      {Object.entries(lessons).map(([lessonName, lesson]) => (
        <SchoolTableItem lesson={lesson} name={lessonName as LessonsName} />
      ))}
    </VStack>
  );
});

const styles = StyleSheet.create({
  table: {},
});

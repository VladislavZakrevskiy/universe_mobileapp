import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Page } from "../../../../shared/ui/Page";
import { ScrollView, VStack } from "native-base";
import { teacherList } from "../../../../shared/consts/lessons/teacherList";
import { TeacherInfo } from "../../../../entities/School/ui/Teacher/TeacherInfo";
import { LessonsName } from "../../../../entities/School/model/types/Lesson";
import { FlatList } from "react-native-gesture-handler";

export function TeachersPage() {
  return (
    <ScrollView>
      {Object.values(teacherList).map((info) => (
        <TeacherInfo info={info} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import React from "react";
import { SchoolMainProps, SchoolRoutes } from "../../router/SchoolConfig";
import { Button, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

export function MainPage({ navigation }: SchoolMainProps) {
  return (
    <VStack style={styles.container}>
      <Text style={styles.title}>Навигация</Text>
      <Button key={SchoolRoutes.TEACHERS} onPress={() => navigation.navigate(SchoolRoutes.TEACHERS)} style={styles.link_btn}>
        Учительский состав
      </Button>
      <Button key={SchoolRoutes.DAILY} onPress={() => navigation.navigate(SchoolRoutes.DAILY)} style={styles.link_btn}>
        Дневник
      </Button>
      <Button key={SchoolRoutes.LESSONS} onPress={() => navigation.navigate(SchoolRoutes.LESSONS)} style={styles.link_btn}>
        Уроки
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  link_btn: { width: "100%" },
  title: { fontSize: 30, fontWeight: "bold", textAlign: "center", padding: 10 },
  container: { padding: 10, gap: 10, justifyContent: "center", alignItems: "center", height: "100%" },
});

import { StyleSheet } from "react-native";
import { View, VStack, Image, Text, Button, HStack } from "native-base";
import { TeacherInfo as CTeacherInfo } from "../../../../shared/consts/lessons/teacherList";
import { Card } from "../../../../shared/ui/Card";

interface Props {
  info: CTeacherInfo;
  // lessonName: LessonsName;
}

export function TeacherInfo({ info }: Props) {
  const { favClothes, favGrade, favPlace, favPunishment, name, src, age } = info;
  return (
    <Card
      body={
        <>
          <Text style={styles.paragraph}>
            Возраст: <Text style={styles.decoration}>{age}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Любимая оценка: <Text style={styles.decoration}>{favGrade}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Любимое наказание: <Text style={styles.decoration}>{favPunishment}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Любимое место: <Text style={styles.decoration}>{favPlace}</Text>
          </Text>
          <Text style={styles.paragraph}>
            Любимая одежда: <Text style={styles.decoration}>{favClothes}</Text>
          </Text>
        </>
      }
      header={
        <>
          <Image source={src} style={styles.image} alt="Учитель" />
          <Text style={styles.title}>{name}</Text>
        </>
      }
      btnTitle="Подлизать (1000руб.)"
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

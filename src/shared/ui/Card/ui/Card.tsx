import { Button, HStack, Text, VStack, View } from "native-base";
import { Component, ReactNode } from "react";
import { StyleSheet } from "react-native";

interface Props {
  header: ReactNode;
  body: ReactNode;
  CustomButton?: ReactNode;
  onPressBtn?: () => void;
  btnTitle?: string;
}

export function Card({ body, header, onPressBtn, btnTitle, CustomButton }: Props) {
  return (
    <VStack style={styles.container} borderColor={"primary.800"}>
      <HStack style={styles.header} bg={"primary.800"}>
        {header}
      </HStack>
      <VStack style={styles.info}>
        <VStack style={styles.innerContainer} bg="primary.600">
          {body}
        </VStack>
      </VStack>
      {CustomButton ? (
        CustomButton
      ) : (
        <Button style={styles.buy_btn} onPress={onPressBtn}>
          {btnTitle}
        </Button>
      )}
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 2,
  },
  header: {
    gap: 5,
  },
  info: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    borderRadius: 12,
    borderColor: "#000",
    padding: 10,
  },
  buy_btn: {},
});

import { View, Text, StyleProp, ViewStyle } from "react-native";
import React, { FC, ReactNode } from "react";
import { HStack, VStack } from "native-base";

interface Props {
  children: ReactNode;
  Wrapper?: typeof View | typeof HStack | typeof VStack;
  style?: StyleProp<ViewStyle>;
}

export function Page({ children, Wrapper = View, style }: Props) {
  return <Wrapper style={style}>{children}</Wrapper>;
}

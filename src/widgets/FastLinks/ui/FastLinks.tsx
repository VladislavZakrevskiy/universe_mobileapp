import { StyleSheet } from "react-native";
import React from "react";
import { HStack } from "native-base";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { FastLinksItem } from "./FastLinksItem";
import { Modules } from "../../../app/providers/router/routeConfig";

export const FastLinks = () => {
  // const { fastLinks } = useAppSelector((state) => state.fastLinks);
  const fastLinks = [Modules.FOOD, Modules.HOBBY, Modules.MENTAL, Modules.POLITICS];
  return (
    <HStack style={{ height: "12%", justifyContent: "space-evenly" }}>
      {fastLinks.map((fastLink) => (
        <FastLinksItem name={fastLink} key={fastLink} />
      ))}
    </HStack>
  );
};

const styles = StyleSheet.create({});

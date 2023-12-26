import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Modules } from "../../../app/providers/router/route";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";
import { moduleIcons } from "../../../shared/consts/skins/moduleIcons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../app/providers/router";
import { StatLink } from "../../../shared/ui/StatLink";

interface Props {
  name: Modules;
  isLink?: boolean;
  navigation?: NativeStackNavigationProp<RootStackParamList>;
}

export const FastLinksItem = ({ name, isLink = true, navigation }: Props) => {
  const { percent } = useAppSelector((state) => state[name]);

  const navTo = () => {
    if (isLink) {
      navigation?.navigate(name);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={navTo}>
      <StatLink percent={percent} icon={moduleIcons[name]({ size: 50 })} />
    </TouchableWithoutFeedback>
  );
};

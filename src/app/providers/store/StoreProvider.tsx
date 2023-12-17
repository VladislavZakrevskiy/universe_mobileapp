import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "./store";
import { StateSchema } from "./StateSchema";
import { Text } from "react-native";

interface Props {
  children: ReactNode;
  initialSchema?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<Props> = ({ children, initialSchema }) => {
  const store = createReduxStore(initialSchema as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};

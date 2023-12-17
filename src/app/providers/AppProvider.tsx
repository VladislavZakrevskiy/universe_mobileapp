import { NativeBaseProvider } from "native-base";
import { ReactNode } from "react";
import { StoreProvider } from "./store";

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <NativeBaseProvider>
      <StoreProvider>{children}</StoreProvider>
    </NativeBaseProvider>
  );
};

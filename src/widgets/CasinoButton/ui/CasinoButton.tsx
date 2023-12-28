import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Button, Modal } from "native-base";
import { CasinoGames } from "../../../features/Casino/index";
import { CasinoGameProps } from "../../../features/Casino/types";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  gameNumber: number;
  setIsWin: (result: "Win" | "Fail") => void;
  style?: StyleProp<ViewStyle>;
}

export function CasinoButton({ children, gameNumber, level, setIsWin, style }: Props & Omit<CasinoGameProps, "setIsWin">) {
  const CasinoGame = CasinoGames[gameNumber];
  const [modalVisible, setModalVisible] = useState(false);

  const setWin = (win: "Win" | "Fail") => {
    setIsWin(win);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.Header>Казино! ({CasinoGame.name})</Modal.Header>
          <Modal.Body>
            <CasinoGame level={level} setIsWin={setWin} />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Не понял
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Хорошо
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button style={style} onPress={() => setModalVisible(true)}>
        {children}
      </Button>
    </>
  );
}

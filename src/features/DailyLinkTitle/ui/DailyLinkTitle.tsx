import { Button, HStack, Modal, Text } from "native-base";
import { ReactNode, useState } from "react";
import { StyleProp, TextStyle, TouchableWithoutFeedback } from "react-native";

interface Props {
  children: ReactNode;
  titleStyle: StyleProp<TextStyle>;
  content: ReactNode;
}

export function DailyLinkTitle({ children, titleStyle, content }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Информация о предмете</Modal.Header>
          <Modal.Body>{content}</Modal.Body>
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
      <HStack space="4" justifyContent="center" alignItems="center">
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={titleStyle}>{children}</Text>
        </TouchableWithoutFeedback>
      </HStack>
    </>
  );
}

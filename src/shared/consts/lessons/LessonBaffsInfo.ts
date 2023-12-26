import { ImageSourcePropType } from "react-native";
import { LessonsName } from "../../../entities/School/model/types/Lesson";

export interface LessonBuff {
  src: ImageSourcePropType
  mainInfo: string;
  table: {
    buffName: string;
    number: number;
  }[];
}

// TODO: с помощью notion придумать текст
export const lessonBuffsInfo: Record<LessonsName, LessonBuff> = {
  [LessonsName.ALGEBRA]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.BIOLOGY]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.EGE]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.ENGLISH]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.GEOGRAPHY]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.GEOMETRY]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.GERMAN]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.IKT]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.LITERATURE]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
  [LessonsName.RUSSIAN]: {
    src: require('../../../../assets/favicon.png'),
    mainInfo: "",
    table: [{ buffName: "", number: 0 }],
  },
};

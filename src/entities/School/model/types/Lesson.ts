export enum LessonsName {
  GERMAN = "Немецкий",
  RUSSIAN = "Русский",
  LITERATURE = "Литература",
  ALGEBRA = "Алгебра",
  GEOMETRY = "Геометрия",
  BIOLOGY = "Биология",
  GEOGRAPHY = "География",
  ENGLISH = "Английский",
  IKT = "ИКТ",
  EGE = "ЕГЭ",
}

export interface Lesson {
  grades: number[];
  skill: number;
  likely: number;
}

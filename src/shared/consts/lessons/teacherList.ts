import { ImageSourcePropType } from "react-native"
import { LessonsName } from "../../../entities/School/model/types/Lesson"

export interface TeacherInfo {
    name: string
    age: number | string
    favGrade: number
    favPunishment: string
    favPlace: string
    favClothes: string
    src: ImageSourcePropType
}

export const teacherList: Record<LessonsName, TeacherInfo> = {
    Алгебра: {
        name: "Лариса Викторовна", 
        age: 'Много', 
        favGrade: 3,
        favPunishment: 'Выкидывание терадок',
        favPlace: "Ларин 329 вариант",
        favClothes: 'Ященко 36 вариантов профильный уровень',
        src: require('../../../../assets/favicon.png')
    }, 
    Английский: {
        name: "Ольга Викторовна",
        age: "В самом рассвете сил",
        favGrade: 5,
        favPunishment: "Задать хуйню",
        favPlace: "Учительская",
        favClothes: "гдз по английскому 11 класс вербицкая",
        src: require('../../../../assets/favicon.png')
    },
    Биология: {
        name: "Фикус",
        age: "Фикус",
        favGrade: 5,
        favPunishment: "",
        favPlace: "Фикус",
        favClothes: "Фикус",
        src: require('../../../../assets/favicon.png')
    },
    География: {
        name: "Бигмаковна",
        age: "Макдональдс",
        favGrade: 5,
        favPunishment: "Рассказать про фестиваль сосисок в Тольятти",
        favPlace: "Вкусно и точка",
        favClothes: "Скандинавский Бургер",
        src: require('../../../../assets/favicon.png')
    },
    Геометрия: {
        name: "Лариса Викторовна", 
        age: 'Много', 
        favGrade: 3,
        favPunishment: 'Выкидывание терадок',
        favPlace: "Ларин 329 вариант",
        favClothes: 'Ященко 36 вариантов профильный уровень',
        src: require('../../../../assets/favicon.png')
    },
    ЕГЭ: {
        name: "Ященко",
        age: "Хуесос",
        favGrade: 2,
        favPunishment: "Уебище",
        favPlace: "Мразь",
        favClothes: "Гнида",
        src: require('../../../../assets/favicon.png')
    },
    ИКТ: {
        name: "Айжана Михайловна",
        age: "5",
        favGrade: 5,
        favPunishment: "Отпустить с урока",
        favPlace: "АГУ ЗФ",
        favClothes: "Колонка в кабинете ИКТ",
        src: require('../../../../assets/favicon.png')
    },
    Литература: {
        name: "Елена Викторовна",
        age: "Длина носа",
        favGrade: 3,
        favPunishment: "Задавать 3 стиха за неделю",
        favPlace: "Макаронная",
        favClothes: "3 том Войны и мир",
        src: require('../../../../assets/favicon.png')
    },
    Немецкий: {
        name: "Ирина Владимировна",
        age: "ее iq",
        favGrade: 2,
        favPunishment: "слова",
        favPlace: "туалет",
        favClothes: "слова",
        src: require('../../../../assets/favicon.png')
    },
    Русский: {
        name: "Елена Викторовна",
        age: "Длина носа",
        favGrade: 3,
        favPunishment: "Задавать 3 стиха за неделю",
        favPlace: "Макаронная",
        favClothes: "3 том Войны и мир",
        src: require('../../../../assets/favicon.png')
    }
}
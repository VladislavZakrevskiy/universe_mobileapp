import { NativeStackScreenProps } from '@react-navigation/native-stack';
export enum Routes {
    MAIN = 'Главная',
    FOOD = 'Еда',
    MENTAL = 'Психика',
    SCHOOL = 'Школа',
    HOBBY = 'Хобби',
    POLITICS = 'Политика',
    SLEEP = 'Сон'
}

export type RootStackParamList = {
    Главная: undefined
    Еда: undefined
    Психика: undefined
    Школа: undefined
    Хобби: undefined
    Политика: undefined
    Сон: undefined
}  

export type MainProps = NativeStackScreenProps<RootStackParamList, Routes.MAIN>
export type FoodProps = NativeStackScreenProps<RootStackParamList, Routes.FOOD>
export type MentalProps = NativeStackScreenProps<RootStackParamList, Routes.MENTAL>
export type SchoolProps = NativeStackScreenProps<RootStackParamList, Routes.SCHOOL>
export type HobbyProps = NativeStackScreenProps<RootStackParamList, Routes.HOBBY>
export type PoliticsProps = NativeStackScreenProps<RootStackParamList, Routes.POLITICS>
export type SleepProps = NativeStackScreenProps<RootStackParamList, Routes.SLEEP>
export enum Modules {
    FOOD = 'Еда',
    MENTAL = 'Психика',
    SCHOOL = 'Школа',
    HOBBY = 'Хобби',
    POLITICS = 'Политика',
    SLEEP = 'Сон'
}

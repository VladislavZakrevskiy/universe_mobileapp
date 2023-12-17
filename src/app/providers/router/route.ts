import { NativeStackScreenProps } from '@react-navigation/native-stack';
export enum Routes {
    MAIN = 'Главная',
    FOOD = 'Еда'
}

export type RootStackParamList = {
    Главная: undefined
    Еда: undefined
}  

export type MainProps = NativeStackScreenProps<RootStackParamList, Routes.MAIN>
export type FoodProps = NativeStackScreenProps<RootStackParamList, Routes.FOOD>

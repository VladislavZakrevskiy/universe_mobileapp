import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchoolSchema } from '../types/SchoolSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';
import { LessonsName } from '../types/Lesson';

const initialState: SchoolSchema = {
    percent: 0,
    lessons: {
        Алгебра: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Английский: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Биология: {
            grades: [],
            likely: 0,
            skill: 0
        },
        География: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Геометрия: {
            grades: [],
            likely: 0,
            skill: 0
        },
        ЕГЭ: {
            grades: [],
            likely: 0,
            skill: 0
        },
        ИКТ: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Литература: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Немецкий: {
            grades: [],
            likely: 0,
            skill: 0
        },
        Русский: {
            grades: [],
            likely: 0,
            skill: 0
        },
    }
};

export const SchoolSlice = buildSlice({
    name: 'School',
    initialState,
    reducers: {
        addGrade: (state, action: PayloadAction<{name: LessonsName, grade: number}>) => {
            const {grade, name} = action.payload
            state.lessons[name].grades.push(grade)
        },
    },
});

export const { actions: SchoolActions, reducer: SchoolReducer, useActions: useSchoolActions } = SchoolSlice;
export const {  } = SchoolSlice;
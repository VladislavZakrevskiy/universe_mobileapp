import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchoolSchema } from '../types/SchoolSchema';

const initialState: SchoolSchema = {
    
};

export const SchoolSlice = createSlice({
    name: 'School',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: SchoolActions, reducer: SchoolReducer, useActions: useSchoolActions } = SchoolSlice;
export const {  } = SchoolSlice;
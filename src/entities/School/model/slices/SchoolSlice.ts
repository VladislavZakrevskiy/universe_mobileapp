import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchoolSchema } from '../types/SchoolSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: SchoolSchema = {
    percent: 80
    
};

export const SchoolSlice = buildSlice({
    name: 'School',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: SchoolActions, reducer: SchoolReducer, useActions: useSchoolActions } = SchoolSlice;
export const {  } = SchoolSlice;
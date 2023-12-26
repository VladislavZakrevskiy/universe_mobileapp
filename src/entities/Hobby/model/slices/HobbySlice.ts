import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HobbySchema } from '../types/HobbySchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: HobbySchema = {
    percent: 0
    
};

export const HobbySlice = buildSlice({
    name: 'Hobby',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: HobbyActions, reducer: HobbyReducer, useActions: useHobbyActions } = HobbySlice;
export const {  } = HobbySlice;
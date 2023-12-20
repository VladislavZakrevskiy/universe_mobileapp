import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HobbySchema } from '../types/HobbySchema';

const initialState: HobbySchema = {
    
};

export const HobbySlice = createSlice({
    name: 'Hobby',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: HobbyActions, reducer: HobbyReducer, useActions: useHobbyActions } = HobbySlice;
export const {  } = HobbySlice;
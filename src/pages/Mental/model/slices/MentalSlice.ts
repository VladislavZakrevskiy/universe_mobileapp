import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MentalSchema } from '../types/MentalSchema';

const initialState: MentalSchema = {
    
};

export const MentalSlice = createSlice({
    name: 'Mental',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: MentalActions, reducer: MentalReducer, useActions: useMentalActions } = MentalSlice;
export const {  } = MentalSlice;
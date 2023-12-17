import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MentalSchema } from '../types/MentalSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: MentalSchema = {
    percent: 60
    
};

export const MentalSlice = buildSlice({
    name: 'Mental',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: MentalActions, reducer: MentalReducer, useActions: useMentalActions } = MentalSlice;
export const {  } = MentalSlice;
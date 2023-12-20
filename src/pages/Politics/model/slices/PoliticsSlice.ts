import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PoliticsSchema } from '../types/PoliticsSchema';

const initialState: PoliticsSchema = {
    
};

export const PoliticsSlice = createSlice({
    name: 'Politics',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: PoliticsActions, reducer: PoliticsReducer, useActions: usePoliticsActions } = PoliticsSlice;
export const {  } = PoliticsSlice;
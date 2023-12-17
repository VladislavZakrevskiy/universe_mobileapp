import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PoliticsSchema } from '../types/PoliticsSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: PoliticsSchema = {
    percent: 100
    
};

export const PoliticsSlice = buildSlice({
    name: 'Politics',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: PoliticsActions, reducer: PoliticsReducer, useActions: usePoliticsActions } = PoliticsSlice;
export const {  } = PoliticsSlice;
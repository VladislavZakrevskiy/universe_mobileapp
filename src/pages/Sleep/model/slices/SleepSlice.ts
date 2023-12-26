import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SleepSchema } from '../types/SleepSchema';

const initialState: SleepSchema = {
    
};

export const SleepSlice = createSlice({
    name: 'Sleep',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: SleepActions, reducer: SleepReducer, useActions: useSleepActions } = SleepSlice;
export const {  } = SleepSlice;
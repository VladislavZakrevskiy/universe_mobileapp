import { PayloadAction } from '@reduxjs/toolkit';
import { SleepSchema } from '../types/SleepSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: SleepSchema = {
    
};

export const SleepSlice = buildSlice({
    name: 'Sleep',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: SleepActions, reducer: SleepReducer, useActions: useSleepActions } = SleepSlice;
export const {  } = SleepSlice;
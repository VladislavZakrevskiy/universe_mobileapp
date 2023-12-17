import { PayloadAction } from '@reduxjs/toolkit';
import { FoodSchema } from '../types/FoodSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: FoodSchema = {
    percent: 20
};

export const FoodSlice = buildSlice({
    name: 'Food',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: FoodActions, reducer: FoodReducer, useActions: useFoodActions } = FoodSlice;
export const {  } = FoodSlice;
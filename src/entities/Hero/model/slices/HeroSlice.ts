import { PayloadAction } from '@reduxjs/toolkit';
import { HeroSchema } from '../types/HeroSchema';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';
import { experienceTable } from '../../../../shared/consts/levels/experienceTable';

const initialState: HeroSchema = {
    level: 1,
    experience: 0,
    currentHeroSkin: 1,
    money: 0
};


export const HeroSlice = buildSlice({
    name: 'Hero',
    initialState,
    reducers: {
        setSkin: (state, action: PayloadAction<number>) => {
            if (action.payload <= state.level) {
                state.currentHeroSkin = action.payload
            }
        },

        setLevel: (state) => {
            const levels = Object.entries(experienceTable)
            for (let i = 0; i < levels.length; i++) {
                if (state.experience > levels[i][1]) {
                    state.level = +levels[i][0]
                    state.currentHeroSkin = +levels[i][0]
                }
            }
        },

        addExperience: (state, action: PayloadAction<number>) => {
            state.experience += action.payload
            const levels = Object.entries(experienceTable)
            for (let i = 0; i < levels.length; i++) {
                if (state.experience > levels[i][1]) {
                    state.level = +levels[i][0]
                    state.currentHeroSkin = +levels[i][0]
                }
            }
        },

        addMoney: (state, action: PayloadAction<number>) => {
            if (action.payload < 0 && state.money > -action.payload) {
                state.money += action.payload
            }
            if (action.payload > 0) state.money += action.payload
        }
    },
});

export const { actions: HeroActions, reducer: HeroReducer, useActions: useHeroActions } = HeroSlice;
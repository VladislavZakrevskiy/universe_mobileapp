import { PayloadAction } from "@reduxjs/toolkit";
import { FoodSchema } from "../types/Schema";
import { buildSlice } from "../../../../shared/lib/store/buildSlice";
import { FoodUpgrades, FoodUpgradesItems } from "../types/Schema";

const initialState: FoodSchema = {
  percent: 0,
  foods: FoodUpgradesItems,
};

export const FoodSlice = buildSlice({
  name: "Food",
  initialState,
  reducers: {
    buy: (state, action: PayloadAction<string>) => {
      const categories = Object.keys(state.foods) as (keyof FoodUpgrades)[];
      for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < state.foods[categories[i]].length; j++) {
          if (state.foods[categories[i]][j].name == action.payload) {
            state.foods[categories[i]][j].buy_times += 1;
            break;
          }
        }
      }
    },
  },
});

export const { actions: FoodActions, reducer: FoodReducer, useActions: useFoodActions } = FoodSlice;
export const {} = FoodSlice;

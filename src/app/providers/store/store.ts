import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { FastLinksReducer } from "../../../widgets/FastLinks";
import { FoodReducer } from "../../../entities/Food/model/slices/FoodSlice";
import { HobbyReducer } from "../../../entities/Hobby/model/slices/HobbySlice";
import { MentalReducer } from "../../../entities/Mental/model/slices/MentalSlice";
import { PoliticsReducer } from "../../../entities/Politics/model/slices/PoliticsSlice";
import { SchoolReducer } from "../../../entities/School/model/slices/SchoolSlice";
import { HeroReducer } from "../../../entities/Hero/model/slices/HeroSlice";

export const createReduxStore = (initaialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    // misc
    fastLinks: FastLinksReducer,
    hero: HeroReducer,

    // modules
    Еда: FoodReducer,
    Хобби: HobbyReducer,
    Психика: MentalReducer,
    Политика: PoliticsReducer,
    Школа: SchoolReducer
  };

  const store = configureStore({
    preloadedState: initaialState,
    reducer: rootReducers,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

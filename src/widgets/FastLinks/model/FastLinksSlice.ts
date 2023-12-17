import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "../../../shared/lib/store/buildSlice";
import { Modules } from "../../../app/providers/store/StateSchema";

export interface FastLinkState {
    fastLinks: Modules[]
}
const initialState: FastLinkState = {
    fastLinks: []
};

const FastLinksSlice = buildSlice({
  name: 'fastlinks',
  initialState,
  reducers: {
    addFastLink: (state, action: PayloadAction<Modules>) => {
        state.fastLinks.push(action.payload)
    },

    removeFastLink: (state, action: PayloadAction<Modules>) => {
        state.fastLinks = state.fastLinks.filter((fastLink) => fastLink === action.payload)
    },
},
});

export const {reducer: FastLinksReducer, useActions: useFastLinkActions} = FastLinksSlice;

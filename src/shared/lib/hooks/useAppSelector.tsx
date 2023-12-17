import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StateSchema } from "../../../app/providers/store";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

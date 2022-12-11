import { configureStore } from "@reduxjs/toolkit";
import estadoReducer, { estadosFetch } from "../redux/slices/estadoSlice";
import cityReducer from "../redux/slices/citySlice";

export const store = configureStore({
  reducer: {
    estados: estadoReducer,
	cidades: cityReducer
  },
});

store.dispatch(estadosFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import estadoReducer, { estadosFetch } from "../redux/slices/estadoSlice";
import cityReducer from "../redux/slices/citySlice";
import infoReducer from "../redux/slices/infoSlice";

export const store = configureStore({
  reducer: {
    estados: estadoReducer,
	cidades: cityReducer,
	info: infoReducer
  },
});

store.dispatch(estadosFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

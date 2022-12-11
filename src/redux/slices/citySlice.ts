import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IBGE_API from "../../api/IBGE_API";
import type { CityTypes } from "../../types";

interface CitySliceType {
	cidades: CityTypes[];
	status: string | null;
}

const initialState: CitySliceType = {
	cidades: [],
	status: "",
};

export const cidadesFetch = createAsyncThunk(
	"cidades/cidadesFetch",
	async (sigla: string) => {
		try {
			const response = await IBGE_API.get(`estados/${sigla}/municipios/?orderBy=name`);
			if (response.status === 200) {
				const data = await response.data as CityTypes[];
				return data;
			}
		} catch (error) {

		}
	}
);

export const citySlice = createSlice({
	name: "cidades",
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder.addCase(cidadesFetch.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(cidadesFetch.rejected, (state, action) => {
			state.status = "rejected";
		});
		builder.addCase(cidadesFetch.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.cidades = action.payload;
		});
	},
});

export default citySlice.reducer;

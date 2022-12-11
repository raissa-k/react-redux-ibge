import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IBGE_API from "../../api/IBGE_API";
import type { CityInfoTypes } from "../../types";

interface InfoSliceType {
	info: CityInfoTypes;
	status: string | null;
}

const initialState: InfoSliceType = {
	info: {} as CityInfoTypes,
	status: "",
};

export const infoFetch = createAsyncThunk(
	"cidades/infoFetch",
	async (id: string) => {
		try {
			const response = await IBGE_API.get(`municipios/${id}/distritos?orderBy=nome`);
			if (response.status === 200) {
				const data = await response.data[0] as CityInfoTypes;
				return data;
			}
		} catch (error) {

		}
	}
);

export const infoSlice = createSlice({
	name: "info",
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder.addCase(infoFetch.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(infoFetch.rejected, (state, action) => {
			state.status = "rejected";
		});
		builder.addCase(infoFetch.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.info = action.payload;
		});
	},
});

export default infoSlice.reducer;

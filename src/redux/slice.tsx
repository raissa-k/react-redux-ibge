import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import IBGE_API from '../api/IBGE_API';
import { CityTypes } from '../types';

const fetchCities = createAsyncThunk (
	'cityInit',
	async (estadoSigla: string) => {
	  try {
		const response = await IBGE_API.get(`/estados/${estadoSigla}/municipios`);
		return response.data;
	  } catch (error) {
		throw new Error(error.message);
	  }
	} 	
  );

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: [] as CityTypes[],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // define reducers for the success and failure actions of the async thunk
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.cities = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { citySlice };
export default citySlice.reducer;
export { fetchCities }

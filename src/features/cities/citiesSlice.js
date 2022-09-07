import { createSlice } from '@reduxjs/toolkit';
import * as Forms from '../../constants/vars';
import universityData from '../../constants/universityData.json';
import { nanoid } from 'nanoid';


const initialState = {
  cities: universityData?.cities.map(city => ({
    text: city,
    relation: Forms.CITY_FORM,
    id: nanoid(),
  })),
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action) => {
      const newCity = {
        text: action.payload,
        id: nanoid(),
        relation: Forms.CITY_FORM,
      };

      if (
        !state.cities.some(
          city => city.text.toLowerCase() === newCity.text.toLowerCase()
        )
      ) {

        state.cities = [...state.cities, newCity];

      } else {
        alert(`${newCity.text} is already exist`);
      }
    },
    removeCity: (state, action) => {
        console.log('action: ', action);
       state.cities = state.cities.filter(el => el.id !== action.payload)
    }
  },
});

export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;

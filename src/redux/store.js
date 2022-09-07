import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from '../features/cities/citiesSlice';
import departmentsSlice from 'features/departments/departmentsSlice';
import tutorsSlice from 'features/tutors/tutorsSlice';

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
    departments: departmentsSlice,
    tutors: tutorsSlice,
  },
})
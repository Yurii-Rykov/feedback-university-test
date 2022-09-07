import { createSlice } from '@reduxjs/toolkit';
import universityData from '../../constants/universityData.json';



const initialState = {
  tutors:  universityData?.tutors,
}

export const tutorsSlice = createSlice ({
    name: 'departments',
    initialState,
    reducers: {
      addTeacher: (state, action) => {
        state.tutors = [...state.tutors, action.payload]
      }
    },
})



export const { addTeacher, } = tutorsSlice.actions

export default tutorsSlice.reducer
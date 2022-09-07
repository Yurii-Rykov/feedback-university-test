import { createSlice } from '@reduxjs/toolkit';
import * as Forms from '../../constants/vars';
import universityData from '../../constants/universityData.json';
import { nanoid } from 'nanoid';


const initialState = {
  departments:  universityData?.department.map(({ name }) => ({
        text: name,
        relation: Forms.DEPARTMENTS_FORM,
        id: nanoid(),
      })),
}

export const departmentsSlice = createSlice ({
    name: 'departments',
    initialState,
    reducers: {
        addDepartment: (state, action) => {
            const newDepartment = {
                text: action.payload,
                id: nanoid(),
                relation: Forms.DEPARTMENTS_FORM,
              };
          
              if (
                !state.departments.some(
                  department =>
                    department.text.toLowerCase() === newDepartment.text.toLowerCase()
                )
              ) {
                state.departments = [...state.departments, newDepartment];
              } else {
                alert(`${newDepartment.text} is already exist`);
              }
        },
        removeDepartment: (state, action) => {
            state.departments = state.departments.filter(el => el.id !== action.payload)
        }
    },
})

export const { addDepartment, removeDepartment } = departmentsSlice.actions

export default departmentsSlice.reducer
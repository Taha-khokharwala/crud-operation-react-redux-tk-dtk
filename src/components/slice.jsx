import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addDataType: (state, action) => {
      state.push(action.payload);
    },
    updateDataType: (state, action) => {
      const { email, password, index } = action.payload;
      state[index] = {email, password };
      state.pop()
    },
    deleteDataType: (state, action) => {
      const index = action.payload;
      state.splice(index , 1)
    },
  },
});

export const { addDataType, updateDataType, deleteDataType } = dataSlice.actions;
export default dataSlice.reducer;
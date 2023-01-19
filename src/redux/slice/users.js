import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  ],
  reducers: {
    getUser(state, action) {
      state = action.payload;
      return state;
    },
    addUser(state, action) {
      state.push(action.payload);
    },
    editUser(state, action) {
      state = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return state;
    },
    deleteUser(state, action) {
        state = state.filter((item) => item.id !== action.payload);
        return state;
    },
  },
});
export const { getUser , addUser , editUser , deleteUser} = users.actions;
export default users.reducer;

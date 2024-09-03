import { createSlice } from "@reduxjs/toolkit";
import { fetchProjectsAsync } from "./projectsAPI";

const initialState = {
  projects: [],
  selectedIndex: null,
  status: "idle",
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
  initialState,
  name: "projects",
  reducers: {
    setIndex:(state,action)=>{
      state.selectedIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
        state.error = null;

      })
      .addCase(fetchProjectsAsync.fulfilled, (state,action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.projects = action.payload.projects;
      })
      .addCase(fetchProjectsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { setIndex } = projectsSlice.actions;
export default projectsSlice.reducer;

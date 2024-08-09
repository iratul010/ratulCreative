import { createSlice } from "@reduxjs/toolkit";
import { fetchProjectsAsync } from "./projectsAPI";

const initialState = {
  projects: [],
  status: "idle",
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
  initialState,
  name: "projects",
  reducers: {},
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
        state.projects = action.payload;
      })
      .addCase(fetchProjectsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default projectsSlice.reducer;

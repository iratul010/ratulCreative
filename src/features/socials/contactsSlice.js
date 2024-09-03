import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsAsync } from "./contactsAPI";

const initialState = {
  contacts: [],
  status: "idle",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.contacts = action.payload.social_links;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default contactsSlice.reducer;

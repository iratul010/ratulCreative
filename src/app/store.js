import { configureStore } from "@reduxjs/toolkit";
import projectReducer from '../features/projects/projectsSlice'
import contactsReducer from '../features/socials/contactsSlice'
 const store = configureStore({
  reducer:{
    projects: projectReducer,
    contacts: contactsReducer,
  }
 })
 export default store;
 
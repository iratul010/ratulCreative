import { configureStore } from "@reduxjs/toolkit";
import projectReducer from '../features/projects/projectsSlice'
 const store = configureStore({
  reducer:{
    projects: projectReducer
  }
 })
 export default store;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjectsAsync = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("/public/data/projectsData.json");
   
    if (!response.ok) {
      throw new Error("failed to fetch projects");
    }

    const data = await response.json();

    return data;
  }
);

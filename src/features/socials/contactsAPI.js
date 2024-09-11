import { createAsyncThunk } from "@reduxjs/toolkit";

 export const fetchContactsAsync = createAsyncThunk(
  "contacts/fetchContacts",async()=>{
    const response = await fetch ('/src/localHostData/socialData/data.json');
     if(!response.ok){
      throw new Error('failed to fetch contacts')
     }
     const data = await response.json()
   
     return data 
  }
 )


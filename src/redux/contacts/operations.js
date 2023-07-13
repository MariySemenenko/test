import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
// console.log(data)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact, thunkAPI) => {
        try {
           const {data} = await axios.post('/contacts', contact) 
           return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);   
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
         const {data} = await axios.delete(`/contacts/${id}`)  
         return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
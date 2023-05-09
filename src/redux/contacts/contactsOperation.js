import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  token.set(persistToken);
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return err.message;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  token.set(persistToken);

  try {
    const { data, status } = await axios.post('/contacts', contact);
    if (status === 201) Notiflix.Notify.success(`Контакт додано у базу! ${'\n'} The contact was successfully created.`);
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return err.message;
  }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async (id, { rejectWithValue }, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  token.set(persistToken);
  console.log(persistToken);
  try {
    const { data, status } = await axios.patch(`/contacts/${id}`);
    if (status === 200) Notiflix.Notify.success('Контакт редаговано у базі. \n The contact was successfully updated.');
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.delete(`/contacts/${id}`);
    if (status === 200) Notiflix.Notify.success(`Контакт видалено з бази! \n  The contact was successfully deleted.`);
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});

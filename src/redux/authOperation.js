import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    // const { data } = await axios.get(``);
    // return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});

export const registerUser = createAsyncThunk('auth/registration', async (user, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.post('/users/signup', user);
    if (status === 201) Notiflix.Notify.success('Юзер успішно зареєстрований');
    token.set(data.token);
    return data;
  } catch (err) {
    Notiflix.Notify.failure('Щось пішло не так!!! Помилка: ' + err.message);
    return rejectWithValue(err.message);
  }
});

export const logInUser = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.post('/users/login', user);
    if (status === 200) Notiflix.Notify.success('Ви залогінились');
    token.set(data.token);
    return data;
  } catch (err) {
    Notiflix.Notify.failure('Щось пішло не так!!! Помилка: ' + err.message);
    return rejectWithValue(err.message);
  }
});

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    const { status } = await axios.post('/users/logout');
    if (status === 200) Notiflix.Notify.success('Ви розлогінились');
    token.unset();
  } catch (err) {
    Notiflix.Notify.failure('Щось пішло не так!!! Помилка: ' + err.message);
    return err.message;
  }
});

// export const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
//   try {
//     // const { data, status } = await axios.post(`${BASEURL}`, contact);
//     // if (status === 201) Notiflix.Notify.success('Контакт додано');
//     // return data;
//   } catch (err) {
//     Notiflix.Notify.failure(err.message);
//     return rejectWithValue(err.message);
//   }
// });

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue }) => {
//   try {
//     // const { data, status } = await axios.delete(`${BASEURL}/${id}`);
//     // if (status === 200) Notiflix.Notify.success('Контакт видалено з бази');
//     // return data;
//   } catch (err) {
//     Notiflix.Notify.failure(err.message);
//     return rejectWithValue(err.message);
//   }
// });

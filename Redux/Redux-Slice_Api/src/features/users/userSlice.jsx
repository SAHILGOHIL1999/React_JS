import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initalState = {
    user : [],
    loading : false,
    error: null
}

// API Calling

export const 
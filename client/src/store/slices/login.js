import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const loginData = createAsyncThunk("loginData", async (userData, {rejectWithValue}) => {
    try
    {
        const response = await axios.post('http://127.0.0.1:2000/login', userData)

        if (response.data.success === true)
        {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            return response.data
        } else if (response.data.success === false && response.data.message)
        {
            alert(response.data.message)
            return response.data
        } else if (response.data.message)
        {
            alert(response.data.message)
            return response.data
        }

    } catch (error)
    {
        alert("Something went wrong!")
        return rejectWithValue(error)
    }
})


const initialState = {
    formData: {},
    isLoading: false,
    data: null,
    error: false
}


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateFormData(state, action) {

            state.formData = {...state.formData, ...action.payload}

        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginData.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(loginData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(loginData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})


export const {updateFormData} = loginSlice.actions
export default loginSlice.reducer
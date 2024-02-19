import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const key = `b01bb3e1-64fa-47bc-a5f7-d2ff4799a618`

export const dictionaryData = createAsyncThunk("dictionaryData", async (word, {rejectWithValue}) => {
    try
    {
        const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${key}`)
        return response.json()

    } catch (error)
    {
        alert('Check you internet connection.')
        return rejectWithValue(error)
    }
})


const initialState = {
    input: null,
    data: null,
    isLoading: false,
    isError: false
}


const ddSlice = createSlice({
    name: 'dicData',
    initialState,
    reducers: {
        inputData: (state, action) => {
            state.input = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(dictionaryData.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(dictionaryData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(dictionaryData.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.data = action.payload
        })
    }
})

export const {inputData} = ddSlice.actions
export default ddSlice.reducer
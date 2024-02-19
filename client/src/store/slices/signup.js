import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const sendData = createAsyncThunk("sendData", async (inputs, {rejectWithValue}) => {

    try
    {
        const response = await fetch('http://127.0.0.1:2000/signup', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'Application/json'
            }
        })

        const data = await response.json()

        if (data && data.success)
        {
            localStorage.setItem("user", JSON.stringify(data.user))
            return data
        } else
        {
            if (data.success === false && data.message && data.error)
            {
                alert(data.message)
                console.log("-X")
                return data
            } else if (data?.success === false && data?.message)
            {
                alert(data.message)
                console.log("-Y")
                return data

            } else if (data.message)
            {
                console.log("-Z")
                alert(data.message)
                return data
            }
        }

    } catch (error)
    {
        alert("Something went wrong!")
        return rejectWithValue(error.message)
    }
})


const initialState = {
    data: null,
    isLoading: false,
    isError: false
}


const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(sendData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(sendData.rejected, (state, action) => {
            console.log("Error: ", action.payload)
            state.isError = true
        })
    }
})

export default signupSlice.reducer
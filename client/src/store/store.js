import {configureStore} from '@reduxjs/toolkit'
import signUp from './slices/signup'
import logIn from './slices/login'
import dicData from './slices/dictionaryData'

export const store = configureStore({
    reducer: {
        sign: signUp,
        login: logIn,
        dictionary: dicData
    }
})
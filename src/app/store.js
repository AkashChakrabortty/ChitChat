import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { allApi } from '../features/api/apiSlice';
const store = configureStore({
    reducer: {
       [allApi.reducerPath] : allApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allApi.middleware)
})
export default store;
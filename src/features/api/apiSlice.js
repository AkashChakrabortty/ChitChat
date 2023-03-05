import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const allApi = createApi({
    reducerPath: 'allApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),
    endpoints:(builder)=> ({
        storeUserInfo: builder.mutation({
            query: (data) => ({
                url: '/storeUserInfo',
                method: 'POST',
                body: data
            })
        })
    })


})

export const {useStoreUserInfoMutation} = allApi
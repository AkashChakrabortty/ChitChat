import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ['DeleteFriendReq','AcceptFriendReq','insertComment','insertChat','editProfileInfo'],
  endpoints: (builder) => ({
    getSingleUserInfo: builder.query({
      query: (data) => ({
        url: `getSingleUserInfo/${data.email}`,
      }),
      providesTags: ['editProfileInfo']
    }),
    getSingleUserFriendReq: builder.query({
        query: (data) => ({
          url: `request/${data.email}`,
        }),
        providesTags: ['DeleteFriendReq','AcceptFriendReq']
      }),
    getAllChitChatUsers: builder.query({
      query: (data) => ({
        url: `/getAllChitChatUsers`,
      }),
    }),
    getAllIndividualUserPosts: builder.query({
      query: (data) => ({
        url:  `getAllIndividualUserPosts/${data.email}`,
      }),
    }),
    getAllLikes: builder.query({
      query: (data) => ({
        url:  `getAllLikes/${data.email}`,
      }),
    }),
    getSearchUsers: builder.query({
      query: (data) => ({
        url:  `getSearchUsers/${data.name}`,
      }),
    }),
    getAllFriendsPosts: builder.query({
      query: (data) => ({
        url:  `/getAllFriendsPosts/${data.email}`,
      }),
    }),
    getAllFriends: builder.query({
      query: (data) => ({
        url:  `/getAllFriends/${data.email}`,
      }),
    }),
    getPostAllComments: builder.query({
      query: (data) => ({
        url:  `/getPostAllComments/${data.id}`,
      }),
      providesTags: ['insertComment']
    }),
    getAllChats: builder.query({
      query: (data) => ({
        url:  `/getAllChats/${data.id}`,
      }),
      providesTags: ['insertChat']
    }),
    storeUserInfo: builder.mutation({
      query: (data) => ({
        url: "/storeUserInfo",
        method: "POST",
        body: data,
      }),
    }),
    sentFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/addFriend",
        method: "POST",
        body: data,
      }),
    }),
    insertLike: builder.mutation({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
    }),
    insertComments: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['insertComment']
    }),
    editProfileInfo: builder.mutation({
      query: (data) => ({
        url: `/profileInfoEdit`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['editProfileInfo']
    }),
    insertChats: builder.mutation({
      query: (data) => ({
        url: "/insertChats",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['insertChat']
    }),
    friendRequestAccept: builder.mutation({
      query: (data) => ({
        url: "/reqAccepted",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['AcceptFriendReq']
    }),
    friendRequestDelete: builder.mutation({
      query: (data) => ({
        url: `/reqDelete/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['DeleteFriendReq']
    }),

  }),
});

export const {
  useStoreUserInfoMutation,
  useGetSingleUserInfoQuery,
  useGetAllChitChatUsersQuery,
  useGetAllIndividualUserPostsQuery,
  useGetSingleUserFriendReqQuery,
  useFriendRequestDeleteMutation,
  useSentFriendRequestMutation,
  useFriendRequestAcceptMutation,
  useGetAllFriendsPostsQuery,
  useInsertLikeMutation,
  useGetAllLikesQuery,
  useGetSearchUsersQuery,
  useInsertCommentsMutation,
  useGetPostAllCommentsQuery,
  useGetAllFriendsQuery,
  useInsertChatsMutation,
  useGetAllChatsQuery,
  useEditProfileInfoMutation
} = allApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648f2fb475a96b664444ce4d.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query(contactData) {
        return {
          url: `/contacts`,
          method: 'POST',
          body: contactData,
        };
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

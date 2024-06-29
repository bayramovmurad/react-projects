import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const todoUrl = "http://localhost:3000"

export const todoApiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({ baseUrl: todoUrl }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
            providesTags:['Todos'],
            transformResponse: (response) =>  response.sort((a,b) => b.id-a.id)
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags:['Todos']
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...todo }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodo :builder.mutation({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:["Todos"]
        })
    })
});

export const {useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation} = todoApiSlice;
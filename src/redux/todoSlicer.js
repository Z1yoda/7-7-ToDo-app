import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter(el => {
                return el.id != action.payload
            }
            )
        },
        updateToDo: (state, action) => {
            state.todos = state.todos.map(el => {
                if (el.id == action.payload.id) {
                    el.title = action.payload.title
                }
                return el
            })
        },
        statusUpdate: (state, action) => {
            state.todos = state.todos.map(el => {
                if (el.id == action.payload.id) {
                    el.status = action.payload.status
                }
                return el
            })
        }
    }

})

export const { addTodo, removeToDo, updateToDo, statusUpdate } = todoSlice.actions;
export default todoSlice.reducer
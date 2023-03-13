import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, showCounter: false},
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuthenticated: false},
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

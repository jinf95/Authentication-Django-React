import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user';

export const store = configureStore({
    reducer: {
        user: useReducer,
    },
    devTools: import.meta.NODE_ENV !== 'production',
});
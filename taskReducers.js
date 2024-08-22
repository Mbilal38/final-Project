// src/reducers/taskReducers.js
import { GET_TASKS, CREATE_TASK } from './taskConstants';

export const taskReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, tasks: action.payload };
        case CREATE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
};

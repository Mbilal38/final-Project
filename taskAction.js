// taskAction.js
import API from './api';
import { GET_TASKS, CREATE_TASK } from './taskConstants';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await API.get('/tasks');
        dispatch({ type: GET_TASKS, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const createTask = (taskData) => async (dispatch) => {
    try {
        const { data } = await API.post('/tasks', taskData);
        dispatch({ type: CREATE_TASK, payload: data });
    } catch (error) {
        console.error(error);
    }
};

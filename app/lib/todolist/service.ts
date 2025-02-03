import api from '@/app/lib/todolist/axiosConfig';
import { ITask } from './definitions';

export const fetchAllList = async () => {
    try {
        const response = await api.get('/todo')
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const postTask = async (
    data: Omit<ITask, 'id' | 'done_at' | 'created_at'>
) => {
    try {
        const response = await api.post('/todo/create', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTaskById = async (id: string) => {
    try {
        const response = await api.get(`/todo/getuser/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchTask = async (
    data: Omit<ITask, 'done_at' | 'created_at'>
) => {
    try {
        const response = await api.patch(`/todo/update/${data.id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTaskById = async (id: string) => {
    try {
        await api.delete(`/todo/delete/${id}`);
        console.log('Success');
    } catch (error) {
        console.log(error, 'abc');
    }
};

export const updateTaskStatus = async (id: string) => {
    try {
        const response = await api.patch(`/todo/update-status/${id}`, {});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
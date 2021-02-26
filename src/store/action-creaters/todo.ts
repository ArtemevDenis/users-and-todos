import {Dispatch} from "react";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`, {method: 'GET'})
            const data = await res.json()
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке'})

        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}
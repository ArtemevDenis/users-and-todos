import {UserAction, UserActionTypes} from "../../types/users";
import {Dispatch} from "react";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
            const data = await res.json()
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке'})

        }
    }
}
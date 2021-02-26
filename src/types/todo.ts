import {IPagination} from "./IPagination";
import {INetWork} from "./INetWork";


interface Todo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface ITodoState extends IPagination, INetWork {
    todos: Todo[]
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodo {
    type: TodoActionTypes;
    payload?: any | any[];
}

interface IFetchTodoAction extends IFetchTodo {
    type: TodoActionTypes.FETCH_TODOS;
}

interface IFetchTodoSuccessAction extends IFetchTodo {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];

}

interface IFetchTodoErrorAction extends IFetchTodo {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface ISetTodoPage extends IFetchTodo {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = IFetchTodoAction | IFetchTodoSuccessAction | IFetchTodoErrorAction | ISetTodoPage
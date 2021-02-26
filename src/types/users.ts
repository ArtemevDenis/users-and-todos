import {INetWork} from "./INetWork";

interface User {
    "id": number,
    "name":  string,
    "username":  string,
    "email": string,
    "address": {
        "street":  string,
        "suite":  string,
        "city":  string,
        "zipcode":  string,
        "geo": {
            "lat": string,
            "lng":  string,
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase":  string,
        "bs":  string,
    }
}

export interface IUserState extends INetWork {
    users: User[]
}

interface IUserAction {
    type: string
    payload?: any;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUserAction extends IUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface IFetchUserSuccessAction extends IUserAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface IFetchUserErrorAction extends IUserAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}


export type UserAction = IFetchUserErrorAction | IFetchUserSuccessAction | IFetchUserAction
import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import {setTodoPage} from "../store/action-creaters/todo";

const TodoList = () => {
    const {page, error, todos, loading, limit} = useTypedSelector(state => state.todo)
    const pages = [1, 2, 3, 4, 5]
    const {fetchTodo, setTodoPage} = useActions()

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page])

    if (loading)
        return <h1>Идет загрузка</h1>

    if (error)
        return <h1>{error}</h1>


    return (
        <div>
            {todos.map(todo => <div><span>{todo.id}</span> - <span>{todo.title}</span></div>)}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div
                        style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                        onClick={() =>
                            setTodoPage(p)}>
                        {p}
                    </div>)
                }
            </div>
        </div>
    );
};

export default TodoList;
import React from "react";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
    return (
        <div className="todo">
            <input
                className="custom-checkbox"
                id={`${todo.id}input`}
                type="checkbox"
                checked={todo.complete}
                onChange={() => completeTodo(todo.id)}
            />
            <label className="cbx" htmlFor={`${todo.id}input`}></label>
            <div
                className={
                    todo.complete ? "todo-text completed-todo" : "todo-text"
                }
            >
                {todo.name}
            </div>

            <button className="btn" onClick={() => removeTodo(todo.id)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );
};

export { TodoItem };

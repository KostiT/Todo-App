import React from "react";
import { TodoItem } from "../TodoItem";

const Todos = ({ todos, completeTodo, removeTodo }) => {
    const todoList = todos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
        />
    ));

    return <div className="todo-list">{todoList}</div>;
};

export { Todos };

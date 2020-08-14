import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Bar } from "../Bar";
import { Todos } from "../Todos";

import { initialData } from "../../todos";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState(initialData);

    const addTodo = (name) => {
        const newTodos = [{ id: uuid(), complete: false, name }, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <Bar addTodo={addTodo} />
            <Todos
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
};

export { App };

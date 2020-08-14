import React from "react";

const Bar = ({ addTodo }) => {
    const [name, setName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        addTodo(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={name}
                placeholder="Add new todo"
                onChange={(e) => setName(e.target.value)}
            />
        </form>
    );
};

export { Bar };

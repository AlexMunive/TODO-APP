import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="border-b-gray-4000 flex gap-4 border-b"
            >
                <button
                    className={`${
                        completed
                            ? "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "nline-block h-5 w-5 flex-none rounded-full border-2"
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600  dark:text-gray-400 ${
                        completed && "line-through"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);

export default TodoItem;

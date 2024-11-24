import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    // <div
    //   className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
    //     todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    //   }`}
    // >
    //   <input
    //     type="checkbox"
    //     className="cursor-pointer"
    //     checked={todo.completed}
    //     onChange={toggleCompleted}
    //   />
    //   <input
    //     type="text"
    //     className={`border outline-none w-full bg-transparent rounded-lg ${
    //       isTodoEditable ? "border-black/10 px-2" : "border-transparent"
    //     } ${todo.completed ? "line-through" : ""}`}
    //     value={todoMsg}
    //     onChange={(e) => setTodoMsg(e.target.value)}
    //     readOnly={!isTodoEditable}
    //   />
    //   {/* Edit, Save Button */}
    //   <button
    //     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
    //     onClick={() => {
    //       if (todo.completed) return;

    //       if (isTodoEditable) {
    //         editTodo();
    //       } else setIsTodoEditable((prev) => !prev);
    //     }}
    //     disabled={todo.completed}
    //   >
    //     {isTodoEditable ? "📁" : "✏️"}
    //   </button>
    //   {/* Delete Todo Button */}
    //   <button
    //     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
    //     onClick={() => deleteTodo(todo.id)}
    //   >
    //     ❌
    //   </button>
    // </div>
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md gap-4 transition ${
        todo.completed
          ? "bg-green-100 border-green-300"
          : "bg-purple-100 border-purple-300"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 text-green-600 cursor-pointer focus:ring focus:ring-offset-2 focus:ring-green-400"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`flex-1 px-3 py-1 text-sm rounded-lg outline-none ${
          isTodoEditable
            ? "border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-300"
            : "border-none bg-transparent"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit/Save Button */}
      <button
        className={`px-3 py-1 text-sm font-semibold rounded-lg ${
          isTodoEditable
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-yellow-500 text-white hover:bg-yellow-600"
        }`}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      {/* Delete Button */}
      <button
        className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

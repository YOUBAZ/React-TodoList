import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", done: false});
  function handleSubmit(e) {
    // prevent the page from reload when I click on submit
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({name: e.target.value, done: false})}
        value={todo.name}
        placeholder="Enter todo Item ..."
        type="text"
      />
      <button className={styles.modernButton} type="submit">Add</button>
    </form>
  );
}

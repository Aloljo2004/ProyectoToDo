import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#0028DB");

  const colors = ["#0028DB", "#327DFF", "#00FFFF", "#FFFFFF"];

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, color);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {colors.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button type="submit">Añadir</button>
    </form>
  );
}

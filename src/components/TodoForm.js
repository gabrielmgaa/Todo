import { useState } from "react";

function TodoForm(props) {

  const [text , setText] = useState("");

  function handleTodoChange(event) {
    let textValue = event.target.value;
    setText(textValue);
    props.apresent(textValue);
  }

  function addItemTodo(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text)
      setText("");
    }
  }

  return (
    <form>
      <input onChange={handleTodoChange} type="text" value={text}></input>
      <button onClick={addItemTodo}>Add</button>
    </form>
  );

}

export default TodoForm;


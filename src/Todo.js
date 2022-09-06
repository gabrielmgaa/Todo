import { React, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item.js";
import Modal from "./components/Modal.js";
import Apresent from "./components/Apresent";
import List from "./components/List.js";
import "./Todo.css";

function Todo() {

  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [text2, setText2] = useState("");

  useEffect(() => {

    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    if (savedItems.length > 0) {
      setItems(savedItems);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items));
  }, [items])

  function onAddItem(text) {

    let item = new Item(text);

    setItems([...items, item]);
    onHideModal();
    setText2("");
  }

  function onDone(item) {

    let updatedItems = items.map(it => {

      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    })

    setItems(updatedItems);

  }

  function apresent(text) {
    setText2(text);
  }

  function deleteItem(item) {

    let filteredItems = items.filter(it => it.id !== item);
    setItems(filteredItems);
  }

  function onHideModal() {
    setShowModal(false);
  }



  return (
    <div className="container">
      <header><h1>Todo</h1><button className="add-btn" onClick={() => { setShowModal(true) }}>+</button></header>
      {/* <TodoForm onAddItem={onAddItem} apresent={apresent} /> */}
      <Apresent text={text2} />
      <List deleteItem={deleteItem} onDone={onDone} items={items} />
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem} apresent={apresent} /></Modal>
    </div>
  );

}

export default Todo;
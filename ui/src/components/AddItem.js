import React from "react";
import axios from "axios";
import ModalTodo from "./ModalTodo";

function AddItem(props) {

  const onAddTodo = () => {
    props.setIsAddActive(!props.isAddActive);
    props.setTodo({ title: "", description: "" });
  };

  const onSaveNewItem = async () => {
    await axios.post("http://localhost:5000/api/create-todo", {
      title: props.todo.title,
      description: props.todo.description,
      status: false
    });
    props.getData();
    props.setIsAddActive(false);
  };

  return props.isAddActive ? (  
    <ModalTodo
      modalTitle="Add Todo"
      onCancel={() => props.setIsAddActive(false)}
      onSave={onSaveNewItem}
      todo={props.todo}
      setTodo={props.setTodo}
    />
  ) : (
    <button className="btn-action" onClick={onAddTodo}>
      Add to do item
    </button>
  );
}

export default AddItem;

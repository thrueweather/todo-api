import React from "react";
import axios from "axios";
import ModalTodo from "./ModalTodo";

function EditItem(props) {

  const onSaveEditItem = async () => {
    await axios.post(
      `http://localhost:5000/api/update-todo/${props.todo._id}`,
      {
        title: props.todo.title,
        description: props.todo.description,
        status: props.todo.status
      }
    );
    props.getData();
    props.setIsEditActive(false);
  };

  return props.isEditActive ? (
    <ModalTodo
      modalTitle="Edit Todo"
      onSave={onSaveEditItem}
      onCancel={() => props.setIsEditActive(false)}
      todo={props.todo}
      setTodo={props.setTodo}
    />
  ) : null;
}

export default EditItem;

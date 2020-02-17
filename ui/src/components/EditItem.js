import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

function EditItem(props) {
  const { formState } = useForm({
    mode: "onChange"
  });

  const onSaveEditItem = async () => {
    if (formState.isValid) {
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
    }
  };

  return props.isEditActive ? (
    <Modal
      onSave={onSaveEditItem}
      onCancel={() => props.setIsEditActive(false)}
      todo={props.todo}
      setTodo={props.setTodo}
    />
  ) : null;
}

export default EditItem;

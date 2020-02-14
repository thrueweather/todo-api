import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function AddItem(props) {
  const onCancelAddItem = () => {
    props.setIsAddActive(false);
  };

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const onSaveNewItem = async () => {
    if (formState.isValid) {
      await axios.post("http://localhost:5000/api/create-todo", {
        title: props.todo.title,
        description: props.todo.description,
        status: false
      });
      props.getData();
      props.setTodo({ title: "", description: "" });
      props.setIsAddActive(false);
    }
  };

  const handleAddTodo = key => e => {
    props.setTodo({ ...props.todo, [key]: e.target.value });
  };

  if (props.isAddActive) {
    return (
      <div className="list-add-item-info modal add-modal">
        <form onSubmit={handleSubmit(onSaveNewItem)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={props.todo.title}
            ref={register({
              required: true
            })}
            name="title"
            id="title"
            onChange={handleAddTodo("title")}
          />
          {errors.title && "invalid field"}

          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={props.todo.description}
            ref={register({ required: true })}
            name="description"
            id="description"
            onChange={handleAddTodo("description")}
          />
          {errors.description && "invalid field"}

          <button onClick={onCancelAddItem}>Cancel</button>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <button
        className="btn-action"
        onClick={() => props.setIsAddActive(!props.isAddActive)}
      >
        Add to do item
      </button>
    );
  }
}

export default AddItem;

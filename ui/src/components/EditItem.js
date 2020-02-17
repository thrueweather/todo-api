import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function EditItem(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const onSaveEditItem = async () => {
    if(formState.isValid){
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

  const handleChangeTodo = key => e => {
    props.setTodo({ ...props.todo, [key]: e.target.value });
  };

  if (props.isEditActive)
    return (
      <div className="modal edit-modal">
        <form onSubmit={handleSubmit(onSaveEditItem)}>
          <h3>Edit Item</h3>
          <label htmlFor="title-edit">Title</label>
          <input
            type="text"
            name="titleEdit"
            id="title-edit"           
            onChange={handleChangeTodo("title")}
            ref={register({
              required: true,
              value: props.todo.title
            })}
          />
          {errors.titleEdit && "invalid field"}

          <label htmlFor="description-edit">Description</label>
          <input
            type="text"
            name="descriptionEdit"            
            onChange={handleChangeTodo("description")}
            id="description-edit"
            ref={register({
              required: true,
              value: props.todo.description
            })}
          />
          {errors.descriptionEdit && "invalid field"}

          <div className="btn-group-secondary">
            <button className="btn-secondary" onClick={onSaveEditItem}>
              Save
            </button>
            <button
              className="btn-secondary"
              onClick={() => props.setIsEditActive(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  else return null;
}

export default EditItem;

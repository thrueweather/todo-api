import React from "react";
import axios from "axios";

function EditItem(props) {
  const onSaveEditItem = async () => {
    await axios.post(
      `http://localhost:5000/api/update-todo/${props.todo._id}`,
      {
        title: props.todo.title,
        description: props.todo.description
      }
    );
    props.getData();

    props.setIsEditActive(false);
  };

  const handleChangeTodo = key => e => {
    props.setTodo({ ...props.todo, [key]: e.target.value });
  };

  if (props.isEditActive)
    return (
      <div className="modal edit-modal">
        <h3>Edit Item</h3>
        <label htmlFor="title-edit">Title</label>
        <input
          type="text"
          name="title-edit"
          id="title-edit"
          value={props.todo.title}
          onChange={handleChangeTodo("title")}
        />
        <label htmlFor="description-edit">Description</label>
        <input
          type="text"
          name="description-edit"
          value={props.todo.description}
          onChange={handleChangeTodo("description")}
          id="description-edit"
        />
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
      </div>
    );
  else return null;
}

export default EditItem;

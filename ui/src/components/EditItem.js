import React from "react";
import axios from 'axios';

function EditItem(props) {
  const onSaveEditItem = async () => {
    await axios.post('http://localhost:5000/api/update-todo/' + props.currentIndex, {
      title: props.newTitle,
      description: props.newDescription,
    })
    props.getData();

    props.setIsEditActive(false);
    props.setCurrentIndex(null);
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
          value={props.newTitle}
          onChange={e => props.setNewTitle(e.target.value)}
        />
        <label htmlFor="description-edit">Description</label>
        <input
          type="text"
          name="description-edit"
          value={props.newDescription}
          onChange={e => props.setNewDescription(e.target.value)}
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

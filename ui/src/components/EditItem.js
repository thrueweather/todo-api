import React from "react";

function EditItem(props) {
  const onSaveEditItem = () => {
    let arr = [...props.list];
    let index = props.currentIndex;
    arr[index].title = props.newTitle;
    arr[index].description = props.newDescription;

    props.setList(arr);
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

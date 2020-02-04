import React from "react";

function ItemList(props) {
  const onEditItem = (item, index) => {
    props.setIsEditActive(true);
    props.setNewTitle(item.title);
    props.setNewDescription(item.description);
    props.setCurrentIndex(index);
  };

  const onRemoveItem = index => {
    let arr = [...props.list];
    arr.splice(index, 1);

    props.setList(arr);
  };

  const onDoneItem = index => {
    let arr = [...props.list];
    arr[index].isDone = !props.list[index].isDone;

    props.setList(arr);
  };

  return (
    <div className={`list-item ${!props.isDone ? "not-done" : "done"}`}>
      <div className="list-info">
        <h4 className="list-item-title">{props.item.title}</h4>
        <p>{props.item.description}</p>
      </div>
      <div className="btn-group">
        <button onClick={() => onEditItem(props.item, props.index)}>
          Edit
        </button>
        <button onClick={() => onRemoveItem(props.index)}>Remove</button>
        <button onClick={() => onDoneItem(props.index)}>Done</button>
      </div>
    </div>
  );
}

export default ItemList;

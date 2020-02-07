import React from "react";

function ItemList(props) {
  const onEditItem = (item) => {
    props.setIsEditActive(true);
    props.setTodo(item)
    // props.setNewTitle(item.title);
    // props.setNewDescription(item.description);
  };

  const onRemoveItem = index => {
    let arr = [...props.list];
    arr.splice(index, 1);

    props.setList(arr);
  };

  const onDoneItem = index => {
    let arr = [...props.list];
    arr[index].status = !props.list[index].status;

    props.setList(arr);
  };

  return (
    <div className={`list-item ${!props.status ? "not-done" : "done"}`}>
      <div className="list-info">
        <h4 className="list-item-title">{props.item.title}</h4>
        <p>{props.item.description}</p>
      </div>
      <div className="btn-group">
        <button onClick={() => onEditItem(props.item)}>
          Edit
        </button>
        <button onClick={() => onRemoveItem(props.index)}>Remove</button>
        <button onClick={() => onDoneItem(props.index)}>Done</button>
      </div>
    </div>
  );
}

export default ItemList;

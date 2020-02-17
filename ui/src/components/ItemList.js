import React from "react";
import axios from "axios";

function ItemList(props) {
  const onEditItem = item => {
    props.setIsEditActive(true);
    props.setTodo(item);
    // props.setTodo({ title: item.title, description: item.description});
  };

  const onRemoveItem = async item => {
    await axios.post(`http://localhost:5000/api/delete-todo/${item._id}`);
    props.getData();
  };

  const onDoneItem = async item => {
    await axios.post(`http://localhost:5000/api/update-todo/${item._id}`, {
      title: "from NEW",
      status: !item.status
    });
    props.getData();
  };

  return (
    <div className={`list-item ${!props.status ? "not-done" : "done"}`}>
      <div className="list-info">
        <h4 className="list-item-title">{props.item.title}</h4>
        <p>{props.item.description}</p>
      </div>
      <div className="btn-group">
        <button onClick={() => onEditItem(props.item)}>Edit</button>
        <button onClick={() => onRemoveItem(props.item)}>Remove</button>
        <button onClick={() => onDoneItem(props.item)}>Done</button>
      </div>
    </div>
  );
}

export default ItemList;

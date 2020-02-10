import React from "react";
import ItemList from "./ItemList";

function ListItems(props) {
  return props.list
    .filter(
      item =>
        (props.filterValue === "all" ||
          (props.filterValue == "done" && item.status) ||
          (props.filterValue == "notDone" && !item.status)) &&
        (item.title.indexOf(props.searchValue) != -1 ||
          item.description.indexOf(props.searchValue) != -1 ||
          props.searchValue == "")
    )
    .map(item => {
      return (
        <ItemList
          key={item._id}
          item={item}
          index={item._id}
          status={item.status}
          setIsEditActive={props.setIsEditActive}
          setTodo={props.setTodo}
          setList={props.setList}
          list={props.list}
          getData={props.getData}
        />
      );
    });
}

export default ListItems;

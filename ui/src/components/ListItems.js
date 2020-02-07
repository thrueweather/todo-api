import React from "react";
import ItemList from "./ItemList";

function ListItems(props) {
  return props.list.map((item) => {
    if (
      item.title.indexOf(props.searchValue) != -1 ||
      item.description.indexOf(props.searchValue) != -1 ||
      props.searchValue == ""
    ) {
      if (
        props.filterValue == "all" ||
        (props.filterValue == "done" && item.status) ||
        (props.filterValue == "notDone" && !item.status)
      ) {
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
          />
        );
      }
    }
  });
}

export default ListItems;

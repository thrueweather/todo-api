import React from "react";
import ItemList from "./ItemList";

function ListItems(props) {
  return props.list.map((item, index) => {
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
            key={index}
            item={item}
            index={index}
            status={item.status}
            setIsEditActive={props.setIsEditActive}
            setNewTitle={props.setNewTitle}
            setNewDescription={props.setNewDescription}
            setCurrentIndex={props.setCurrentIndex}
            setList={props.setList}
            list={props.list}
          />
        );
      }
    }
  });
}

export default ListItems;

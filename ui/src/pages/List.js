import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Filter from "../components/Filter";
import ListItems from "../components/ListItems";
import axios from "axios";
import "../scss/list.scss";

function List() {
  const [list, setList] = useState([
    {
      title: "test",
      description: "test",
      isDone: false
    },
    {
      title: "test2",
      description: "test2",
      isDone: false
    },
    {
      title: "test3",
      description: "test3",
      isDone: false
    },
    {
      title: "test4",
      description: "test4",
      isDone: false
    }
  ]);

  const [isAddActive, setIsAddActive] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditActive, setIsEditActive] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // axios.post('http://localhost:5000/api/create-todo', {
    //        title: 'title',
    //         description: 'description',
    //         isDone: false
    // })
    axios.post("http://localhost:5000/api/remove-all-todos");
    axios.get("http://localhost:5000/api/todo-list").then(response => {
      const newList = response.data;
      setList(newList);
      console.log(list);
    });
  });

  return (
    <div className={`list ${isEditActive ? "has_modal" : ""}`}>
      <div className="list-header">
        {/* <Filter setFilterValue={setFilterValue} />
        <Search setSearchValue={setSearchValue} /> */}
      </div>

      {/* <ListItems
        searchValue={searchValue}
        filterValue={filterValue}
        setIsEditActive={setIsEditActive}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
        setCurrentIndex={setCurrentIndex}
        setList={setList}
        list={list}
      /> */}

      {/* <AddItem
        isAddActive={isAddActive}
        setIsAddActive={setIsAddActive}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        setIsAddActive={setIsAddActive}
        list={list}
        setList={setList}
      /> */}

      {/* <EditItem
        isEditActive={isEditActive}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        list={list}
        setList={setList}
        setIsEditActive={setIsEditActive}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      /> */}
    </div>
  );
}

export default List;

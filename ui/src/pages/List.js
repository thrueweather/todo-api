import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Filter from "../components/Filter";
import ListItems from "../components/ListItems";
import axios from "axios";
import "../scss/list.scss";

function List() {
  const [list, setList] = useState(null);

  const [isAddActive, setIsAddActive] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditActive, setIsEditActive] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/todo-list");  
    const newList = response.data;
    console.log(newList);
    setList(newList);
  };

  const createToDo = async () =>
    await axios.post("http://localhost:5000/api/create-todo", {
      title: "title",
      description: "description",
      status: false
  });

  return (
    <div className={`list ${isEditActive ? "has_modal" : ""}`}>
      <div className="list-header">
        <Filter setFilterValue={setFilterValue} />
        <Search setSearchValue={setSearchValue} />
      </div>
      
      {list !== null ?
        <ListItems
          searchValue={searchValue}
          filterValue={filterValue}
          setIsEditActive={setIsEditActive}
          setNewTitle={setNewTitle}
          setNewDescription={setNewDescription}
          setCurrentIndex={setCurrentIndex}
          setList={setList}
          list={list}
        />
        : null
      }
     

      <AddItem
        isAddActive={isAddActive}
        setIsAddActive={setIsAddActive}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        setIsAddActive={setIsAddActive}
        list={list}
        setList={setList}
        getData={getData}
      />

      <EditItem
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
        getData={getData}
      />
    </div>
  );
}

export default List;

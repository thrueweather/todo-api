import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Filter from "../components/Filter";
import ListItems from "../components/ListItems";
import axios from "axios";
import "../scss/list.scss";
import "antd/dist/antd.css";

function List() {
  const [list, setList] = useState(null);
  const [isAddActive, setIsAddActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [todo, setTodo] = useState({ title: '', description: ''})
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // removeAll();
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/todo-list");
    const newList = response.data;
    setList(newList);
  };

  const createToDo = async () =>
    await axios.post("http://localhost:5000/api/create-todo", {
      title: "title",
      description: "description",
      status: false
  });

  const removeAll = async () => await axios.post('http://localhost:5000/api/remove-all-todos');

  // console.log(list);
  return (   
    <div className={`list ${isEditActive ? "has_modal" : ""}`}>
      <div className="list-header">
        <Filter setFilterValue={setFilterValue} />
        <Search setSearchValue={setSearchValue} />
      </div>

      {list !== null ? (
        <ListItems
          searchValue={searchValue}
          filterValue={filterValue}
          setIsEditActive={setIsEditActive}
          setTodo={setTodo}
          setList={setList}
          list={list}
          todo={todo}
          getData={getData}
        />
      ) : null}

      <AddItem
        isAddActive={isAddActive}
        setIsAddActive={setIsAddActive}
        list={list}
        setList={setList}
        todo={todo}
        setTodo={setTodo}
        getData={getData}
      />

      <EditItem
        isEditActive={isEditActive}
        todo={todo}
        setTodo={setTodo}
        list={list}
        setList={setList}
        setIsEditActive={setIsEditActive}
        getData={getData}
      />
    </div>
  );
}

export default List;

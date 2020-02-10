import React from "react";
import axios from "axios";
import { useForm, ErrorMessage } from "react-hook-form";
// import { Formik } from 'formik';

function AddItem(props) {
  const onCancelAddItem = () => {
    props.setIsAddActive(false);
  };

  const { register, handleSubmit, errors } = useForm();

  const onSaveNewItem = async values => {
    console.log(errors);
    // await axios.post("http://localhost:5000/api/create-todo", {
    //   title: props.todo.title,
    //   description: props.todo.description,
    //   status: false
    // });
    // props.getData();
    // props.setIsAddActive(false);
  };

  if (props.isAddActive) {
    return (
      <div className="list-add-item-info modal add-modal">
        <form onSubmit={handleSubmit(onSaveNewItem)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            // value={props.todo.title}
            ref={register({
              required: true,
              max: 100,
              min: 1,
              pattern: /^\S+@\S+$/i
            })}
            name="title"
            id="title"
          />
          <ErrorMessage
            errors={errors}
            name="title"
            message="This is required"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            // value={props.todo.description}
            ref={register({
              required: true,
              max: 500,
              min: 1,
              pattern: /^\S+@\S+$/i
            })}
            name="description"
            id="description"
          />
          <ErrorMessage
            errors={errors}
            name="description"
            message="This is required"
          />
          <button onClick={onCancelAddItem}>Cancel</button>
          <button type="submit" onClick={onSaveNewItem}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <button
        className="btn-action"
        onClick={() => props.setIsAddActive(!props.isAddActive)}
      >
        Add to do item
      </button>
    );
  }
}

export default AddItem;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function AddItem() {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder="Description" name="Description" ref={register({ required: true, max: 500, min: 1, pattern: /^\S+@\S+$/i })} />
//             <input type="text" placeholder="Title" name="Title" ref={register({ required: true, max: 100, min: 1 })} />

//             <input type="submit" />
//         </form>
//     );
// }

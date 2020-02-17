import React from 'react';
import { useForm } from 'react-hook-form';

function Modal(props) {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {title: props.todo.title,
                        description: props.todo.description}
    });

    const handleChangeTodo = key => e => {
        props.setTodo({ ...props.todo, [key]: e.target.value });
    };

    return (
        <div className="list-add-item-info modal add-modal">
            <form onSubmit={handleSubmit(props.onSave)}>
                <label>Title </label>
                <input
                    type="text"
                    ref={register({
                        required: true,
                        value: props.todo.title,
                    })}
                    name="title"
                    onChange={handleChangeTodo("title")}
                />
                {errors.title && "invalid field"}
               
                <label>Description</label>
                <input
                    type="text"
                    ref={register({
                        required: true,
                        value: props.todo.description
                    })}
                    name="description"
                    onChange={handleChangeTodo("description")}
                />
                {errors.description && "invalid field"}
                
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default Modal

import React from 'react';
import axios from "axios";

function AddItem(props) {

    const onCancelAddItem = () => {
        props.setIsAddActive(false);
        // props.setNewTitle('');
        // props.setNewDescription('')
    }

    const onSaveNewItem = async () => { 
        await axios.post("http://localhost:5000/api/create-todo", {
            title: props.newTitle,
            description: props.newDescription,
            status: false
        });
        props.getData();

        props.setIsAddActive(false);
        // props.setNewTitle(''); 
        // props.setNewDescription('');      
    }              

    if(props.isAddActive){
        return ( <div className="list-add-item-info modal add-modal">
            <label htmlFor="title">Title</label>
            <input type="text" value={props.newTitle}  name="title" id="title"/>
            <label htmlFor="description">Description</label>
            <input type="text" value={props.newDescription} name="description" id="description"/>
            <button onClick={onCancelAddItem}>Cancel</button>
            <button onClick={onSaveNewItem}>Save</button>
        </div>  ) 
    }
    else{
        return ( <button className="btn-action" onClick={() => props.setIsAddActive(!props.isAddActive)}>Add to do item</button>)
    }
}

export default AddItem

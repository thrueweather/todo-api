import React from 'react';

function AddItem(props) {

    const onCancelAddItem = () => {
        props.setIsAddActive(false);
        props.setNewTitle('');
        props.setNewDescription('')
    }

    const onSaveNewItem = () => { 
        if(props.newTitle.length > 0 && props.newDescription.length){
            const arr = [...props.list];
            
            let newItem = {
                title: props.newTitle,
                description: props.newDescription,
                isDone: false
            }
            arr.push(newItem)

            props.setIsAddActive(false);
            props.setList(arr);
            props.setNewTitle('');
            props.setNewDescription('')
        }
    } 

    if(props.isAddActive){
        return ( <div  className="list-add-item-info modal add-modal">
            <label htmlFor="title">Title</label>
            <input type="text" value={props.newTitle} onChange={e => props.setNewTitle(e.target.value)} name="title" id="title"/>
            <label htmlFor="description">Description</label>
            <input type="text" value={props.newDescription} onChange={e => props.setNewDescription(e.target.value)} name="description" id="description"/>
            <button onClick={onCancelAddItem}>Cancel</button>
            <button onClick={onSaveNewItem}>Save</button>
        </div>  ) 
    }
    else{
        return ( <button className="btn-action" onClick={() => props.setIsAddActive(!props.isAddActive)}>Add to do item</button>)
    }
}

export default AddItem

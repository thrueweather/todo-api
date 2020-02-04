import React from 'react'

function Filter(props) {
    return (
        <select name="filter" id="filter" onChange={(e) => props.setFilterValue(e.target.value)}>
            <option value='all'>all</option>
            <option value='done'>done</option>
            <option value='notDone'>not done</option>
        </select>
    )
}

export default Filter

export const addTodo = (id, title, description) => ({
  type: "ADD_TODD",
  id,
  title,
  description
});

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    DONE: 'DONE',
    ACTIVE: 'ACTIVE'
}

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
})

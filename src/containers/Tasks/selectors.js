const selectTasksFromList = (state, { listId }) => {
  let tasks = []
  const list = state.lists.byId[listId]
  if (list) {
    tasks = list.tasks.map(taskId => state.tasks.byId[taskId])
  }
  return { tasks }
}

export { selectTasksFromList }
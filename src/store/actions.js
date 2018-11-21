const actions = {
}

const createAction = (type, payload) => ({ type, payload })

const createActionWithError = (type, error) => ({
  type,
  error,
})

export { actions, createAction, createActionWithError }

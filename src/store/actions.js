const createAction = (type, payload) => ({ type, payload })

const createActionWithError = (type, error) => ({
  type,
  error,
})

export { createAction, createActionWithError }

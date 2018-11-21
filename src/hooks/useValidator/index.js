import { useState } from 'react'

const useValidator = (validateFunc, onSuccess) => {
  const [error, setError] = useState('')
  const validate = value => {
    const validation = validateFunc(value)
    if (validation) {
      setError(validation)
      return false
    }
    onSuccess(value) // When there is a one-value input, we can pass the function right away
    return true
  }
  const reset = () => setError('')
  return [error, validate, reset]
}

export default useValidator

import { useState } from 'react'

const useInput = initialInputValue => {
  const [value, setValue] = useState(initialInputValue)

  const setNewValue = event => setValue(event.target.value)

  const reset = () => setValue(initialInputValue)

  return [value, setNewValue, reset]
}

export default useInput

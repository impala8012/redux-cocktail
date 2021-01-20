import { useState } from "react";

const useInputState = (initialState) => {
  const [value, setValue] = useState(initialState);
  const handeleChange = (e) => {
      setValue(e.target.value)
  }
  const reset = () => {
      setValue("")
  }
  return [value, handeleChange, reset]
};

export default useInputState
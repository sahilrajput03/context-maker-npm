import { createContext, useContext, useState } from "react";

function contextMaker() {
  let MyContextInstance;

  const useMyContext = (value) => {
    const _value = useState(value);

    const valueIsNotUndefined = value !== undefined;

    if (valueIsNotUndefined) {
      MyContextInstance = createContext(_value);
    }

    if (!MyContextInstance)
      throw Error(
        "You must provide initial value to the `useYourContext()` hook"
      );

    return useContext(MyContextInstance);
  };

  return useMyContext;
}

export default contextMaker;

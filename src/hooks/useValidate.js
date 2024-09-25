import { useEffect, useState } from "react";

const useValidate = (value = "", validators) => {
  const [input, setInput] = useState(value);
  const [error, setError] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const validate = (value) => {
    let errorMessage = "";
    for (const validator of validators) {
      const [isValid, message] = validator(value);
      if (!isValid) {
        errorMessage = message;
        break;
      }
    }
    setError(errorMessage);
  };
  useEffect(() => {
    validate(input);
  }, [input]);
  const inputChangeHandler = (value) => {
    setInputTouched(false);
    setInput(value);
  };
  const inputBlurHandler = () => {
    setInputTouched(true);
  };
  return [input, inputTouched, setInputTouched, error, inputChangeHandler, inputBlurHandler, setError, setInput];
};

export const validators = {
  isRequire: (field) => {
    return (value) => {
      const isValid = value.trim() !== "";
      return [isValid, !isValid && `${field} can not be empty`];
    };
  },
  isEmail: (value) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return [regex.test(value), !regex.test(value) && "Invalid email"];
  },
  isMinlength: (field, minLength) => {
    return (value) => {
      const isValid = value.trim().length >= minLength;
      return [isValid, !isValid && `${field} at least ${minLength} characters`];
    };
  },
  isConfirm: (confirmValue, field) => {
    return (value) => {
      const isValid = value.trim() === confirmValue.trim();
      return [isValid, !isValid && `${field} not exact`];
    };
  },
  isExist: (listAccount, field) => {
    return (value) => {
      let isValid = true;
      listAccount.forEach((account) => {
        if (account[field] === value) {
          isValid = false;
        }
      });

      return [isValid, !isValid && `${field} is existed`];
    };
  },
};
export default useValidate;

import { isNumber, isString } from "../certificates/dataTypes.mjs";

export const getLimit = (min, max, listPersons) => {
  if (isNumber(min) && isNumber(max)) {
    const result = listPersons.slice(min, max);
    return result;
  } else {
    throw new Error("Los parametros no son valores permitidos");
  }
};

export const getFind = (param, listPersons) => {
  if (isString(param)) {
    const result = listPersons.filter(
      (i) => i.Name.includes(param.toLowerCase()) || i.Lastname.includes(param.toLowerCase())
    );
    return result;
  } else {
    throw new Error("error en el parametro");
  }
};
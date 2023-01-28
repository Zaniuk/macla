/* Validacion de typos de datos */

//si es string devuelve true
export const isString = (param) => {
  return typeof param === "string" || param instanceof String;
};

//si es date devuelve true
export const isDate = (param) => {
  return Boolean(Date.parse(param));
};

//si es number devuelve true
export const isNumber = (param) => {
  return typeof param === "number" || param instanceof Number;
};

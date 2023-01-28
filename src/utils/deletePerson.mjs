import { dataApi } from "../services/api.js";
// import { findData } from "../services/services.js";

const deletePerson = (id) => {
  if (id != "" || id != null || id != undefined) {
    const persons = dataApi.filter((people) => people !== id);
    return persons;
  } else {
    throw new Error("error al eliminar");
  }
};

export default deletePerson;
import { dataApi } from "./api.js";
export const findData = (filtrer) => {
  console.log(filtrer);
  const data = dataApi.find((d) => d.ID === filtrer);
  console.log(data);
  return data;
};

let person = {};
export const postPersons = (body, id) => {
  person = "";
  person = {
    ID : id,
    Name: body.Name,
    Lastname: body.Lastname,
    Cuil: body.Cuil,
    Birthday: body.Birthday,
    MedicalInsurance: body.MedicalInsurance,
    Activity: body.Activity,
    Office: body.Office,
    Address: body.Address,
  };
  dataApi.unshift(person);

  return person;
};

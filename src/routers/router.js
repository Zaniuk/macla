import Router, { json } from "express";
import path from "path";
import { dataApi } from "../services/api.js";
import PersonService from "../services/PersonService.mjs";
// import { findData } from "../services/services.js";
import { postPersons } from "../services/services.js";
import deletePerson from "../utils/deletePerson.mjs";
import { getLimit, getFind } from "../utils/getPerson.mjs";
// import updatePerson from "../utils/updatePerson.js";
let personsData = dataApi;
const routes = Router();

// Service

const service = new PersonService(personsData);


export const findData = (filtrer) => {
  const data = personsData.find((d) => d.ID === filtrer);

  return data;
};

const idGenerator = () => {
  let id = Math.max(...personsData.map((d) => d.ID)) + 1;
  console.log(id);
  return id;
};

//  --GET--  //


routes.get("/", (req, res) => {
  res.send(`
    <a href="http://localhost:3000/api://">api</a>
    <a href="http://localhost:3000/hepl://">ayuda</a>
  `);
});

routes.get("/api", (req, res) => {
  try {
    res.send(personsData);
  } catch (error) {
    console.log(error);
    res.send("Error al traer los datos, por favor intende denuevo");
  }
});

routes.get("/api/id=:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await service.get(id);
    console.log(post)
    res.send(post)
  } catch (error) {
    res.send(error.message);
  }
});

routes.get("/api/name=:param", (req, res) => {
  const { param } = req.params;
  console.log(param);
  try {
    const post = getFind(param, personsData);
    console.log(post);
    return post !== null ? res.send(post) : res.sendStatus(404);
  } catch (error) {
    res.send(error.message);
  }
});

routes.get("hepl", (req, res) => {
  req.send(`
  <ul>
    <li><h3>api </h3>http://localhost:3000/api</li>
    <h2>filtrar</h2>
    <li><h3>id: </h3>http://localhost:3000/api/id=1</li>
  </ul>
  `);
});
//  --GET = min - max --  //
routes.get("/api/min=:min/max=:max", (req, res) => {
  const { min, max } = req.params;
  console.log(min, max);
  const personsLimit = getLimit(+min, +max, personsData);
  try {
    res.send(personsLimit);
  } catch (error) {
    console.log(error);
    res.send("Error al traer los datos, por favor intende denuevo");
  }
});

routes.get("/api/min=:min/max=:max/name=:param", (req, res) => {
  const { param, min, max } = req.params;
  console.log(param);
  try {
    const post = getFind(param, personsData);
    const personsLimit = getLimit(+min, +max, post);
    console.log(post);
    return post !== null ? res.send(personsLimit) : res.sendStatus(404);
  } catch (error) {
    res.send(error.message);
  }
});

//   --POST--  //

routes.post("/api", (req, res) => {
  try {
    const ID = idGenerator();
    const newUser = postPersons(req.body, +ID);
    res.send(
      "se agrego un nuevo usuario " +
        newUser.Name +
        " " +
        newUser.Lastname +
        " Id = " +
        newUser.ID
    );
  } catch (error) {
    res.send(error.message);
  }
});

//  --PUT--  //

routes.put("/api/id=:id", (req, res) => {
  const { id } = req.params;
  try {
    const dataDelete = findData(+id);
    personsData = deletePerson(dataDelete);
    const user = postPersons(req.body, +id);
    personsData.push(user);
    res.send(
      "Se modifico el usuario " +
        user.Name +
        " " +
        user.Lastname +
        " ID : " +
        user.ID
    );
  } catch (error) {
    res.send(error.message);
  }
});

//  --DELETE--  //

routes.delete("/api/id=:id", (req, res) => {
  const { id } = req.params;
  try {
    const dataDelete = findData(+id);
    personsData = deletePerson(dataDelete);
    res.send(
      "Se borro el usuario " +
        dataDelete.Name +
        " " +
        dataDelete.Lastname +
        " ID : " +
        dataDelete.ID
    );
  } catch (error) {
    res.send(error.message);
  }
});
export default routes;

import { isString, isNumber, isDate } from "./dataTypes.mjs";
import people from "../utils/people.json";

const isNull = (param) => {
    try {
        if (param != null || param != "" || param != undefined) {
            return param
        } else {
            throw new Error(param + " No existe")
        }
    } catch (error) {
        console.log(error.messaje);
    }
}

const isName = (param) => {
    
}

export default certificates;

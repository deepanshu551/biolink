import { GETDATA } from "./type";

const fetchData = (data) => {
    return { type: GETDATA, payload: data }
}


export { fetchData };
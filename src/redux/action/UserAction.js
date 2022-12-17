import { LOGINUSER } from "./type";


const loginUser = (user) => {
    console.log("user", user)
    return {
        type: LOGINUSER,
        payload: user
    }
}


export { loginUser }
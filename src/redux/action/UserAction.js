import { LOGINUSER, LOGOUT } from "./type";


const loginUser = (user) => {

    return {
        type: LOGINUSER,
        payload: user
    }
}

const logoutUser = () => {
    console.log("user logout")

    return { type: LOGOUT }

}


export { loginUser, logoutUser }
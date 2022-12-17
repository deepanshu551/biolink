import { LOGINUSER } from "../action/type";

const initialState = { user: null }


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGINUSER:
            console.log("reducer", action.payload)
            return action.payload

        default:
            return state
    }
}

export default userReducer
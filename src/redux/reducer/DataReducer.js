import { GETDATA } from "../action/type";

const initialState = { data: {} }


const dataReducer = (state = initialState, action) => {

    switch (action.type) {

        case GETDATA:
            return {...state, data: action.payload }
        default:
            return state
    }
}

export default dataReducer
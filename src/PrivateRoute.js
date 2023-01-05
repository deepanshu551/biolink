import React, { useContext } from 'react'
import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom'
// import { AuthContext } from './Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const state = useSelector(state => state);

    console.log("hi", state)
    return ( <
        Route {...rest }
        render = {
            routeProps =>
            state.user !== null ? ( <
                RouteComponent {...routeProps }
                />
            ) : ( <
                Redirect to = { 'login' }
                />
            )
        }
        />
    )
}

export default PrivateRoute
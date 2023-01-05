import React, { useContext } from 'react'
import { useSelector } from "react-redux"
import { Route, Redirect } from 'react-router-dom'
// import { AuthContext } from './Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useSelector(state => state.user);

    console.log("hi", user)
    return ( <
        Route {...rest }
        render = {
            routeProps =>
            user !== null ? ( <
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
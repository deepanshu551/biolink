import React from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
// import {Route} from "react-router";
import Home from "./pages/Home";
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


const App=()=> {

    return (

        <AuthProvider>

        <Router>
        <Switch>

           
            {/* <PrivateRoute exact path="/hero" component={Hero}></PrivateRoute> */}
            
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
           
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
        </Switch>
        </Router>
           

        </AuthProvider>
    )
}

export default App
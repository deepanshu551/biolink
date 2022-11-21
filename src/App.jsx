import React from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
// import {Route} from "react-router";
import Home from "./pages/Home";
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import Login from "./pages/Login/Login";


const App=()=> {

    return (

        <AuthProvider>

        <Router>
        <Switch>

           
            {/* <PrivateRoute exact path="/hero" component={Hero}></PrivateRoute> */}
            
            <Route exact path="/" component={Home}></Route>
           
            <Route exact path="/login" component={Login}></Route>
        </Switch>
        </Router>
           

        </AuthProvider>
    )
}

export default App
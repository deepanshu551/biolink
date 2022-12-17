import React,{useEffect} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
// import {Route} from "react-router";
import {useSelector,useDispatch} from "react-redux"
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import Setup from "./pages/Setup/Setup";
import {loginUser} from './redux/action/UserAction'
import { auth } from './base'
import { onAuthStateChanged } from 'firebase/auth'
import {Toaster} from "react-hot-toast"
const App=()=> {
    const {user} = useSelector(state => state)
    const dispatch = useDispatch()
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
          console.log('Auth', currentuser)
          dispatch(loginUser(currentuser))
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
    return (

       <div>

        <Router>
        <Switch>    
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/setup" component={Setup}></Route>
            <Route exact path="/**" component={Error}></Route>
            
           
        </Switch>
        </Router>
           
<Toaster/>
        </div>
    )
}

export default App
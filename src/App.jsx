import React,{useEffect,useState} from "react";
import {Route,Switch,Link,useHistory} from "react-router-dom";
// import {Route} from "react-router";
import {useSelector,useDispatch} from "react-redux"
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import Setup from "./pages/Setup/Setup";
import Dashboard from "./pages/Dashboard/Dashboard";

import {loginUser} from './redux/action/UserAction'
import { auth,db } from './base'
import {  ref, child, get ,onValue} from "firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
import {Toaster} from "react-hot-toast";

const App=()=> {
    const [user,setUser] = useState({});
    const dispatch = useDispatch()
    const {data}=useSelector(state=>state.data);
    const history=useHistory();
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentuser => {
         
          if(currentuser)
          {
            dispatch(loginUser(currentuser))
            const query = ref(db, `Users/${currentuser.uid}`);
            onValue(query, (snapshot) => {
             const data = snapshot.val();
            const keyName=snapshot.key
             if(data===null){
              
              history.push("/setup")
             }
             else{
              history.push("/app")
             }
           });
          }
         

        })
        return () => {
          unsubscribe()
        }

        
      }, [])

      
    return (

       <div>

    
        <Switch>    
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/app" component={Dashboard}></Route>
            <PrivateRoute exact path="/setup" component={Setup}></PrivateRoute>
            <Route exact path="/**" component={Error}></Route>
            
           
        </Switch>
      
           
<Toaster/>
        </div>
    )
}

export default App
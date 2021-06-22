import { Switch , Route } from "react-router";
import PrivateRoute from "./components/auth/PrivateRoute";
import AddExperience from "./components/experiences/AddExperience";
import Experiences from "./components/experiences/Experiences";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import GlobeContextProvider from './contexts/GlobeContext';
import DBContextProvider from "./contexts/DBContext";


const App = () => {
  return (
    <>
      <AuthContextProvider>
        <DBContextProvider>
          <GlobeContextProvider>
            <div className="App"> 
              <NavBar/>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/experiences' component={Experiences}/>
                  <PrivateRoute path='/add-experience' component={AddExperience}/>
              </Switch>
            </div>
          </GlobeContextProvider>
        </DBContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

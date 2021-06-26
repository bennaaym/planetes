import { Switch , Route } from "react-router";
import PrivateRoute from "./components/auth/PrivateRouteActive";
import AddExperience from "./components/experiences/AddExperience";
import Experiences from "./components/experiences/Experiences";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import GlobeContextProvider from './contexts/GlobeContext';
import Article from "./components/experiences/article/Article";
import DBContextProvider from "./contexts/DBContext";
import EditExperience from "./components/experiences/EditExperience";


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
                  <Route path='/experiences/:id' component={Article}/>
                  <Route path='/experiences' component={Experiences}/>
                  <PrivateRoute path='/add-experience' component={AddExperience}/>
                  <PrivateRoute path='/edit-experience/:id' component={EditExperience}/>
              </Switch>
            </div>
          </GlobeContextProvider>
        </DBContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

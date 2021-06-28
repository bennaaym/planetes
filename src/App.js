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
import Article from "./components/experiences/article/Article";
import DBContextProvider from "./contexts/DBContext";
import EditExperience from "./components/experiences/EditExperience";
import CountryView from "./3D/view/CountryView";
import Gallery from "./components/gallery/Gallery";
import AddPicture from "./components/gallery/AddPicture";


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
                  <PrivateRoute path='/signin' component={SignIn} flag={false}/>
                  <PrivateRoute path='/signup' component={SignUp} flag={false}/>
                  <Route path='/gallery' component={Gallery} />
                  <PrivateRoute path='/add-picture' component={AddPicture} flag={true}/>
                  <Route path='/experiences/:id' component={Article}/>
                  <Route path='/experiences' component={Experiences}/>
                  <PrivateRoute path='/add-experience' component={AddExperience} flag={true}/>
                  <PrivateRoute path='/edit-experience/:id' component={EditExperience} flag={true}/>
                  <Route path='/view' component={CountryView}/>
              </Switch>
            </div>
          </GlobeContextProvider>
        </DBContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

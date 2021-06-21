import { Switch , Route } from "react-router";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import GlobeContextProvider from './contexts/GlobeContext';

const App = () => {
  return (
    <>
      <GlobeContextProvider>
        <div className="App"> 
          <NavBar/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </GlobeContextProvider>
    </>
  );
}

export default App;

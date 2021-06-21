import { Switch , Route } from "react-router";
import Home from "./components/home/Home";
import NavBar from "./components/Navbar/NavBar";
import GlobeContextProvider from './contexts/GlobeContext';

const App = () => {
  return (
    <>
      <GlobeContextProvider>
        <div className="App"> 
          <NavBar/>
          <Switch>
              <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </GlobeContextProvider>
    </>
  );
}

export default App;

import { Switch , Route } from "react-router";
import PrivateRoute from "./components/auth/PrivateRoute";
import AddExperience from "./components/experiences/form/AddExperience";
import Experiences from "./components/experiences/Experiences";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import GlobeContextProvider from './contexts/GlobeContext';
import Article from "./components/experiences/article/Article";
import DBContextProvider from "./contexts/DBContext";
import EditExperience from "./components/experiences/form/EditExperience";
import CustomeGallery from "./components/gallery/Gallery";
import AddPicture from "./components/gallery/form/AddPicture";
import Search from "./components/search/Search";
import MyArticles from "./components/search/MyArticles";
import GallerySearch from "./components/search/GallerySearch";
import MyPictures from "./components/search/MyPictures";
import About from "./components/about/About";

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

                  <PrivateRoute exact path='/signin' component={SignIn} flag={false}/>
                  <PrivateRoute exact path='/signup' component={SignUp} flag={false}/>

                  <Route exact path='/gallery' component={CustomeGallery} />
                  <PrivateRoute exact path='/gallery/add' component={AddPicture} flag={true}/>
                  <Route exact path='/gallery/search/tags/:id' component={GallerySearch}/>
                  <Route exact path='/gallery/search/countries/:id' component={GallerySearch}/>
                  <PrivateRoute exact path='/gallery/my-pictures' component={MyPictures} flag={true}/>

                  <Route exact path='/experiences/article/:id' component={Article}/>
                  <Route exact path='/experiences' component={Experiences}/>
                  <PrivateRoute  exact path='/experiences/add' component={AddExperience} flag={true}/>
                  <PrivateRoute  exact path='/experiences/edit/:id' component={EditExperience} flag={true}/>
                  <PrivateRoute exact path='/experiences/my-articles' component={MyArticles} flag={true}/>

                  <Route exact path='/experiences/search/tags/:id' component={Search}/>
                  <Route exact path='/experiences/search/countries/:id' component={Search}/>

                  <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </GlobeContextProvider>
        </DBContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

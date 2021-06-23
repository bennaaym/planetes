import { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

const PrivateRoute = ({flag, component:Component , ...res}) => {
    
    const {currentUser} = useContext(AuthContext);

    return (
        <Route
            {...res}
            render = {props => {
                return (flag || currentUser) ? <Component {...props}/> : <Redirect to='/signin'/>
            }}
        >

        </Route>
    );
}
 
export default PrivateRoute;
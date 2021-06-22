import { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

const PrivateRoute = ({component:Component , ...res}) => {
    
    const {currentUser} = useContext(AuthContext);

    return (
        <Route
            {...res}
            render = {props => {
                return currentUser ? <Component {...props}/> : <Redirect to='/signin'/>
            }}
        >

        </Route>
    );
}
 
export default PrivateRoute;
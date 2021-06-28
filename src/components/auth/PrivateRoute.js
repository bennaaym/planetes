import {Redirect, Route} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

const PrivateRoute = ({ flag, component:Component , ...res}) => {
    
    const {currentUser} = useAuth();

    return (
        <Route
            {...res}
            render = {props => {
                return currentUser ? (flag ? <Component {...props}/> : <Redirect to='/'/>) : (!flag? <Component {...props}/> : <Redirect to='/signin'/>)
            }}
        >

        </Route>
    );
}
 
export default PrivateRoute;
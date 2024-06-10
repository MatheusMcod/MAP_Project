import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ component: Component }) => {
	const isAuthenticated = !!localStorage.getItem('token');

	return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
};


export default ProtectedRoute;
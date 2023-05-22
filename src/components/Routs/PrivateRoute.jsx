import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../reduxe/auth/auth-selectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(typeof children);
  return isLoggedIn ? children : <Navigate to="/" replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.object,
};
export default PrivateRoute;

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../reduxe/auth/auth-selectors';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};
PublicRoute.propTypes = {
  children: PropTypes.object,
};
export default PublicRoute;

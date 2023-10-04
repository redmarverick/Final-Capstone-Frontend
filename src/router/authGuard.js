import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthGuard = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  return user ? <Navigate to='/cars' /> : <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;

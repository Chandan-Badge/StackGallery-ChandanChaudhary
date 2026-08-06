import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

// Catch-all for unknown URLs: warn the user, then send them back to the app root.
const NotFoundRedirect = ({ to = '/' }) => {
  const location = useLocation();
  const attemptedPath = `${location.pathname}${location.search}`;

  useEffect(() => {
    toast.error(`This '${attemptedPath}' doesn't exist`, { id: `not-found:${attemptedPath}` });
  }, [attemptedPath]);

  return <Navigate to={to} replace />;
};

export default NotFoundRedirect;

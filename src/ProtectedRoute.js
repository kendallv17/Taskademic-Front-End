import { Navigate, Outlet } from "react-router-dom";
import { readSession } from './utils/SessionManager';
export default function ProtectedRoute({  user, redirectPath = '/landing', children}){
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }  
    return children ? children : <Outlet />;
}
import { BrowserRouter, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  function RouteValidation() {
    const location = useLocation();

    useEffect(() => {
      async function fetchValidatedUser() {
        try {
          await api.get("/users/validated");
        } catch (e) {
          if (e.response?.status === 401) {
            signOut();
          }
        }
      }

      fetchValidatedUser(); 
    }, [location]); 

    return user ? <AccessRoute /> : <AuthRoutes />;
  }

  return (
    <BrowserRouter>
      <RouteValidation />
    </BrowserRouter>
  );
}

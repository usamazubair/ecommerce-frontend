import { useContext, createContext } from "react";

export const AdminContext = createContext(null);

export function useAdminContext() {
  return useContext(AdminContext);
}

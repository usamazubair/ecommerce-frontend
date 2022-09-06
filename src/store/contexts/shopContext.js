import { useContext, createContext } from "react";

export const ShopContext = createContext(null);

export function useShopContext() {
  return useContext(ShopContext);
}

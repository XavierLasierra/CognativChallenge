import React from "react";
import { render } from "@testing-library/react-native";
import StoreContextProvider from "../contexts/StoreContextProvider";

const customRender = (ui: any, initialState?: any, options?: any) => {
  const AllTheProviders = ({ children }: any) => (
    <StoreContextProvider store={initialState}>{children}</StoreContextProvider>
  );

  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };

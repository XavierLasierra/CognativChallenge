import React from "react";
import { render } from "@testing-library/react-native";
import { RecoilRoot } from "recoil";

const customRender = (ui: any, options?: any) => {
  const AllTheProviders = ({ children }: any) => (
    <RecoilRoot>{children}</RecoilRoot>
  );

  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from "@testing-library/react-native";

export { customRender as render };

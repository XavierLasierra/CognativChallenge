import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { RecoilRoot } from "recoil";

interface IAllProvidersProps {
  children: ReactElement;
}

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  const AllTheProviders = ({ children }: IAllProvidersProps) => (
    <RecoilRoot>{children}</RecoilRoot>
  );

  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from "@testing-library/react-native";

export { customRender as render };

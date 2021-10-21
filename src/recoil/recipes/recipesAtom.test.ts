import { snapshot_UNSTABLE } from "recoil";

import recipesState, { recipeById } from "./index";

import recipesMock from "../../__mocks__/recipes.mock";

jest.mock("../../services/recipes.services");

describe("Given a recipeById selector", () => {
  describe("When it is triggered", () => {
    describe("And recipes atom contains a recipe with the id passed by arguments", () => {
      test("Then recipeById value should be a recipe with that id", () => {
        const initialSnapshot = snapshot_UNSTABLE(({ set }) =>
          set(recipesState, recipesMock),
        );
        const [, { _id }] = recipesMock;

        const recibeByIdValue = initialSnapshot
          .getLoadable(recipeById(_id))
          .valueOrThrow();

        expect(recibeByIdValue?._id).toBe(_id);
      });
    });
  });
});

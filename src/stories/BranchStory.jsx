import React from "react";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";
import { branch } from "recompose";
import BranchLoadingButton from "../05/branch";
export default {
  title: "Branch",
  component: branch,
  decorators: [jsxDecorator],
};

export const 기본설정 = () => (
  <BranchLoadingButton>안녕하세요</BranchLoadingButton>
);
export const isLoading = () => (
  <BranchLoadingButton isLoading>안녕하세요</BranchLoadingButton>
);

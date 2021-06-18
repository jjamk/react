import React from "react";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";

import Button from "../04/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [jsxDecorator],
};

export const 기본설정 = () => <Button>안녕하세요</Button>;
export const large = () => <Button large>안녕하세요</Button>;
export const xlarge = () => <Button xlarge>안녕하세요</Button>;
export const small = () => <Button small>안녕하세요</Button>;
export const xsmall = () => <Button xsmall>안녕하세요</Button>;
export const primary = () => <Button primary>안녕하세요</Button>;
export const secondary = () => <Button secondary>안녕하세요</Button>;
export const primaryandlarge = () => (
  <Button primary large>
    안녕하세요
  </Button>
);

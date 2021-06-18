import React from "react";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";

import Text from "../04/Text";

export default {
  title: "Text",
  component: Text,
  decorators: [jsxDecorator],
};

export const 기본설정 = () => <Text>안녕하세요</Text>;
export const large = () => <Text large>안녕하세요</Text>;
export const xlarge = () => <Text xlarge>안녕하세요</Text>;
export const small = () => <Text small>안녕하세요</Text>;
export const xsmall = () => <Text xsmall>안녕하세요</Text>;
export const primary = () => <Text primary>안녕하세요</Text>;
export const secondary = () => <Text secondary>안녕하세요</Text>;
export const primaryandlarge = () => (
  <Text primary large>
    안녕하세요
  </Text>
);

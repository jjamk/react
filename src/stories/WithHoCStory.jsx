import React from "react";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";

import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHoC";

const ButtonWithHoc = withHoC(Button);
const TextWithHoC = withHoC(Text);

export default {
  title: "WithHoC",
  component: withHoC,
  decorator: [jsxDecorator],
};

export const 기본설정 = () => (
  <div>
    <ButtonWithHoc>안녕하세요</ButtonWithHoc>
    <TextWithHoC>안녕하세요</TextWithHoC>
  </div>
);
export const large = () => (
  <div>
    <ButtonWithHoc large>안녕하세요</ButtonWithHoc>
    <TextWithHoC large>안녕하세요</TextWithHoC>
  </div>
);

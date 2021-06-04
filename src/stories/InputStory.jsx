import React from "react";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";

import Input from "../03/Input";

// https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Input',
  component: Input,
  decorators: [jsxDecorator],
};

export const Basic = () => <Input name="name" />;
export const Labeled = () => <Input name="name" label="이름" />;
export const WithOnChange = () => <Input name="name" onChange={action("onChange 이벤트 발생")} />;

WithOnChange.story = { name: 'onChange 예제' }; //

/*
storiesOf("Input", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="이름" />)
  .addWithJSX("onChange 예제", () => (
    <Input name="name" onChange={action("onChange 이벤트 발생")} />
  ));
*/

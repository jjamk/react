import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../04/Button";
import Text from "../04/Text";
import withLoading from "../05/withLoading";

const TextWithLoading = withLoading("로딩 중")(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(
  Button
);

export default {
  title: "WithLoading",
  component: withLoading,
};

export const 기본설정 = () => {
  return <Text>안녕하세요</Text>;
};

export const isLoading = () => {
  return <div>
    <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
    <TextWithLoading isLoading>안녕하세요</TextWithLoading>
  </div>;
};

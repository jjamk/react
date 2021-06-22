import React from "react";
import { action } from "@storybook/addon-actions";

import { PageWithLoadData, PageWithLoadDataAndLoading } from "../05/lifecycle";

export default {
  title: "lifecycle",
  component: [PageWithLoadData, PageWithLoadDataAndLoading],
};

//fetch 함수 사용해 서버 데이터 호출
//호출 후 문자열 hello를 반환하여 loadData()함수의 then()함수 인자로 전달
export const loadData예제 = () => (
  <PageWithLoadData loadData={() => fetch("/").then(() => "hello")} />
);
export const 로딩메세지예제 = () => (
  <PageWithLoadDataAndLoading loadData={() => fetch("/").then(() => "hello")} />
);

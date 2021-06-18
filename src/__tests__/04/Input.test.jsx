import React from "react";
import ReactDOM from "react-dom";
import Input from "../../03/Input";

describe("<Input>", () => {
  //test()나 it() 모두 가능
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input name="name" />, div);
    //unmountComponentAtNode
    //= 마운트된 React 컴포넌트를 DOM에서 제거하고 컴포넌트의 이벤트 핸들러와 state를 정리
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });
describe('contaions <input>', () => {
  it('renders one input', () => {
    const wrapper = shallow(<Input name="test_name"/>);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
  });
});

//expect()는 jest의 검사 함수.
//특정변수를 비교하거나 함수를 실행하여 발생한 결과값을 검증
//toThrow()는 컴포넌트의 출력 오류 검사. 오류발생 시점을 알려줌
//not.toThrow()는 에러가 나타나는지 검증하는 함수

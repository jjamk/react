// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
//enzyme 설정함수 configure를 임포트
import { configure } from 'enzyme';
//생명주기 라이브러리 임포트
import Adapter from 'enzyme-adapter-react-16.3';

//enzyme를 새 버전 생명주기 함수와 같이 추가
configure({ adapter: new Adapter()});

//console.error() 객체에 spyOn()함수로 추가된 가상의 감지코드를 제거
afterEach(() => {
    console.error.mockClear();
});

beforeEach(() => {
    jest.spyOn(console,'error').mockImplementation((e) => {
        throw new Error(e);
    });
});

/*
afterEach, beforeEach
= 테스트코드가 실행되기 이전과 이후 특정 설정을 추가하고 
변경된 설정을 초기화하기 위해 실행
*/
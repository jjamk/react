import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //초기값을 props에서 받은 값으로 설정
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1, //증감연산자 안됨
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;

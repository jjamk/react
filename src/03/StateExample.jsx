import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props); //this.props가 생성자 내에서 정의될 수 있게
    this.state = {
      loading: true,
      formData: "no data",
    };
    //반드시 this가 넘어갈경우 bind()해주어야
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    const { formData } = this.state;
    //state변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    //여기서 this.state.loading은 true
    console.log("loading값", this.state.loading);
  }
  //이후 render()함수에서는 loading이 false
  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;

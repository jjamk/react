import React from "react";

export default function withHoC(WrappedComponent) {
  //음 밑에 두줄 안됨
  const { displayName, name } = WrappedComponent;
  const WrappedComponentName = displayName || name;
  return class WithHoC extends React.Component {
    ///displayName으로 확장 컴포넌트 이름을 정의
    static displayName = `withHoc(${WrappedComponent.name})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

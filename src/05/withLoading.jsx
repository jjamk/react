import React from "react";

//다중 커링
export default function (loadingMessage = "로딩 중") {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;
      return (
        //isLoading은 구조할당 표현식으로 추출
        <WrappedComponent {...this.props} />
      );
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}

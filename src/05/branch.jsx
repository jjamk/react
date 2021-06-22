import React from "react";
import branch from "recompose/branch";
import Button from "../04/Button";

export default branch(
  ({ isLoading }) => isLoading,
  () => () => <Button disabled>로딩 중</Button>
)(Button);
/*
function isLoading(props) {
    return props.isLoading;
}

function LoadingButton(props) {
    return <Button disabled>로딩 중</Button>;
}

//isLoading이 참이면 LoadingButton, 거짓이면 Button
export default branch(
    isLoading,
    () => LoadingButton,
)(Button);
*/

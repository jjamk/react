import React from "react";

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  render(
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}

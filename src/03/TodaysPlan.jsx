import React from "react";

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  render(
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>ęłíěě</button>
    </div>
  );
}

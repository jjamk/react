//함수형 컴포넌트

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  render(
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}

//클래스형 컴포넌트

class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan /> : null}
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}

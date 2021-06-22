import React from "react";
import lifecycle from "recompose/lifecycle";
import compose from "recompose/compose";
import withLoading from "./withLoading";

//liftcycle 함수 안의 this.state.content 값을 프로퍼티로 전달
function Page({ content }) {
  return (
    <div>
      페이지 로딩이 완료되었습니다
      {content}
    </div>
  );
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: "" }, //state의 초기값 정의
  componentDidMount: function () {
    //loadData에 함수가 선언된 경우에만 함수 실행하도록 설정
    if (this.props.loadData) {
      //로딩이 완료되면 loadingdmf false, 결과화면을 content에 저장
      this.props
        .loadData()
        .then((content) => this.setState({ isLoading: false, content }));
    }
  },
});

//하이어오더 컴포넌트를 Page컴포넌트에 적용
export const PageWithLoadData = withLoadData(Page);
//compose로 하이어오더 컴포넌트 생성함수 묶은다음 Page컴포넌트에 적용
export const PageWithLoadDataAndLoading = compose(
  withLoadData,
  withLoading("서버 요청 중")
)(Page);

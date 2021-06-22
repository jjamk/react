import compose from "recompose/compose";
import withLoading from "./withLoading";
import withState from "recompose/withState";
const withLoadData = withState("isLoading", "setIsLoading", false);

function Component() {
  return "완료(컴포넌트 출력)";
}

const ComponentWithLoading = withLoading("로딩 중")(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

//compose 인자에는 같은 요소가 전달되어야함.
//withLoading은 커링함수, withLoadData는 하이어오더컴포넌트
//BUT, withLoading의 반환값이 하이어오더 컴포넌트이므로 조합 가능
//로딩상태 정의 후 isLoading프로퍼티를 withLoading 생성함수에 전달해서 로딩메세지 출력
const withLoadDataAndLoading = compose(withLoadData, withLoading("로딩 중"));
const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);

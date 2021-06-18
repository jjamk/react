//공용 스타일 컴포넌트

//테마 관리자
import ThemeStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
//react-with-styles에서 사용하는 함수들 임포트
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

//Theme.js를 등록
ThemeStyleSheet.registerTheme(Theme);
//아프로디테를 테마관리자에 적용
ThemeStyleSheet.registerInterface(aphroditeInterface);

export {css, withStyles, withStylesPropTypes, ThemeStyleSheet};
export default withStyles;
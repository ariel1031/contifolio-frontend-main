import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

//https://flamingotiger.github.io/style/styled-components-responsive/
//styled-components 반응형 및 스타일 리셋 설정하기
const GlobalStyle = createGlobalStyle`
${reset}
*{
    // box-sizing속성을 사용하면 요소의 전체 너비와 높이에 패딩과 테두리를 포함할 수 있습니다 .
    //box-sizing: border-box;하면 너비와 높이에 패딩과 테두리가 포함됩니다

    box-sizing:border-box;

}
body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}`;
export default GlobalStyle;

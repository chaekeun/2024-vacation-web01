import * as ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//CSR : <App /> 컴포넌트를 가상 DOM에 렌더링 후 실제 DOM에 적용
// ReactDOM.render(<App />, document.getElementById("root"));

//SSR : 서버에서 렌더링된 html을 클라이언트에서 다시 활성화하는데 사용
//클라이언트에서는 이를 가지고 초기상태를 복원하고 이벤트 핸들러를 연결한다

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,

  <BrowserRouter>
    <App />
  </BrowserRouter>
);

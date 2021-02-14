import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import customAxiosPost from "./customAxios";

function App() {
  // IP주소 변수 선언
  const [ip, setIp] = useState("");

  // STR 변수 선언
  const [str, setStr] = useState("");

  // IP주소 값을 설정합니다.
  function callback1(data) {
    setIp(data);
  }
  // STR 값을 설정합니다.
  function callback2(data) {
    setStr(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(() => {
    // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
    //customAxiosPost("/moorv_test/api/v1/ip", callback);
    customAxiosPost("/ip", callback1);

    // 서버에서 보내는 텍스트를 알아내는 백엔드의 함수를 호출합니다.
    customAxiosPost("/str", callback2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        이 기기의 IP주소는 {ip}입니다. <br></br>
        서버에서 받아온 값 > {str}
      </header>
    </div>
  );
}

export default App;

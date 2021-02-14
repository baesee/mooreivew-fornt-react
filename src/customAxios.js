import axios from "axios"; // 액시오스

export default function customAxiosPost(url, callback) {
  axios({
    url: "/api" + url,
    method: "post",

    /**
     * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
     * 운영 환경에 배포할 경우에는 15~16행을 주석 처리합니다.
     *
     * ※크로스 도메인 이슈: 브라우저에서 다른 도메인으로 URL 요청을 하는 경우 나타나는 보안문제
     * [이슈사항] withCredentials: false > 분명 CORS 이슈로 인해 ture값이 되어야 하는데 false로 하니 통신이 가능.. 일단은 false로 세팅 21.02.04
     */
    baseURL: "http://localhost:8080",
    withCredentials: false
  }).then(function(response) {
    console.log(response);
    callback(response.data);
  });
}

const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true);
xhr.send();

console.log(xhr);

// JS DOM => EVENT
// ex. 버튼 / 오버!!
// 이벤트 핸들러!!
// button.onclick = function () {};
// addEventListner( )

// onreadystatechange
// 클라이언트가 서버에 데이터를 요청하고, 서버에서 데이터를 전송해주는 과정속에서 데이터가 이동될 때마다 실행되는 이벤트 핸들러!!
// readyState : 값
// 0: 클라이언트가 서버에 아무런 요청을 하지 않은 단계
// 1: 클라이언트가 서버에 자료를 요청하고 성공한 상태
// 2: 클라이언트가 서버에 자료를 요청한 이후 서버가 클라이언트 측에 응답메세지를 헤더로 전송한 상태
// 3: 서버에서 클라이언트 측으로 데이터가 전송중인 상태
// 4: 서버가 정상적으로 클라이언트측에 데이터를 전송완료했고, 이제 클라이언트 측에서 데이터를 마음껏 사용할 수 있는 상태

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const student = JSON.parse(xhr.responseText);
    document.write(`${student.name} 학생은 ${student.grade}학년 입니다.`);
  }
};

// console.log("시작");
// add();
// console.log("실행 중...");
// console.log("끝");

// try {
//   console.log("시작");
//   add();
//   console.log("실행 중...");
// } catch (err) {
//   console.log(`오류 발생 : ${err}`);
//   console.log(`오류 발생 : ${err.name}`);
//   console.log(`오류 발생 : ${err.message}`);
// } finally {
//   console.log("끝");
// }

const json = '{"grade":3, "age":25}';

try {
  const user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다!";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("통신완료");
}

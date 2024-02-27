// 오늘 옆에있는 친구들과 점심!!!
// 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴 후보!!
// 상기 메뉴 중 랜덤으로 1개 메뉴를 선택해서 웹브라우저 출력될 수 있도록 코드를 작성해보세요!

const menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥", "컵라면"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);

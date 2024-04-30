const container = document.querySelector("#container") as HTMLParagraphElement;

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

let text: string;

if (hours < 12) {
  text = "오전";
} else {
  text = "오후";
}

container.innerText = `${text} ${hours}시 ${minutes}분 입니다.`;

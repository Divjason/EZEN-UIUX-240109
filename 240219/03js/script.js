const imgTag = document.querySelector("img");
let num = 1;

const gallery = (direct) => {
  if (direct) {
    if (num === 9) return;
    num++;
  } else {
    if (num === 1) return;
    num--;
  }

  imgTag.setAttribute("src", `./images/pic_${num}.jpg`);
};

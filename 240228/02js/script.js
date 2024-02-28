// 원기둥의 부피 = 밑면적 x 높이
// 밑면적 = 파이 x ((지름 / 2)제곱)

// 생성자 함수 혹은 class를 활용해서 코드작성!!

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()} 입니다.`);

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
const diameter = document.querySelector("#cyl-diameter");
const height = document.querySelector("#cyl-height");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

const resultTest = (diameterValue, heightValue) => {
  if (diameterValue === "" || heightValue === "") {
    result.innerText = "지름값과 높이값을 입력하세요!";
  } else {
    const cylinder = new Cylinder(
      parseInt(diameterValue),
      parseInt(heightValue)
    );
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultTest(diameter.value, height.value);
  diameter.value = "";
  height.value = "";
});

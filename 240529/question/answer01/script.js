// 이미지가 드래그 & 드롭이 되는 영역
const fileZone = document.querySelector(".file-zone");
console.log(fileZone);

const className = "on";

// 이미지 드래그 & 리브 이벤트
fileZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  // fileZone.classList.add("on");
  fileZone.classList.add(className);
});

fileZone.addEventListener("dragleave", (event) => {
  event.preventDefault();
  fileZone.classList.remove(className);
});

// 드랍 되어진 이미지를 출력시켜주는 함수 기능 정의
const displayImages = (transferedFiles) => {
  const imageFileList = [];

  const fileNum = transferedFiles.length;

  for (let i = 0; i < fileNum; i++) {
    if (!transferedFiles[i].type.match("image.*")) {
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }

  const imagePreviewArea = document.querySelector(".image-list");
  // JS 문법 => 비동기적으로 데이터를 읽어줄 수 있도록 해주는 객체 => FileReader()

  for (let imageFile of imageFileList) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (event) => {
      console.log(event);
      const image = new Image();
      image.src = event.target.result;
      imagePreviewArea.appendChild(image);
    });
  }
};

// 이미지 드랍 이벤트
fileZone.addEventListener("drop", (event) => {
  event.preventDefault();
  fileZone.classList.remove(className);

  const transferedFiles = event.dataTransfer.files;
  console.log(transferedFiles);
  displayImages(transferedFiles);
});

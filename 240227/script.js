const menuPics = document.querySelectorAll('.menu-pic');
const newMenus = [
  'newmenu01.png',
  'newmenu02.png',
  'newmenu03.png',
  'newmenu04.png',
  'newmenu05.png',
  'newmenu06.png',
  'newmenu07.png',
  'newmenu08.png',
  'newmenu09.png',
  'newmenu10.png',
  'newmenu11.png',
  'newmenu12.png',
  'newmenu13.png',
  'newmenu14.png',
];

menuPics.forEach((menuPic, index) => {
  const menuOpenBtns = document.querySelectorAll('.open');
  const menuCloseBtns = document.querySelectorAll('.close');

  const menuModal = document.querySelectorAll('.menu-modal');
  const menuImg = document.createElement('img');

  const modalPics = document.querySelectorAll('.modal-pic');
  const modalImg = document.createElement('img');

  menuImg.src = `./img/02menuImg/wholemenu/${newMenus[index]}`;
  menuPic.appendChild(menuImg);

  menuPic.addEventListener('click', () => {
    modalImg.src = `./img/02menuImg/wholemenu/${newMenus[index]}`;
    modalPics[index].appendChild(modalImg);
  });

  menuOpenBtns[index].addEventListener('click', () => {
    menuModal[index].style.display = 'block';
  });

  menuCloseBtns[index].addEventListener('click', () => {
    menuModal[index].style.display = 'none';
    menuModal[index].appendChild(modalImg);
  });
});

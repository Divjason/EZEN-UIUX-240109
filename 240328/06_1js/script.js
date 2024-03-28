// anime({
//   targets: "ul.menu li",
//   translateX: 250,
//   easing: "linear",
//   loop: true,
//   direction: "alternate",
//   delay: anime.stagger(100),
//   endDelay: anime.stagger(100),
// });

// let tl = anime.timeline({
//   easing: "linear",
//   duration: 1000,
// });

// tl.add({
//   targets: ".circle1",
//   translateX: 500,
// })
//   .add({
//     targets: ".circle1",
//     translateY: 500,
//   })
//   .add({
//     targets: ".circle1",
//     translateX: 0,
//   })
//   .add({
//     targets: ".circle1",
//     translateY: 0,
//   })
//   .add({
//     targets: ".circle2",
//     scale: 1.5,
//     rotate: 360,
//     borderRadius: 0,
//   });

anime({
  targets: "ul li",
  translateY: (el, i) => {
    if (i % 2 == 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
});

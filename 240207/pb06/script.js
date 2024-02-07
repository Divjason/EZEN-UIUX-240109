let wd = $(window);
$('section[data-type="background"]').each(function () {
  let bg = $(this);
  wd.scroll(function () {
    let test = wd.scrollTop();
    console.log(test);
    let yPos = wd.scrollTop() / bg.data("speed");
    let coords = "50%" + yPos + "px";
    console.log(coords);
    bg.css({ backgroundPosition: coords });
  });
});

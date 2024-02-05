// html에서 작성한 요소를 선택자로 불러오고자 할 때!! 항상 "$"
// template literal => js $

$(".testimonial-pic img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".testimonial .content").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});

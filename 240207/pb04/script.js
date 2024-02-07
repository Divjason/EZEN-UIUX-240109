$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault();
});

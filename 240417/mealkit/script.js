// const gnbInclude = document.querySelector(".gnb-include");
// window.addEventListener("load", () => {
//   gnbInclude;
// });

const loadExternalContent = () => {
  fetch("file:///C:UsersEZENDesktopmealkit/gnb.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(".gnb-Include").innerHTML = html;
    });
};

loadExternalContent();

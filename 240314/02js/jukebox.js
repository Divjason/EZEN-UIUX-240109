const songs = document.querySelectorAll(".albumTable_song");
for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}

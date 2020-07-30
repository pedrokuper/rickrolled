const button = document.querySelector(".js-button");
const video = document.querySelector(".js-video");

button.addEventListener("click", playVideo);

function playVideo() {
  //video.style.display = "block";
  toggle();
  video.play();
  console.log("video");

  // button.style.display = "none";
}

function toggle() {
  if (video.classList != "video-display") {
    video.classList.toggle("video-display");
  }
}

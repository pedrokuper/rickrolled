const button = document.querySelector(".js-button");
const video = document.querySelector(".js-video");

button.addEventListener("click", playVideo);

function playVideo() {
  //video.style.display = "block";
  toggleVideo();
  video.play();
  toggleButton();
  console.log("video");

  // button.style.display = "none";
}

function toggleVideo() {
  if (video.classList != "video-on") {
    video.classList.toggle("video-on");
  }
}

function toggleButton() {
  if (button.classList != "button-off") {
    button.classList.toggle("button-off");
  }
}

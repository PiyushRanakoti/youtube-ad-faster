function checkForAds() {
  let adExist = document.getElementsByClassName("ad-showing").length > 0;
  let video = document.getElementsByClassName("video-stream html5-main-video")[0];

  if (adExist && video) {
    video.playbackRate = 15;
  }
}

setInterval(checkForAds, 500);

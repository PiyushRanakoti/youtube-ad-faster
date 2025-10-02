const MAX_SPEED = 15;

function checkForAds() {
  const adExist = document.querySelector('.ad-showing') !== null;
  const video = document.querySelector('video.html5-main-video');

  if (adExist && video && video.playbackRate < MAX_SPEED) {
    video.playbackRate = MAX_SPEED;
  }
}


setInterval(checkForAds, 500);

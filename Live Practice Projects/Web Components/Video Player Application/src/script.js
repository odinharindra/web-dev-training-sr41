//  References to DOM elements
const demoVideoEl = document.querySelector("video[name='demo-video']");
const playPauseBtnEl = document.querySelector("button[name='play-pause']");
const playPauseIconEl = document.querySelector("button[name='play-pause'] i");
const progressBarEl = document.querySelector("div[name='video-progress-bar']");
const elapsedDurationStampEl = document.getElementById("elapsed-duration");
const totalDurationStampEl = document.getElementById("total-duration");
const muteUnmuteBtnEl = document.querySelector('button[name="mute-unmute"]');
const muteUnmuteIconEl = document.querySelector('button[name="mute-unmute"] i');
const progressTrackEl = document.getElementById("progress-track");
const volumeTrackEl = document.getElementById("volume-track");
const volumeLevelBarEl = document.getElementById("volume-level");
const plabackSelectorInpEl = document.getElementById("playback-speed");
const fullScreenSwitchBtnEl = document.querySelector('button[name="full-screen-switch"]');

// Realtime status flags
let isPlaying = false;
let isMuted = false;

console.log({ demoVideoEl, playPauseBtnEl, playPauseIconEl });

function play() {
  demoVideoEl.play();
  isPlaying = true;
}

function pause() {
  demoVideoEl.pause();
  isPlaying = false;
}

function mute() {
  demoVideoEl.muted = true;
  isMuted = true;
}

function unMute() {
  demoVideoEl.muted = false;
  isMuted = false;
}

// Actions binded to Events
// Adding event listener for Play and Pause button
playPauseBtnEl.addEventListener("click", function () {
  if (isPlaying) {
    // Do action to pause video
    pause();
    playPauseIconEl.classList.remove("fa-pause");
    playPauseIconEl.classList.add("fa-play");
  } else {
    // Do action to play video
    play();
    playPauseIconEl.classList.remove("fa-play");
    playPauseIconEl.classList.add("fa-pause");
  }
});

demoVideoEl.addEventListener("loadeddata", function () {
  console.log("Video is loaded properly");
  const videoTotalDuration = Math.floor(demoVideoEl.duration);
  totalDurationStampEl.innerText =
    Math.floor(videoTotalDuration / 60) + ":" + (videoTotalDuration % 60);
});

demoVideoEl.addEventListener("timeupdate", function () {
  const videoTimeElapsed = demoVideoEl.currentTime;
  const videoTotalDuration = demoVideoEl.duration;
  const percVideoDurationCompleted = (videoTimeElapsed / videoTotalDuration) * 100;
  progressBarEl.style.width = percVideoDurationCompleted + "%";
  elapsedDurationStampEl.innerText =
    Math.floor(videoTimeElapsed / 60) + ":" + Math.floor(videoTimeElapsed % 60);
  // console.log({ timeElapsedPerc: percVideoDurationCompleted });
});

muteUnmuteBtnEl.addEventListener("click", function () {
  if (isMuted) {
    unMute();
    muteUnmuteIconEl.classList.remove("fa-volume-off");
    muteUnmuteIconEl.classList.add("fa-volume-up");
  } else {
    mute();
    muteUnmuteIconEl.classList.remove("fa-volume-up");
    muteUnmuteIconEl.classList.add("fa-volume-off");
  }
});

progressTrackEl.addEventListener("click", function (event) {
  // console.log({ event });
  const clickDistanceFromTrackStart = event.offsetX;
  const totalTrackWidth = progressTrackEl.offsetWidth;
  // console.log({ clickDistanceFromTrackStart, totalTrackWidth });
  const percentageOfTotalDurationSelected = clickDistanceFromTrackStart / totalTrackWidth;
  demoVideoEl.currentTime = demoVideoEl.duration * percentageOfTotalDurationSelected;
});

volumeTrackEl.addEventListener("click", function (event) {
  // console.log({ event });
  const clickDistanceFromTrackStart = event.offsetX;
  const totalTrackWidth = volumeTrackEl.offsetWidth;
  // console.log({ clickDistanceFromTrackStart, totalTrackWidth });
  const percentageOfTotalVolumeSelected = clickDistanceFromTrackStart / totalTrackWidth;
  // console.log({ percentageOfTotalVolumeSelected: percentageOfTotalVolumeSelected * 100 + " %" });
  demoVideoEl.volume = percentageOfTotalVolumeSelected;
  volumeLevelBarEl.style.width = percentageOfTotalVolumeSelected * 100 + "%"; // 1%, 2%
});

plabackSelectorInpEl.addEventListener("change", function (event) {
  console.log({ event, valueSelected: event.target.value });
  demoVideoEl.playbackRate = event.target.value;
});

fullScreenSwitchBtnEl.addEventListener("click", function () {
  demoVideoEl.requestFullscreen();
});

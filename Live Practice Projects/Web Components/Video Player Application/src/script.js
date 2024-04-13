/**
 * Retrieves references to various elements in the DOM related to a video player.
 * @constant {Element} videoEl - The video element in the DOM.
 * @constant {Element} videoProgressEl - The element representing the progress bar of the video.
 * @constant {Element} videoProgressTrackEl - The element representing the progress track of the video.
 * @constant {Element} playPauseBtn - The button element for playing or pausing the video.
 * @constant {Element} muteUnmuteBtn - The button element for muting or unmuting the video.
 */
const videoEl = document.querySelector("video");
const videoProgressEl = document.getElementById("video-progressbar-track");
const videoProgressTrackEl = document.querySelector("#video-progressbar-track .__progress-status");
const playPauseBtn = document.getElementById("play_pause");
const muteUnmuteBtn = document.getElementById("mute_unmute");

/**
 * Retrieves the DOM element with the id "playback_speed_selector".
 * @returns The DOM element representing the playback speed selector.
 */
const playbackSpeedEl = document.getElementById("playback_speed_selector");

/**
 * Retrieves the element with the id "fullscreen_request" from the document.
 * @returns The element with the id "fullscreen_request" or null if not found.
 */

/**
 * Retrieves the element with the id "fullscreen_request" from the document.
 * @returns The element with the id "fullscreen_request" or null if not found.
 */
const fullscreenRequestBtn = document.getElementById("fullscreen_request");

/**
 * Retrieves the DOM element with the id "volume-range-track".
 * @returns The DOM element representing the volume range track, or null if not found.
 */
const volumeRangeEl = document.getElementById("volume-range-track");

/**
 * Finds and returns the element representing the volume range track.
 * @returns {Element} The element representing the volume range track.
 */
const volumeRangeTrackEl = document.querySelector("#volume-range-track .__volume_status");

/**
 * Retrieves the DOM element with the id "elapsed-video-duration".
 * @returns The DOM element with the id "elapsed-video-duration", or null if not found.
 */
const currentTimeEl = document.getElementById("elapsed-video-duration");

/**
 * Retrieves the DOM element with the id "total-video-duration".
 * @returns The DOM element representing the total video duration.
 */
const durationEl = document.getElementById("total-video-duration");

// Play/Pause Video
/**
 * Toggles the play/pause state of a video element and updates the play/pause button accordingly.
 * If the video is paused, it will play the video and add the "playing" class to the play/pause button.
 * If the video is playing, it will pause the video and remove the "playing" class from the play/pause button.
 * @returns None
 */
playPauseBtn.addEventListener("click", () => {
  /**
   * Toggles the play/pause state of a video element and updates the styling of a play/pause button accordingly.
   * If the video is paused, it will play the video and add the "playing" class to the play/pause button.
   * If the video is playing, it will pause the video and remove the "playing" class from the play/pause button.
   * @param {HTMLVideoElement} videoEl - The video element to play/pause.
   * @param {HTMLElement} playPauseBtn - The button element used for play/pause functionality.
   * @returns None
   */
  if (videoEl.paused) {
    videoEl.play();
    playPauseBtn.classList.add("playing");
  } else {
    videoEl.pause();
    playPauseBtn.classList.remove("playing");
  }
});

// Mute/Unmute Video

/**
 * Toggles the mute/unmute state of a video element and updates the mute/unmute button accordingly.
 * @returns None
 */
muteUnmuteBtn.addEventListener("click", () => {
  if (videoEl.muted) {
    videoEl.muted = false;
    muteUnmuteBtn.classList.remove("muted");
  } else {
    videoEl.muted = true;
    muteUnmuteBtn.classList.add("muted");
  }
});

// Change Playback Speed
playbackSpeedEl.addEventListener("change", () => {
  videoEl.playbackRate = playbackSpeedEl.value;
});

// Handle full screen request
/**
 * Adds an event listener to a button element to request fullscreen mode for a video element.
 * @param {Event} "click" - The event type to listen for (click).
 * @param {Function} () => { videoEl.requestFullscreen(); } - The function to execute when the event occurs, requesting fullscreen mode for the video element.
 * @returns None
 */
fullscreenRequestBtn.addEventListener("click", () => {
  videoEl.requestFullscreen();
});

/**
 * Updates the video player UI elements such as current time, duration, progress bar, and volume.
 * This function is called every 200 milliseconds to keep the UI in sync with the video.
 * @returns None
 */
setInterval(() => {
  const currentTime = videoEl.currentTime;
  const duration = videoEl.duration;
  const progress = (currentTime / duration) * 100;

  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  const elapsedMinutes = Math.floor(currentTime / 60);
  const elapsedSeconds = Math.floor(currentTime % 60);

  currentTimeEl.innerText = `${elapsedMinutes}:${elapsedSeconds}`;
  durationEl.innerText = `${totalMinutes}:${totalSeconds}`;

  const videoVolume = videoEl.volume;

  videoProgressTrackEl.style.width = `${progress}%`;
  volumeRangeTrackEl.style.width = `${videoVolume * 100}%`;
}, 200); // 200 => 200 milliseconds => 0.2 seconds

/**
 * Adds an event listener to the video progress element that updates the video's current time
 * based on the position of the click within the progress bar.
 * @param {string} "click" - the event type to listen for
 * @param {function} (event) - the callback function to execute when the event is triggered
 * @returns None
 */
videoProgressEl.addEventListener("click", (event) => {
  // console.log({ offsetX: event.offsetX, width: videoProgressEl.offsetWidth });
  const newExpectedDuration = (event.offsetX / videoProgressEl.offsetWidth) * videoEl.duration;
  videoEl.currentTime = newExpectedDuration;
});

/**
 * Adds an event listener to the volume range element that updates the volume of the video element
 * based on the position of the click within the volume range element.
 * @param {string} "click" - the event type to listen for
 * @param {function} (event) - the callback function to execute when the event is triggered
 * @returns None
 */
volumeRangeEl.addEventListener("click", (event) => {
  const newVolume = event.offsetX / volumeRangeEl.offsetWidth;
  videoEl.volume = newVolume;
});

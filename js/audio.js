var myAudio, endTime, curTime, myVol, seeker;
window.onload = function () {
    myAudio = document.getElementById('myAudio');
    endTime = document.getElementById('end');
    curTime = document.getElementById('cur');
    myVol = document.getElementById('myVol');
    seeker = document.getElementById('seekObj');
    setDefaults();
    loadAudio();
    // console.log(myAudio);
}
function initProgressBar() {
    var curTimeString = calculateTimeString(myAudio.currentTime);
    curTime.innerHTML = curTimeString;

    seeker.value = (myAudio.currentTime / myAudio.duration);
    seeker.addEventListener("click", seek);

    function seek(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        myAudio.currentTime = percent * myAudio.duration;
        seeker.value = percent / 100;
    }
}
function setDefaults() {
    myVol.value = 50;
    myAudio.volume = 0.5;
}
function loadAudioFile() {

}
function loadAudio() {
    myAudio.load();
    myAudio.addEventListener("loadedmetadata", function () {
        displayTime();
    });
}
function playAudio() {
    myAudio.play();
}
function pauseAudio() {
    myAudio.pause();
}
function stopAudio() {
    myAudio.currentTime = 0;
    pauseAudio();
}
function moveBackward() {
    if (myAudio.currentTime > 10) {
        myAudio.currentTime -= 10;
    }
    else {
        myAudio.currentTime = 0;
    }
}
function moveForward() {
    if (myAudio.currentTime + 10 < myAudio.duration) {
        myAudio.currentTime += 10;
    }
    else {
        myAudio.currentTime = myAudio.duration;
    }
}
function muteAudio() {
    myAudio.muted = !myAudio.muted;
}
function displayTime() {
    var curTimeString = calculateTimeString(myAudio.currentTime);
    var endTimeString = calculateTimeString(myAudio.duration);
    curTime.innerHTML += curTimeString;
    endTime.innerHTML += endTimeString;
}
function calculateTimeString(tot_time) {
    var min = Math.floor(tot_time / 60);
    var sec = Math.floor(tot_time - (min * 60));
    var secs = sec.toString();
    var mins = min.toString();
    // console.log(secs);
    if (sec >= 10)
        secs = secs.substring(0, 2);
    else
        secs = '0' + secs;
    return mins + ':' + secs;
}
function changeVolume() {
    myAudio.volume = (myVol.value / 100);
}
function changePosition() {
    myAudio.currentTime = (myTrack.value / 100) * myAudio.duration;
}
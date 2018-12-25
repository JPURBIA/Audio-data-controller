var myAudio, endTime, curTime, myVol, myTrack;
window.onload = function () {
    myAudio = document.getElementById('myAudio');
    endTime = document.getElementById('end');
    curTime = document.getElementById('cur');
    myVol = document.getElementById('myVol');
    myTrack = document.getElementById('myTrack');
    setDefaults();
    loadAudio();
    console.log(myAudio);
}
function setDefaults() {
    myVol.value = 50;
    myAudio.volume = 0.5;
    myTrack.value = 0;
}
function loadAudioFile() {

}
function loadAudio() { 
    myAudio.load();
    myAudio.addEventListener("loadedmetadata", function(){
        // console.log("Playing " + myAudio.src + " for: "+ myAudio.duration + " seconds.");
        displayTime();
    });
}
function playAudio() {
    // console.log("HelloWorld;")
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
    var sec = tot_time - (min*60);
    var secs = sec.toString();
    var mins = min.toString();
    if(secs.length >= 2)
        secs = secs.substring(0, 2);
    else
        secs += '0';
    // console.log(mins, secs);
    
    return min + ':' + secs;
}
function changeVolume() {
    myAudio.volume = (myVol.value/100);
}
function changePosition() {
    myAudio.currentTime = (myTrack.value/100)*myAudio.duration;
}
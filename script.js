var musicPlayer = document.querySelector("audio");
musicPlayer.style.opacity = "0%";

let fileTest = document.querySelector("#testInsertMusic");
function testfile(e) {
  var files = e.target.files;
  var file = files[0];
  var urlfile = e.target;
  // console.log(file.name);
  // console.log(file.size);

  for (let i = 0; i < files.length; i++) {
    const music = files[i];
    let audiotest = new Audio();
    console.log(music);
    console.log(e.target);
  }
  console.log(fileTest.files[1]);
}

function PlayMusic(event) {
  var musicPlayer = document.querySelector("audio");
  targetTag = event.target;
  targetClasses = document.getElementsByClassName(event.target.className);
  // previousElement = targetId.previousElementSibling
  var srcofthisMusic = event.target.title;
  if ((musicPlayer.src = "")) {
    musicPlayer.src = srcofthisMusic;
    musicPlayer.style.transition = "all 0.5s linear";
    musicPlayer.style.opacity = "100%";
    musicPlayer.play();
    targetTag.style.opacity = "100%";
    targetTag.classList.remove("pauseMusic");
  } else {
    musicPlayer.pause();
    musicPlayer.style.transition = "all 0.5s linear";
    musicPlayer.src = srcofthisMusic;
    musicPlayer.style.opacity = "100%";
    musicPlayer.play();
    targetTag.classList.remove("pauseMusic");
  }
  for (let i = 0; i < targetClasses.length; i++) {
    targetTag = event.target;
    const Iclass = targetClasses[i];
    Iclass.classList.remove("musicSelected");
    Iclass.classList.remove("pauseMusic");
  }
  musicPlayer.onplay = (e) => {
    targetTag.classList.add("musicSelected");
    targetTag.classList.remove("pauseMusic");
    musicPlayer.style =
      "animation: highlight-color infinite 2.5s 300ms alternate; opacity: 100%";
  };
  musicPlayer.onpause = () => {
    targetTag.classList.add("pauseMusic");
    musicPlayer.style.boxShadow = "white 0 0 30px";
    musicPlayer.style =
      "opacity: 100%;animation: highlight-color 1.7s 300ms alternate-reverse;";
  };
}

function slideChangemsic(event) {
  var musicPlayer = document.querySelector("audio");
  musicPlayer.style.transition = "all 0.2s linear";
}

//##################################################################### Mobile

var musicPlayer_mobile = document.querySelector("audio");
musicPlayer_mobile.style.opacity = "0%";

function PlayMusic_mobile(event) {
  let Albums = document.querySelectorAll(".slide img");
  for (let x = 0; x < Albums.length; x++) {
    const alb = Albums[x];
    alb.style = "box-shadow: white 0px 0px 0px";
  }

  var musicPlayer_mobile = document.querySelector("audio");
  targetTag_mobile = event.target;
  targetClasses_mobile = document.getElementsByClassName(
    event.target.className
  );
  //previousElement = target.previousElementSibling
  var srcofthisMusic_mobile = event.target.title;
  if ((musicPlayer_mobile.src = "")) {
    musicPlayer_mobile.src = srcofthisMusic_mobile;
    musicPlayer_mobile.style.transition = "all 0.5s linear";
    musicPlayer_mobile.style.opacity = "100%";
    musicPlayer_mobile.play();
    targetTag_mobile.style.opacity = "100%";
  } else {
    musicPlayer_mobile.pause();
    musicPlayer_mobile.style.transition = "all 0.5s linear";
    musicPlayer_mobile.src = srcofthisMusic_mobile;
    musicPlayer_mobile.style.opacity = "100%";
    musicPlayer_mobile.play();
  }
  for (let i = 0; i < targetClasses_mobile.length; i++) {
    const Iclass_mobile = targetClasses_mobile[i];
    Iclass_mobile.classList.remove("musicSelected_mobile");
  }
  if (musicPlayer_mobile.play) {
    targetTag_mobile.classList.add("musicSelected_mobile");
    event.target.previousElementSibling.style =
      "box-shadow: white 5px 5px 50px;";
    musicPlayer_mobile.style.transition = "all 1s ease-in-out";
  }
  musicPlayer_mobile.onplay = () => {
    targetTag_mobile.classList.remove("pauseMusic_mobile");
    event.target.previousElementSibling.style =
      "box-shadow: lightBlue 0px 0px 50px; animation: highlight-color infinite 5s 300ms alternate;";
  };
  musicPlayer_mobile.onpause = () => {
    targetTag_mobile.classList.add("pauseMusic_mobile");

    setTimeout(() => {
      event.target.previousElementSibling.style.transition =
        "box-shadow 0.3s ease-in-out";
      event.target.previousElementSibling.style.boxShadow =
        "white 0px 0px 30px";
      event.target.previousElementSibling.style =
        "box-shadow: white 0px 0px 50px;";
      // hightlight_c();
    }, 100);
  };
}

function slideChangemsic(event) {
  var musicPlayer_mobile = document.querySelector("audio");
  musicPlayer_mobile.style.transition = "all 0.2s linear";
}

//####################################################################
//-------------- Buttons of mobile_Page
var $ = document;
var currentindex = 1;

function startSlideImg(imgindex) {
  currentindex = imgindex;
  // var images=$.getElementById("slideContainer");
  var slides = $.getElementsByClassName("slide");
  if (currentindex > slides.length) {
    currentindex = 1;
  }
  if (currentindex < 1) {
    currentindex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transition = "all 0.5s ease-in-out";
    //dots[i].classname = dots[i].className.replace("active", "");
  }
  slides[currentindex - 1].style.display = "block";
}
startSlideImg(1);

/* var tag = document.createElement('script');
var readyflag = false;
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '_NunaC_aBcw',
    startSeconds: 2,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  readyflag = true;
  player.setLoop(true);
  console.clear();
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PAUSED && !done) {

  }
}
function stopVideo() {
  player.stopVideo();
}
$(document).ready(function () {
  $("#audio").click(function () {
    if (readyflag) {
      player.isMuted() ? player.unMute() : player.mute();
      $(this).toggleClass("fa-volume-up").toggleClass("fa-volume-off");
    }
  });
  (function () {
    $(window).on("blur focus", function (e) {
      var prevType = $(this).data("prevType");
      if (prevType != e.type) {   //  reduce double fire issues          
        switch (e.type) {
          case "blur":
            player.pauseVideo();
            $('#audio').toggleClass("fa-volume-up").toggleClass("fa-volume-off");
            break;
          case "focus":
            player.playVideo();
            player.setVolume(100);
            $('#audio').toggleClass("fa-volume-up").toggleClass("fa-volume-off");
            break;
        }
      }

      $(this).data("prevType", e.type);
    })
  })();
}); */

//Trigger de menu




$(document).ready(function() {
    var menuOpen = false;
    var menu = $(".menu-overlay,.menu-bar");

    function hidder() {
        menu.toggleClass("no-show").removeClass("show");
        $(".menu-bar").removeClass("w3-out-right");
    }

    function openMenu() {
        hidder();
        setTimeout(toogleMenu, 10);
    }

    function closeMenu() {
        if (menuOpen) {
            $(".menu-bar").addClass("w3-out-right");
            setTimeout(hidder, 1000)
            $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
            $("a#menu-icon-trigger").fadeIn();
            menuOpen = false;
        };
    }

    function toogleMenu() {
        menuOpen = true;
        menu.addClass("show");
        $(".menu-bar").toggleClass("w3-animate-right w3-animate-opacity");
        $("a#menu-icon-trigger").fadeOut();
        $(".close-button").on("click", closeMenu);
    };

    $("a#menu-icon-trigger").on("click", openMenu);
});
document.querySelector("#scroll-to-result").onclick = function() {
  document.querySelector("#game-title").innerHTML = document.querySelector("#gamename").value;
  if (document.querySelector("#authorlink").value.includes("https://")) {
    document.querySelector("#username").innerHTML = '<a href="' + document.querySelector("#authorlink").value + '" rel="nofollow noreferrer noopener" target="_blank" id="username">' + document.querySelector("#author").value + '</a>';
    document.querySelector("#embed-thumbnail").src = document.querySelector("#thumbnail").value;
    document.querySelector("#play-button").href = document.querySelector("#gamelink").value;
  } else if (document.querySelector("#authorlink").value.includes("http://")) {
    document.querySelector("#username").innerHTML = '<a href="' + document.querySelector("#authorlink").value + '" rel="nofollow noreferrer noopener" target="_blank" id="username">' + document.querySelector("#author").value + '</a>';
    document.querySelector("#embed-thumbnail").src = document.querySelector("#thumbnail").value;
    document.querySelector("#play-button").href = document.querySelector("#gamelink").value;
  } else {
    document.querySelector("#username").innerHTML = '<a href="' + "https://" + document.querySelector("#authorlink").value + '" rel="nofollow noreferrer noopener" target="_blank" id="username">' + document.querySelector("#author").value + '</a>';
    document.querySelector("#embed-thumbnail").src = "https://" + document.querySelector("#thumbnail").value;
    document.querySelector("#play-button").href = "https://" + document.querySelector("#gamelink").value;
  };
  document.querySelector("#code2").innerHTML = '<div class="embed"><div class="embed-container"><img src="' + document.querySelector("#thumbnail").value + '" alt="The link of the thumbnail is broken. Please enter another link." class="embed-thumbnail"><div class="game-info"><p class="game-title">' + document.querySelector("#gamename").value + '</p><p class="game-author">By <a href="' + document.querySelector("#authorlink").value + '" class="username">' + document.querySelector("#author").value + '</a></p><a href="' + document.querySelector("#gamelink").value + '" class="play-button"><span class="play-image"></span></a></div></div></div>';
  document.querySelector("#code3").innerHTML = '<div class="embed"><div class="embed-container"><img src="' + document.querySelector("#thumbnail").value + '" alt="The link of the thumbnail is broken. Please enter another link." class="embed-thumbnail"><div class="game-info"><p class="game-title">' + document.querySelector("#gamename").value + '</p><p class="game-author">By <a href="' + document.querySelector("#authorlink").value + '" class="username">' + document.querySelector("#author").value + '</a></p><a href="' + document.querySelector("#gamelink").value + '" class="play-button"><span class="play-image"></span></a></div></div></div>';
  document.querySelector(".error").style.display = "none";
  document.querySelector("#instructions").style.display = "block";
  document.querySelector("#embed").style.display = "inline-block";
};

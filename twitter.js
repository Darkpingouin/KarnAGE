

var remplace = function()
{
    var aTags = document.getElementsByClassName("tweet");
    var found;
    var img;
    var txt;
    var card;

    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i] && !(aTags[i].classList.contains("BetterTwitter")) && isIn(removeDiacritics(aTags[i].textContent.toUpperCase()))) {
        found = aTags[i].getElementsByClassName("content")[0];
        if (found)
        {
            //addImage(found);
            txt += '<img src="https://imgur.com/a/znVEEgr">'';

            var p = document.createElement("p");
            p.innerHTML = txt;
            //found.insertBefore(, found.children[found.children.lenght - 1]);
            txt = found.getElementsByClassName("js-tweet-text-container")[0];
            img = found.getElementsByClassName("AdaptiveMediaOuterContainer")[0];
            card = found.getElementsByClassName("card2")[0];
            if (txt) {
                found.replaceChild(p, txt);
              }
            if (img)
                found.removeChild(img);
            if (card)
                found.removeChild(card);
        }
        aTags[i].className += " BetterTwitter";
      }
    }
}

remplace();

window.addEventListener('scroll', function(e) {
    remplace();
});
